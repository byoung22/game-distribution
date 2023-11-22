import { useState, useEffect } from 'react';
import Slideshow from '../../components/Slideshow/Slideshow.js';
import styles from './Home.module.css';

function Home() {
  const [games, setGames] = useState<GamesType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={styles.container}>
      {games && <Slideshow results={games.results} />}
      <button onClick={() => console.log(games)} />
    </div>
  );
}

export default Home;
