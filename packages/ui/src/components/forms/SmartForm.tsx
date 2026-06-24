"use client";

import {
  createContext,
  useContext,
  useId,
} from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
  type FieldValues,
  type DefaultValues,
  type SubmitHandler,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ZodSchema } from "zod";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

// ── SmartForm ────────────────────────────────────────────────────────────────

interface SmartFormProps<T extends FieldValues> {
  schema: ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
  className?: string;
  resetOnSuccess?: boolean;
}

export function SmartForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  resetOnSuccess = false,
}: SmartFormProps<T>) {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  async function handleSubmit(data: T) {
    await onSubmit(data);
    if (resetOnSuccess) methods.reset();
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-4", className)}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
}

// ── FormField ────────────────────────────────────────────────────────────────

interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  description?: string;
  required?: boolean;
  rules?: RegisterOptions;
  children: (field: {
    value: unknown;
    onChange: (...args: unknown[]) => void;
    onBlur: () => void;
    error?: string;
    id: string;
  }) => React.ReactNode;
}

export function FormField<T extends FieldValues>({
  name,
  label,
  description,
  required,
  children,
}: FormFieldProps<T>) {
  const { control, formState } = useFormContext<T>();
  const id = useId();
  const error = formState.errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="flex flex-col gap-1">
          {label && (
            <label htmlFor={id} className="text-sm font-medium text-neutral-700">
              {label}
              {required && <span className="text-red-500 ml-1" aria-hidden>*</span>}
            </label>
          )}
          {children({ ...field, error, id })}
          {description && !error && (
            <p className="text-xs text-neutral-400">{description}</p>
          )}
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key={error}
                role="alert"
                initial={{ opacity: 0, y: -4, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="text-xs text-red-500"
              >
                {error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      )}
    />
  );
}

// ── FormSubmit ───────────────────────────────────────────────────────────────

interface FormSubmitProps {
  children?: React.ReactNode;
  loadingText?: string;
  className?: string;
}

export function FormSubmit({ children = "Submit", loadingText = "Submitting…", className }: FormSubmitProps) {
  const { formState } = useFormContext();
  const { isSubmitting, isValid, isDirty } = formState;

  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "h-10 px-5 text-sm font-semibold rounded-xl bg-violet-600 text-white",
        "flex items-center justify-center gap-2",
        "transition-colors hover:bg-violet-500 disabled:opacity-70 disabled:cursor-not-allowed",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
        className
      )}
    >
      {isSubmitting ? (
        <>
          <motion.span
            className="h-4 w-4 rounded-full border-2 border-white border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
          />
          {loadingText}
        </>
      ) : children}
    </motion.button>
  );
}

// ── FormError (global form-level error) ──────────────────────────────────────

export function FormError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="alert"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
          </svg>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
