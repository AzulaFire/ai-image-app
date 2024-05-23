import { fetchImage } from '@/utils/requests';
import Image from 'next/image';

const ImageCard = async ({ prompt, quality, scale, style }) => {
  const generatedImage = await fetchImage(prompt, quality, scale, style);
  const imageData = generatedImage.data;

  return (
    <>
      {imageData.map((item) => (
        <div key={item.asset_id}>
          <Image
            src={item.asset_url}
            alt={item.type}
            width={600}
            height={600}
            priority={true}
            className='rounded-md drop-shadow-lg'
          />
        </div>
      ))}
    </>
  );
};
export default ImageCard;
