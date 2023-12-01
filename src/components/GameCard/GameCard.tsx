import { useState } from 'react';
import { InfoType } from '../../types/types';
import styles from './GameCard.module.css';

export default function GameCard({ gameData, descriptionData }: InfoType) {
  const [displayIndex, setDisplayIndex] = useState(0);

  const game = gameData.results[0];
  const mainImage = gameData.results[0].short_screenshots[0].image;
  const screenshots = gameData.results[0].short_screenshots.slice(1);
  const firstParagraph = descriptionData.description_raw.split('\n\n')[0];

  // RECENT REVIEWS:
  // Mostly Positive (14,977)
  // ALL REVIEWS:
  // Mostly Positive (426,401) *
  // RELEASE DATE:
  // Aug 15, 2013
  // DEVELOPER:
  // Gaijin Entertainment
  // PUBLISHER:
  // Gaijin Distribution KFT
  // Popular user-defined tags for this product:
  // Free to PlayVehicular CombatCombatVR+

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <img className={styles.image} src={screenshots[displayIndex].image} alt={game.name} />
      </div>
      <div className={styles.screenshotBox}>
        <div className={styles.screenshotList}>
          {screenshots.map((obj, index) => (
            <button
              type="button"
              className={styles.screenshotCard}
              key={obj.id}
              onClick={() => setDisplayIndex(index)}
            >
              <img className={styles.image} src={obj.image} alt={game.name} />
            </button>
          ))}
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
