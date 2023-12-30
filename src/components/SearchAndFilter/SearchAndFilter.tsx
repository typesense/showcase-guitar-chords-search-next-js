import { RefinementList, SearchBox } from 'react-instantsearch';
import s from './SearchAndFilter.module.scss';

const classNames = {
  checkbox: s.checkbox,
  count: s.count,
};
export default function SearchAndFilter() {
  return (
    <aside className={s.SearchAndFilter}>
      <h2>Filter results</h2>
      {/*//TODO: implement debounce */}
      <SearchBox placeholder='Search...' searchAsYouType={false} />
      <h3>Key</h3>
      <RefinementList
        attribute='key'
        sortBy={['name']}
        classNames={classNames}
      />
      <h3>Capo</h3>
      <RefinementList attribute='positions.capo' classNames={classNames} />
    </aside>
  );
}
