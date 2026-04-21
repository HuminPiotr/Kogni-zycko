import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

// Przyciski zgodne z desing-guide sek. 5.4.
export function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-6 py-3 font-display uppercase tracking-wide text-sm ' +
    'border-2 border-border-cartoon transition-transform duration-100 ' +
    'active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed';

  const variants: Record<Variant, string> = {
    primary:
      'bg-electric-rose text-white shadow-[3px_3px_0_var(--color-border-cartoon)] ' +
      'hover:-translate-y-[2px] hover:shadow-[5px_5px_0_var(--color-border-cartoon)]',
    secondary:
      'bg-surface text-sky-blue border-sky-blue shadow-[3px_3px_0_var(--color-sky-blue)] ' +
      'hover:-translate-y-[2px] hover:shadow-[5px_5px_0_var(--color-sky-blue)]',
    ghost:
      'bg-transparent text-text-primary border-border-subtle hover:bg-surface-warm',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
