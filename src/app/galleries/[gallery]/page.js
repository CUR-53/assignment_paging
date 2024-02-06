import { fetchImagesForGallery } from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';

const Page = async ({ params }) => {
  const gallery = await fetchImagesForGallery(params.gallery);
  console.log(gallery);
  return (
    <div className={styles.container}>
      <h1>{params.gallery}</h1>
      <div className={styles.gallery}>
        {gallery.map((image, index) => {
          return (
            <div className={styles.image} key={image._id}>
              <Image src={image.path} alt="image" width={100} height={100} />
              <p>{image.author}</p>
              <p>{image.meta.image.Model}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
