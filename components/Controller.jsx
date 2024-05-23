'use client';
import Form from '@/components/Form';
import PhotoGrid from '@/components/PhotoGrid';
import { useState } from 'react';

const Controller = () => {
  const [formData, setFormData] = useState([]);

  const { prompt, quality, style, guidance } = formData;

  const getFormData = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Form getFormData={getFormData} />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        {formData && (
          <PhotoGrid
            prompt={prompt}
            quality={quality}
            style={style}
            guidance={guidance}
          />
        )}
      </main>
    </>
  );
};
export default Controller;
