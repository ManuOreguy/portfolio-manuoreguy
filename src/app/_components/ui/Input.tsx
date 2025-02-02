"use client";

import { useState } from "react";
import { cn } from "@/app/lib/utils";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  textarea?: boolean;
}

export const Input = ({
  label,
  error,
  className,
  textarea,
  required,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
  };

  const Component = textarea ? "textarea" : "input";

  return (
    <div className="relative group">
      <label
        className={cn(
          "absolute left-3 transition-all duration-200 pointer-events-none",
          isFocused || hasValue
            ? "-top-2 text-xs bg-[#161D2C] px-2 text-purple-400"
            : "top-3 text-gray-400",
          error && "text-red-400"
        )}
      >
        {label}
        {required && <span className="text-purple-400 ml-1">*</span>}
      </label>
      <Component
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={cn(
          "w-full px-4 py-3 bg-transparent border rounded-lg outline-none transition-all duration-200",
          "text-gray-100 placeholder-gray-500",
          "border-gray-700 focus:border-purple-500",
          "hover:border-gray-600",
          error ? "border-red-500" : "focus:border-purple-500",
          textarea && "min-h-[120px] resize-none",
          "[&:-webkit-autofill]:bg-[#161D2C]",
          "[&:-webkit-autofill]:border-purple-500",
          "[&:-webkit-autofill]:text-gray-100",
          "[&:-webkit-autofill]:shadow-[0_0_0_30px_#161D2C_inset]",
          "[&:-webkit-autofill]:[-webkit-text-fill-color:rgb(243_244_246)]",
          "[&:-webkit-autofill]:hover:border-purple-500",
          "[&:-webkit-autofill]:focus:border-purple-500",
          className
        )}
      />
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
};
