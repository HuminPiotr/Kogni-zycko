import type { ReactNode } from 'react';

interface Props {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  maxHeight?: string;
}

export function BottomSheet({ open, onClose, children, maxHeight = '85vh' }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div
        className="absolute inset-0 bg-black/50 animate-fade-in"
        onClick={onClose}
      />
      <div
        className="relative w-full overflow-y-auto animate-sheet bg-surface border-t-4 border-border-cartoon rounded-t-2xl"
        style={{ maxHeight }}
      >
        {children}
      </div>
    </div>
  );
}
