import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { Work } from "@/lib/types";
import BookCover from "./BookCover";

interface WorkDetailModalProps {
  work: Work | null;
  onClose: () => void;
}

const WorkDetailModal = ({ work, onClose }: WorkDetailModalProps) => {
  if (!work) return null;

  return (
    <Dialog open={!!work} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-display text-2xl font-semibold text-foreground">
            {work.title}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col sm:flex-row gap-6 mt-2">
          <div className="shrink-0 flex justify-center">
            <BookCover work={work} index={work.id} size="md" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="space-y-1">
              {work.publisher && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Editore:</span> {work.publisher}
                </p>
              )}
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Anno:</span> {work.year}
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Genere:</span> {work.genre}
              </p>
              {work.price && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Prezzo:</span> {work.price}
                </p>
              )}
            </div>
            <div className="divider-gold !mx-0" />
            {work.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-sm text-foreground/80 leading-relaxed italic">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkDetailModal;
