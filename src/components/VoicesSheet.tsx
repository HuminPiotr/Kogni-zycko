import type { VoiceLine } from '@/types/game';
import { BottomSheet } from '@/components/BottomSheet';
import { ChatBubble } from '@/components/ChatBubble';

interface Props {
  voices: VoiceLine[];
  open: boolean;
  onClose: () => void;
}

export function VoicesSheet({ voices, open, onClose }: Props) {
  return (
    <BottomSheet open={open} onClose={onClose} maxHeight="75vh">
      <div className="p-4 space-y-3 pb-8">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-display text-lg">Głosy mózgu</h2>
          <button
            onClick={onClose}
            className="font-mono text-sm opacity-60 hover:opacity-100 px-2 py-1"
          >
            ✕
          </button>
        </div>
        {voices.map((v, i) => (
          <ChatBubble key={`${v.structure}-${i}`} structure={v.structure} text={v.text} />
        ))}
      </div>
    </BottomSheet>
  );
}
