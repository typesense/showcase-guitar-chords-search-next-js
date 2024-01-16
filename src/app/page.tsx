'use client';
import s from './page.module.scss';
import { Configure, InfiniteHits, InstantSearch } from 'react-instantsearch';
import { typesenseInstantsearchAdapter } from '@/lib/typesense';
import { _GuitarChord } from '@/types/schema';
import HitItem from '@/components/HitItem/HitItem';
import SearchAndFilter from '@/components/SearchAndFilter/SearchAndFilter';
import Heading from '@/components/Heading/Heading';

export default function Home() {
  return (
    <main className={s.main}>
      <Heading />
      <div className={s.row}>
        <InstantSearch
          indexName='guitar-chords'
          searchClient={typesenseInstantsearchAdapter.searchClient}
          future={{ preserveSharedStateOnUnmount: true }}
        >
          <Configure hitsPerPage={6} />
          <SearchAndFilter />
          <InfiniteHits
            hitComponent={HitItem}
            showPrevious={false}
            classNames={{
              loadMore: s.loadMoreBtn,
            }}
          />
        </InstantSearch>
      </div>
    </main>
  );
}
