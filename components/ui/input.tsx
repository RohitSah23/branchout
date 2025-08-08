import * as React from 'react';

import { cn } from '@/lib/utils';

/**
 * Props for the Input component.
 *
 * Extends all standard HTML input attributes available for an `<input>` element.
 * This allows the Input component to accept any valid input properties such as
 * `type`, `value`, `onChange`, etc.
 *
 * @see {@link https://react.dev/reference/react-dom/components/input}
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
