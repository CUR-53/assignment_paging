import Link from 'next/link';
import styles from './searchResults.module.css';

const SearchResults = ({ results }) => {
  const resultItems = results.data;
  console.log(resultItems);

  return (
    <div className={styles.container}>
      {resultItems?.map((item, index) => {
        return (
          <div className={styles.item} key={item._id}>
            <Link href={`/galleries/${item.gallery}/${item.author}`}>{item.author}</Link>
            <Link href={`/galleries/${item.gallery}`}>Gallery: {item.gallery}</Link>
            <p>Camera Model: {item.meta.image.Model}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default SearchResults;
