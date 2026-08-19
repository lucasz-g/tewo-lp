'use client';

import Image from 'next/image';
import { useCallback, useRef, useState } from 'react';

import './ProductGallery.css';

interface ProductGalleryItem {
  image: string;
  label: string;
}

interface ProductGalleryProps {
  items: ProductGalleryItem[];
}

export default function ProductGallery({ items }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const itemCount = items.length;

  const navigate = useCallback(
    (step: number) => {
      if (itemCount < 2) return;
      setActiveIndex(current => (current + step + itemCount) % itemCount);
    },
    [itemCount]
  );

  if (itemCount === 0) return null;

  const activeItem = items[activeIndex];

  return (
    <div
      className="product-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label="CycleTrack product screens"
      tabIndex={0}
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          navigate(-1);
        }
        if (event.key === 'ArrowRight') {
          event.preventDefault();
          navigate(1);
        }
      }}
      onPointerDown={event => {
        pointerStartX.current = event.clientX;
      }}
      onPointerUp={event => {
        if (pointerStartX.current === null) return;
        const distance = event.clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (Math.abs(distance) < 50) return;
        navigate(distance > 0 ? -1 : 1);
      }}
      onPointerCancel={() => {
        pointerStartX.current = null;
      }}
    >
      <div className="product-gallery__stage">
        <div className="product-gallery__glow" aria-hidden="true" />

        <div className="product-gallery__window">
          <div className="product-gallery__bar">
            <div className="product-gallery__dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="product-gallery__bar-label">CycleTrack</span>
            <span className="product-gallery__count">
              {String(activeIndex + 1).padStart(2, '0')} / {String(itemCount).padStart(2, '0')}
            </span>
          </div>

          <div className="product-gallery__viewport" key={activeItem.image}>
            <Image
              src={activeItem.image}
              alt={activeItem.label}
              fill
              sizes="(max-width: 700px) 94vw, (max-width: 1200px) 88vw, 1180px"
              unoptimized
            />
          </div>
        </div>

        {itemCount > 1 ? (
          <>
            <button
              className="product-gallery__arrow product-gallery__arrow--previous"
              type="button"
              aria-label="Previous screen"
              onClick={() => navigate(-1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              className="product-gallery__arrow product-gallery__arrow--next"
              type="button"
              aria-label="Next screen"
              onClick={() => navigate(1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </>
        ) : null}
      </div>

      <div className="product-gallery__caption" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
        <p>{activeItem.label}</p>
      </div>

      <div className="product-gallery__thumbnails" aria-label="Choose a product screen">
        {items.map((item, index) => (
          <button
            className={`product-gallery__thumbnail${index === activeIndex ? ' is-active' : ''}`}
            type="button"
            key={item.image}
            aria-label={item.label}
            aria-current={index === activeIndex ? 'true' : undefined}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={item.image} alt="" fill sizes="150px" unoptimized />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
