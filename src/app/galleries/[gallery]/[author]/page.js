import { fetchAuthorByName, fetchImagesByAuthorName } from '@/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';

const Page = async ({ params }) => {
  console.log(params);
  const author = await fetchAuthorByName(params.author.replace('%20', ' '));
  const AuthorGallery = await fetchImagesByAuthorName(author.author);
  console.log(AuthorGallery);

  return (
    <div className={styles.container}>
      <h1>{author.author}</h1>
      <div className={styles.gallery}>
        {AuthorGallery.map((image) => {
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
