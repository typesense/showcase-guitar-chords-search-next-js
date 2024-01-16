import { RefinementList } from 'react-instantsearch';
import s from './SearchAndFilter.module.scss';

const classNames = {
  checkbox: s.checkbox,
  count: s.count,
};
export default function SearchAndFilter() {
  return (
    <aside className={s.SearchAndFilter}>
      <h3>Key</h3>
      <RefinementList
        attribute='key'
        sortBy={['name']}
        classNames={classNames}
      />
      <h3>Suffix</h3>
      <RefinementList
        attribute='suffix'
        classNames={classNames}
        showMore
        limit={8}
        showMoreLimit={100}
        searchable
        searchablePlaceholder='Search suffixes...'
      />
      <h3>Capo</h3>
      <RefinementList attribute='positions.capo' classNames={classNames} />
    </aside>
  );
}
