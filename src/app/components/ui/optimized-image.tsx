"use client";

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  className?: string;
  alt: string; // Make alt required
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  className = '',
  alt,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={`transition-all duration-700 ease-in-out ${
        isLoaded 
          ? 'blur-0 scale-100 opacity-100' 
          : 'blur-md scale-105 opacity-0'
      } ${className}`}
    />
  );
};
