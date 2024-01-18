import { GithubIcon } from '../icons';
import s from './Heading.module.scss';

export default function Heading() {
  return (
    <>
      <div className={s.Heading}>
        <h1>Search guitar chords</h1>
        <div>
          powered by{' '}
          <a
            href='https://typesense.org/'
            target='_blank'
            rel='noopener noreferrer'
            id={s.typesense}
          >
            type<b>sense</b>|
          </a>
        </div>
      </div>
      <a
        href='https://github.com/typesense/showcase-guitar-chords-search-next-js'
        target='_blank'
        rel='noopener noreferrer'
        id={s.githubLink}
        title='Github repo'
      >
        <GithubIcon />
      </a>
    </>
  );
}
