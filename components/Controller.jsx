'use client';
import { fetchImage } from '@/utils/requests';
import Form from '@/components/Form';
import PhotoGrid from '@/components/PhotoGrid';
import { useEffect, useState } from 'react';
import skeleton from '@/assets/images/image-skeleton.jpg';

const Controller = () => {
  const [formData, setFormData] = useState([]);
  const [imageData, setImageData] = useState({
    data: [
      {
        asset_id: '0',
        asset_url: skeleton,
        type: '',
      },
      {
        asset_id: '1',
        asset_url: skeleton,
        type: '',
      },
      {
        asset_id: '2',
        asset_url: skeleton,
        type: '',
      },
      {
        asset_id: '3',
        asset_url: skeleton,
        type: '',
      },
    ],
  });

  const getFormData = (data) => {
    setFormData(data);
  };

  useEffect(() => {
    const getImages = async () => {
      const generatedImage = await fetchImage(
        formData.prompt,
        formData.quality,
        formData.style,
        parseInt(formData.guidance) || 50
      );
      setImageData(generatedImage.data);
      console.log('Generated Data' + generatedImage.data);
    };

    if (formData.prompt) {
      getImages();
    }
  }, [formData]);

  return (
    <>
      <Form getFormData={getFormData} />
      <main className='pt-6 flex min-h-screen flex-col items-center justify-between p-24'>
        <p className='pb-12 text-white lg:text-4xl md:text-3xl sm:text-2xl'>
          Text to Image AI Generator
        </p>
        <PhotoGrid formData={imageData} />
      </main>
    </>
  );
};
export default Controller;
