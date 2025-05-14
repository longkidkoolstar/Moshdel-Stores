import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductViewer360Props {
  baseUrl: string;
  totalFrames: number;
  startFrame?: number;
  width?: number;
  height?: number;
}

const ProductViewer360: React.FC<ProductViewer360Props> = ({
  baseUrl,
  totalFrames,
  startFrame = 1,
  width = 576,
  height = 384
}) => {
  const [currentFrame, setCurrentFrame] = useState(startFrame);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDirection, setSpinDirection] = useState(0);
  const spinIntervalRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
  };

  // Handle touch start event for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default browser behavior
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
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
    e.preventDefault(); // Prevent default browser behavior
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
  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent default browser behavior
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

  // Start auto-spinning in the specified direction
  const startAutoSpin = (direction: number) => {
    // Clear any existing interval first
    if (spinIntervalRef.current !== null) {
      window.clearInterval(spinIntervalRef.current);
    }
    
    setIsSpinning(true);
    setSpinDirection(direction);
    
    // Create a new interval that calls rotateImage repeatedly
    spinIntervalRef.current = window.setInterval(() => {
      rotateImage(direction);
    }, 100); // Adjust speed by changing interval time
  };

  // Stop auto-spinning
  const stopAutoSpin = () => {
    if (spinIntervalRef.current !== null) {
      window.clearInterval(spinIntervalRef.current);
      spinIntervalRef.current = null;
    }
    setIsSpinning(false);
    setSpinDirection(0);
  };



  // Add global mouse up and touch end event listeners
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
      
      // Also stop auto-spinning when mouse is released anywhere
      if (isSpinning) {
        stopAutoSpin();
      }
    };

    const handleGlobalTouchEnd = () => {
      if (isDragging) {
        setIsDragging(false);
      }
      
      // Also stop auto-spinning when touch ends anywhere
      if (isSpinning) {
        stopAutoSpin();
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging, isSpinning]);

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
    
    // Clean up any intervals when component unmounts
    return () => {
      if (spinIntervalRef.current !== null) {
        window.clearInterval(spinIntervalRef.current);
      }
    };
  }, [baseUrl, totalFrames]);

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className={`relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ width: `${width}px`, height: `${height}px`, touchAction: 'none' }}
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
          onMouseDown={() => startAutoSpin(-1)}
          onMouseUp={stopAutoSpin}
          onMouseLeave={stopAutoSpin}
          onTouchStart={() => startAutoSpin(-1)}
          onTouchEnd={stopAutoSpin}
          className={`p-2 ${isSpinning && spinDirection === -1 ? 'bg-zinc-700' : 'bg-zinc-800 hover:bg-zinc-700'} rounded-full transition-colors`}
          aria-label="Rotate left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => rotateImage(1)}
          onMouseDown={() => startAutoSpin(1)}
          onMouseUp={stopAutoSpin}
          onMouseLeave={stopAutoSpin}
          onTouchStart={() => startAutoSpin(1)}
          onTouchEnd={stopAutoSpin}
          className={`p-2 ${isSpinning && spinDirection === 1 ? 'bg-zinc-700' : 'bg-zinc-800 hover:bg-zinc-700'} rounded-full transition-colors`}
          aria-label="Rotate right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductViewer360;
