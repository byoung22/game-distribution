import { useState } from 'react';
import { InfoType } from '../../types/types';
import Slider from '../Slider/Slider';
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
        <img className={styles.image} src={screenshots[displayIndex].image} alt={game.name} />
      </div>
      <div className={styles.screenshotBox}>
        <div className={styles.screenshotList}>
          {screenshots.map((obj) => (
            <div className={styles.screenshotCard} key={obj.id}>
              <img className={styles.image} src={obj.image} alt={game.name} />
            </div>
          ))}
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
        </div>
      </div>
      <div />
      <div className={styles.right}>
        <div className={styles.mainImageBox}>
          <img className={styles.image} src={mainImage} alt={game.name} />
        </div>
        <p>{firstParagraph}</p>
      </div>
    </div>
  );
}
