# 🎸 Instant Guitar Chord Positions Search, powered by Typesense

View it live here: [typesense-guitar-chords.vercel.app](https://typesense-guitar-chords.vercel.app/)

## Tech Stack

- <a href="https://github.com/typesense/typesense" target="_blank">Typesense</a>
- NextJS
- Typescript
- Sass
- Vitest
- Cypress

All make for a blazingly fast search experience 🔥🔥🔥

The guitar chord dataset & chord svg generation is from <a href="https://github.com/tombatossals/chords-db" target="_blank">tombatossals</a> which contains 2141 chord shapes of 552 chords.

The web app is deployed on Vercel, powered by Typesense cluster running on <a href="https://cloud.typesense.org" target="_blank">Typesense Cloud</a>.

## Repo structure

- `src/` contains UI components
- `scripts/` contains file to index data from `scripts/data` into Typesense

## Development

To run this project locally, make sure you have docker and nodejs, install the dependencies and run the local server:

```shell
npm i

npm run start:typesense

npm run index:typesense

npm run dev
```

Open http://localhost:3000 to see the app ✌️
