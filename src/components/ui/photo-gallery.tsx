import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react';
import { Button } from './button';
import { Card } from './card';

interface Photo {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  columns?: number;
  className?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ 
  photos, 
  columns = 3,
  className = '' 
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  const goToNext = () => {
    const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const downloadImage = async (src: string, filename: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const shareImage = (photo: Photo) => {
    if (navigator.share) {
      navigator.share({
        title: photo.title || 'Diamond Foundation Photo',
        text: photo.description || 'Check out this photo from Diamond Foundation',
        url: photo.src,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(photo.src);
    }
  };

  return (
    <>
      <div 
        className={`grid gap-4 ${className}`}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => openLightbox(photo, index)}
          >
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {photo.title && (
                <div className="p-3">
                  <h4 className="font-medium text-sm truncate">{photo.title}</h4>
                  {photo.description && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                </div>
              )}
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Action buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage(selectedPhoto.src, selectedPhoto.title || 'photo');
                }}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  shareImage(selectedPhoto);
                }}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              {(selectedPhoto.title || selectedPhoto.description) && (
                <div className="mt-4 text-center text-white max-w-lg">
                  {selectedPhoto.title && (
                    <h3 className="text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                  )}
                  {selectedPhoto.description && (
                    <p className="text-gray-300">{selectedPhoto.description}</p>
                  )}
                </div>
              )}

              {/* Image counter */}
              <div className="mt-2 text-gray-400 text-sm">
                {currentIndex + 1} of {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;