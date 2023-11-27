import { InfoType } from '../../pages/Game/Game';
import styles from './GameCard.module.css';

type PropType = {
  info: InfoType,
};

export default function GameCard({ info }: PropType) {
  const game = info.data.results[0];
  const paragraphs = info.descriptionData.description_raw.split('\n\n');
  return (
    <div>
      <div>
        <div />
        <div />
      </div>
      <div className={styles.right}>
        <div className={styles.mainImage} style={{ backgroundImage: `url(${game.short_screenshots[0].image})` }} />
        {paragraphs.map((par) => (<p key={par.substring(0, 10)}>{par}</p>))}
      </div>
    </div>
  );
}
