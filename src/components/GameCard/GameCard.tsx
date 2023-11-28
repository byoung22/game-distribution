import { useState } from 'react';
import { InfoType } from '../../types/types';
import styles from './GameCard.module.css';

export default function GameCard({ gameData, descriptionData }: InfoType) {
  const [displayIndex, setdisplayIndex] = useState(0);

  const game = gameData.results[0];
  const mainImage = gameData.results[0].short_screenshots[0].image;
  const screenshots = gameData.results[0].short_screenshots.slice(1);
  const firstParagraph = descriptionData.description_raw.split('\n\n')[0];

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <div className={styles.display}>
          <img src={screenshots[displayIndex].image} alt={game.name} />
        </div>
        <div className={styles.screenshots}>
          {screenshots.map((obj) => (
            <div className={styles.screenshotBox} key={obj.id}>
              <img className={styles.screenshot} src={obj.image} alt={game.name} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.mainImage} style={{ backgroundImage: `url(${mainImage})` }} />
        <p>{firstParagraph}</p>
      </div>
    </div>
  );
}
