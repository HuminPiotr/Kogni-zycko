import { useEffect } from 'react';

interface ToastItem {
  id: number;
  message: string;
}

interface Props {
  toasts: ToastItem[];
  onDismiss: (id: number) => void;
}

export function ToastStack({ toasts, onDismiss }: Props) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 items-end pointer-events-none">
      {toasts.map((t) => (
        <Toast key={t.id} item={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

function Toast({ item, onDismiss }: { item: ToastItem; onDismiss: (id: number) => void }) {
  useEffect(() => {
    const id = setTimeout(() => onDismiss(item.id), 3000);
    return () => clearTimeout(id);
  }, [item.id, onDismiss]);

  return (
    <div
      className="animate-slide-up pointer-events-auto max-w-xs bg-text-primary text-text-on-dark border-l-4 border-electric-rose border-t-2 border-r-2 border-b-2 border-border-cartoon rounded-lg px-4 py-3 shadow-cartoon-m"
    >
      <p className="text-xs font-mono leading-relaxed">{item.message}</p>
    </div>
  );
}
