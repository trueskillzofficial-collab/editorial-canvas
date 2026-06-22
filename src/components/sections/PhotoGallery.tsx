import { motion } from "framer-motion";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  /** Tailwind columns classes for the masonry layout */
  columns?: string;
}

const PhotoGallery = ({
  photos,
  columns = "columns-1 sm:columns-2 lg:columns-3",
}: PhotoGalleryProps) => (
  <div className={`${columns} gap-6`}>
    {photos.map((photo, i) => (
      <motion.figure
        key={photo.src}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.35, delay: (i % 3) * 0.08 }}
        className="mb-6 break-inside-avoid"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          className="w-full rounded-sm shadow-lg"
          loading="lazy"
        />
        {photo.caption && (
          <figcaption className="text-xs text-muted-foreground italic mt-3">
            {photo.caption}
          </figcaption>
        )}
      </motion.figure>
    ))}
  </div>
);

export default PhotoGallery;
