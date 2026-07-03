"use client";

import { useRef, useEffect, useLayoutEffect, useState } from "react";
import * as React from "react";
import { cn } from "../../lib/utils";

export interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  className?: string;
  showDot?: boolean;
  dotSize?: number;
  /** "curve" draws a single smooth bezier; "elbow" draws a rounded flowchart-style connector with horizontal/vertical segments. */
  pathStyle?: "curve" | "elbow";
  /** Elbow only: corner rounding radius in px. */
  elbowRadius?: number;
  /** Elbow only: fraction (0-1) of the way across where the vertical segment sits. */
  elbowBend?: number;
  /** Draws a small ring marker at the elbow's corner joints. */
  showNode?: boolean;
  /** Draws an arrowhead at the end the flow travels toward. */
  showArrow?: boolean;
  /** Animates the base line drawing itself in once, before the looping flow pulse starts. */
  drawIn?: boolean;
  /** Duration of the one-time draw-in animation, in seconds. */
  drawInDuration?: number;
}

function elbowPath(x1: number, y1: number, x2: number, y2: number, radius: number, bend: number) {
  const midX = x1 + (x2 - x1) * bend;
  const rx = Math.min(radius, Math.abs(x2 - midX), Math.abs(midX - x1)) || 0;
  const ry = Math.min(radius, Math.abs(y2 - y1) / 2) || 0;
  const dirX1 = midX >= x1 ? 1 : -1;
  const dirX2 = x2 >= midX ? 1 : -1;
  const dirY = y2 >= y1 ? 1 : -1;
  return [
    `M ${x1} ${y1}`,
    `L ${midX - rx * dirX1} ${y1}`,
    `Q ${midX} ${y1} ${midX} ${y1 + ry * dirY}`,
    `L ${midX} ${y2 - ry * dirY}`,
    `Q ${midX} ${y2} ${midX + rx * dirX2} ${y2}`,
    `L ${x2} ${y2}`,
  ].join(" ");
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "#cbd5e1",
  pathWidth = 2,
  pathOpacity = 0.3,
  gradientStartColor = "#7c3aed",
  gradientStopColor = "#3b82f6",
  className,
  showDot = true,
  dotSize = 4,
  pathStyle = "curve",
  elbowRadius = 12,
  elbowBend = 0.5,
  showNode = false,
  showArrow = false,
  drawIn = true,
  drawInDuration = 0.8,
}: AnimatedBeamProps) {
  const idRef = useRef(`beam-${Math.random().toString(36).slice(2)}`);
  const trackRef = useRef<SVGPathElement>(null);
  const [d, setD] = useState("");
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);
  const [endpoints, setEndpoints] = useState({ x1: 0, y1: 0, x2: 0, y2: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [pathLength, setPathLength] = useState(0);

  useLayoutEffect(() => {
    if (trackRef.current) setPathLength(trackRef.current.getTotalLength());
  }, [d]);

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      const f = fromRef.current;
      const t = toRef.current;
      if (!c || !f || !t) return;
      const cr = c.getBoundingClientRect();
      const fr = f.getBoundingClientRect();
      const tr = t.getBoundingClientRect();
      const x1 = fr.left + fr.width / 2 - cr.left;
      const y1 = fr.top + fr.height / 2 - cr.top;
      const x2 = tr.left + tr.width / 2 - cr.left;
      const y2 = tr.top + tr.height / 2 - cr.top;
      setEndpoints({ x1, y1, x2, y2 });
      if (pathStyle === "elbow") {
        const midX = x1 + (x2 - x1) * elbowBend;
        setD(elbowPath(x1, y1, x2, y2, elbowRadius, elbowBend));
        setNodes([{ x: midX, y: y1 }, { x: midX, y: y2 }]);
      } else {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2 - curvature;
        setD(`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
        setNodes([]);
      }
      setSize({ w: cr.width, h: cr.height });
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature, pathStyle, elbowRadius, elbowBend]);

  if (!d) return null;
  const gid = `${idRef.current}-g`;
  const dash = reverse ? "-1000;1000" : "1000;-1000";
  const arrowAt = reverse ? { x: endpoints.x1, y: endpoints.y1 } : { x: endpoints.x2, y: endpoints.y2 };
  const arrowFrom = reverse ? { x: endpoints.x2, y: endpoints.y2 } : { x: endpoints.x1, y: endpoints.y1 };
  // Elbow paths approach each end along a horizontal segment, not the straight line between
  // the two far endpoints, so the arrow must point along that local segment, not the diagonal.
  const arrowAngle = pathStyle === "elbow" && nodes.length === 2
    ? (arrowAt.x - nodes[0].x >= 0 ? 0 : 180)
    : (Math.atan2(arrowAt.y - arrowFrom.y, arrowAt.x - arrowFrom.x) * 180) / Math.PI;
  const drawInPending = drawIn && pathLength === 0;
  const flowBegin = delay + (drawIn ? drawInDuration : 0);

  return (
    <svg
      className={cn("pointer-events-none absolute left-0 top-0", className)}
      width={size.w} height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      fill="none"
    >
      <defs>
        <linearGradient id={gid} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%"  stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor}  stopOpacity="0" />
        </linearGradient>
      </defs>
      <path ref={trackRef} d={d} stroke={pathColor} strokeWidth={pathWidth}
        strokeOpacity={drawInPending ? 0 : pathOpacity} strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray={drawIn && pathLength > 0 ? pathLength : undefined}
        strokeDashoffset={drawIn && pathLength > 0 ? pathLength : undefined}>
        {drawIn && pathLength > 0 && (
          <animate attributeName="stroke-dashoffset" from={pathLength} to={0}
            dur={`${drawInDuration}s`} begin={`${delay}s`} fill="freeze" calcMode="spline" keySplines="0.16 1 0.3 1" />
        )}
      </path>
      {!drawInPending && (
        <path d={d} stroke={`url(#${gid})`} strokeWidth={pathWidth} strokeLinecap="round" strokeLinejoin="round">
          <animate attributeName="stroke-dashoffset" values={dash}
            dur={`${duration}s`} begin={`${flowBegin}s`} repeatCount="indefinite" />
          <animate attributeName="stroke-dasharray" values="0 1000;180 820;0 1000"
            dur={`${duration}s`} begin={`${flowBegin}s`} repeatCount="indefinite" />
        </path>
      )}
      {showArrow && !drawInPending && (
        <g transform={`translate(${arrowAt.x} ${arrowAt.y}) rotate(${arrowAngle})`} opacity={0}>
          <animate attributeName="opacity" from={0} to={1} dur="0.3s" begin={`${flowBegin}s`} fill="freeze" />
          <path d="M-8 -5 L1 0 L-8 5" stroke={gradientStopColor} strokeWidth={pathWidth} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      )}
      {showNode && !drawInPending && nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={4} fill="white" stroke={gradientStopColor} strokeWidth={2} />
      ))}
      {showDot && !drawInPending && (
        <circle r={dotSize} fill={gradientStopColor}>
          <animateMotion dur={`${duration}s`} begin={`${flowBegin}s`} repeatCount="indefinite"
            path={d} keyPoints={reverse ? "1;0" : "0;1"} keyTimes="0;1" calcMode="linear" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1"
            dur={`${duration}s`} begin={`${flowBegin}s`} repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  );
}
