import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';

interface ProductViewer360Props {
  baseUrl: string;
  totalFrames: number;
  startFrame?: number;
  width?: number;
  height?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number; // in milliseconds
}

const ProductViewer360: React.FC<ProductViewer360Props> = ({
  baseUrl,
  totalFrames,
  startFrame = 1,
  width = 576,
  height = 384,
  autoRotate = false,
  autoRotateSpeed = 80
}) => {
  const [currentFrame, setCurrentFrame] = useState(startFrame);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(autoRotate);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate the current image URL
  const getCurrentImageUrl = () => {
    // Format the frame number with leading zeros if needed
    const frameNumber = currentFrame.toString().padStart(2, '0');

    // Construct the new URL with the current frame number
    return `${baseUrl}${frameNumber}.jpg?w=576&q=60&dpr=1&updated_at=1635191289&h=384`;
  };

  // Handle mouse down event to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    if (isAutoRotating) {
      setIsAutoRotating(false);
    }
  };

  // Handle touch start event for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    if (isAutoRotating) {
      setIsAutoRotating(false);
    }
  };

  // Handle mouse move event to rotate the image
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 5) { // Add a small threshold to prevent accidental rotations
      const direction = deltaX > 0 ? 1 : -1;
      rotateImage(direction);
      setStartX(e.clientX);
    }
  };

  // Handle touch move event for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 5) {
      const direction = deltaX > 0 ? 1 : -1;
      rotateImage(direction);
      setStartX(e.touches[0].clientX);
    }
  };

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle touch end event for mobile
  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Rotate the image to the next or previous frame
  const rotateImage = (direction: number) => {
    setCurrentFrame((prevFrame) => {
      let newFrame = prevFrame + direction;

      // Wrap around if we go past the total frames or below 1
      if (newFrame > totalFrames) {
        newFrame = 1;
      } else if (newFrame < 1) {
        newFrame = totalFrames;
      }

      return newFrame;
    });
  };

  // Toggle auto-rotation
  const toggleAutoRotate = () => {
    setIsAutoRotating(!isAutoRotating);
  };

  // Set up auto-rotation effect
  useEffect(() => {
    if (isAutoRotating) {
      autoRotateIntervalRef.current = setInterval(() => {
        rotateImage(1); // Rotate clockwise
      }, autoRotateSpeed);
    } else if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = null;
    }

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [isAutoRotating, autoRotateSpeed]);

  // Add global mouse up and touch end event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    const handleGlobalTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  // Preload images for smoother rotation
  useEffect(() => {
    const preloadImages = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(2, '0');
        img.src = `${baseUrl}${frameNumber}.jpg?w=576&q=60&dpr=1&updated_at=1635191289&h=384`;
      }
    };

    preloadImages();
  }, [baseUrl, totalFrames]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className={`relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={getCurrentImageUrl()}
          alt={`Product view ${currentFrame}/${totalFrames}`}
          className="w-full h-full object-cover rounded-lg"
          draggable="false"
        />

        {/* Frame indicator */}
        {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          {currentFrame}/{totalFrames}
        </div> */}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => rotateImage(-1)}
          className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          aria-label="Rotate left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={toggleAutoRotate}
          className={`p-2 rounded-full transition-colors ${isAutoRotating ? 'bg-white text-black' : 'bg-zinc-800 hover:bg-zinc-700'}`}
          aria-label={isAutoRotating ? "Stop auto-rotate" : "Start auto-rotate"}
        >
          <RotateCw className={`h-5 w-5 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }} />
        </button>

        <button
          onClick={() => rotateImage(1)}
          className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors"
          aria-label="Rotate right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductViewer360;
