import { useState, useEffect } from 'react';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import styles from './Home.module.css';
// import key from '../key.js';
import data from '../../data.js';

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

function generateFakePrice() {
  const prices = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  let index = Math.random();
  let price;
  if (index < 0.7) {
    // 70% chance of landing $0-$30
    index = Math.floor(index * 10);
    if (index === 0) {
      price = 'Free To Play';
    } else {
      price = `$${prices[index] - 1}.99`;
    }
  } else {
    // 30% chance of landing $35-$60
    index = Math.floor((index - 0.7) * 20) + 7;
    price = `$  ${prices[index] - 1}.99`;
  }
  return price;
}

// function threeMonthInterval() {
//   const today = new Date();
//   const month = String(today.getMonth() + 1).padStart(2, '0');
//   const year = today.getFullYear();
//   let prevMonth: number | string;
//   let prevYear: number | string;
//   if (parseInt(month, 10) > 3) {
//     prevMonth = String(today.getMonth() - 2).padStart(2, '0');
//     prevYear = year;
//   } else {
//     prevMonth = String(today.getMonth() + 10).padStart(2, '0');
//     prevYear = year - 1;
//   }
//   return `${prevYear}-${prevMonth}-01,${year}-${month}-01`;
// }

function Home() {
  const [games, setGames] = useState<GamesType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    function addGamePrices() {
      const copy = { ...data };
      copy.results = copy.results.map(
        (game: GameType) => ({ ...game, price: generateFakePrice() }),
      );
      setGames(copy);
    }
    addGamePrices();
  }, []);
  // useEffect(() => {
  //   const getGames = async () => {
  //     try {
  //       const time = threeMonthInterval();
  //       const response = await fetch(
  //         // `https://api.rawg.io/api/games?key=${key}&platforms=4&page=1&page_size=40&updated=${time}&ordering=-added`,
  //       );
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`,
  //         );
  //       }
  //       const actualData = await response.json();
  //       console.log(actualData);
  //       setGames(actualData);
  //       setError(null);
  //     } catch (err: unknown) {
  //       if (err instanceof Error) setError(err.message);
  //       else setError('An unknown error occurred');
  //       setGames(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getGames();
  // }, []);

  return (
    <div className={styles.container}>
      {games && <Slideshow results={games.results} />}
      <button onClick={() => console.log(games)} />
    </div>
  );
}

export default Home;