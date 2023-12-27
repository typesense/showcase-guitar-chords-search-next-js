import { RefinementList, SearchBox } from 'react-instantsearch';
import s from './SearchAndFilter.module.scss';

const classNames = {
  checkbox: s.checkbox,
  count: s.count,
};
export default function SearchAndFilter() {
  return (
    <aside className={s.SearchAndFilter}>
      <h3>Filter results</h3>
      {/*//TODO: implement debounce */}
      <SearchBox placeholder='Search...' searchAsYouType={false} />
      <h4>Key</h4>
      <RefinementList
        attribute='key'
        sortBy={['name']}
        classNames={classNames}
      />
      <h4>Capo</h4>
      <RefinementList attribute='positions.capo' classNames={classNames} />
    </aside>
  );
}
