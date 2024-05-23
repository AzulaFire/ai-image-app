/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { fetchImage } from '@/utils/requests';

const PhotoGrid = ({ prompt, quality, style, guidance }) => {
  console.log(prompt, quality, style, guidance);

  let imageData = [];

  const getImages = async () => {
    const generatedImage = await fetchImage(
      prompt,
      quality,
      style,
      parseInt(guidance)
    );
    imageData = generatedImage.data;
  };

  if (prompt && prompt.length > 0) {
    getImages();
  }

  return (
    <div>
      {imageData.length > 0 && (
        <Gallery>
          <div className='grid grid-cols-2 gap-2'>
            {imageData.map((item) => (
              <div key={item.asset_id}>
                <Item
                  original={item.asset_url}
                  thumbnail={item.asset_url}
                  width='824'
                  height='637'
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
              </div>
            ))}
          </div>
        </Gallery>
      )}
    </div>
  );
};
export default PhotoGrid;
