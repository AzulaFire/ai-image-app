/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { fetchImage } from '@/utils/requests';

const PhotoGrid = ({ formData }) => {
  let imageData = [];
  const [photoData, setPhotoData] = useState([]);

  if (formData.length != 0) {
    setPhotoData[formData];
  }

  useEffect(() => {
    const getImages = async () => {
      const { prompt, quality, style, guidance } = photoData;
      const generatedImage = await fetchImage(prompt, quality, style, guidance);
      imageData = generatedImage.data;
    };
    getImages();
  }, [photoData]);

  return (
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
  );
};
export default PhotoGrid;
