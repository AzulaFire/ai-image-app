/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';

const PhotoGrid = ({ formData }) => {
  const [imageData, setImageData] = useState(formData);

  return (
    <Gallery>
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
        {imageData.data.map((item) => (
          <Item
            key={item.asset_id}
            original={item.asset_url.src}
            thumbnail={item.asset_url.src}
            width={item.asset_url.width}
            height={item.asset_url.height}
          >
            {({ ref, open }) => (
              <Image
                ref={ref}
                onClick={open}
                className='h-auto max-w-full rounded-lg'
                src={item.asset_url}
                alt={item.type}
                width={483}
                height={396}
                priority={true}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};
export default PhotoGrid;
