import { useLoaderData } from 'react-router-dom';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import styles from './Home.module.css';

export type GamesType = {
  results: GameType[],
  next: string,
};

type GameType = {
  name: string,
  slug: string,
  parent_platforms: PlatformListType[],
  short_screenshots: ScreenshotListType[],
  price: string,
};

type PlatformListType = {
  platform: PlatformInfoType,
};

type PlatformInfoType = {
  name: string,
};

type ScreenshotListType = {
  image: string,
};

function Home() {
  const games = useLoaderData() as GamesType;

  return (
    <div className={styles.container}>
      {games && <Slideshow results={games.results} />}
      <button onClick={() => console.log(games)} />
    </div>
  );
}

export default Home;
