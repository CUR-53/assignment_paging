import styles from './page.module.css';
import SearchField from '@/components/search/searchField/searchField';
import SearchResults from '@/components/search/searchResult/searchResults';

export default async function Page() {
  return (
    <main className={styles.page}>
      <SearchField />
    </main>
  );
}
