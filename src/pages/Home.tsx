import { useState, useEffect } from 'react';
import Header from '../components/Header/Header.js';
import Slideshow from '../components/Slideshow/Slideshow.js';
import key from '../key.js';
import data from './data.js';

type Games = {
  results: string[];
  next: string;
};

function threeMonthInterval() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  let prevMonth: number | string;
  let prevYear: number | string;
  if (parseInt(month, 10) > 3) {
    prevMonth = String(today.getMonth() - 2).padStart(2, '0');
    prevYear = year;
  } else {
    prevMonth = String(today.getMonth() + 10).padStart(2, '0');
    prevYear = year - 1;
  }
  return `${prevYear}-${prevMonth}-01,${year}-${month}-01`;
}

function Home() {
  const [games, setGames] = useState<Games | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setGames(data)
    console.log(data)
  }, [])
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
    <div>
      <Header />
      {games && <Slideshow results={games.results} />}
    </div>
  );
}

export default Home;
