import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Slideshow.module.css';
import { GamesType } from '../../types/types';
import windowsLogo from '../../assets/windows.svg';
import xboxLogo from '../../assets/xbox.svg';
import playstationLogo from '../../assets/playstation.svg';

export default function Slideshow({ results }: GamesType) {
  const [displayedGame, setDisplayedGame] = useState(results[0]);
  let platform2 = null;
  let platform3 = null;
  if (displayedGame.parent_platforms.length > 1) {
    platform2 = displayedGame.parent_platforms[1].platform.name;
    if (displayedGame.parent_platforms.length > 2) {
      platform3 = displayedGame.parent_platforms[2].platform.name;
    }
  }

  function onChange(selection: number) {
    setDisplayedGame(results[selection]);
  }

  return (
    <div className={styles.slideshow}>
      <h2 className={styles.containerTitle}>FEATURED & RECOMMENDED</h2>
      <Link to={`games/${displayedGame.slug}`}>
        <div className={styles.card}>
          <div className={styles.mainPhoto}>
            <img
              src={displayedGame.short_screenshots[0].image}
              alt={`${displayedGame.name}`}
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.gameTitle}>{displayedGame.name}</h3>
            <div className={styles.photoContainer}>
              <div className={styles.secondaryPhoto}>
                <img
                  src={displayedGame.short_screenshots[1].image}
                  alt={`${displayedGame.name}`}
                />
              </div>
              <div className={styles.secondaryPhoto}>
                <img
                  src={displayedGame.short_screenshots[2].image}
                  alt={`${displayedGame.name}`}
                />
              </div>
              <div className={styles.secondaryPhoto}>
                <img
                  src={displayedGame.short_screenshots[3].image}
                  alt={`${displayedGame.name}`}
                />
              </div>
              <div className={styles.secondaryPhoto}>
                <img
                  src={displayedGame.short_screenshots[4].image}
                  alt={`${displayedGame.name}`}
                />
              </div>
            </div>
            <p className={styles.reason}>Now Available</p>
            <div className={styles.priceContainer}>
              <p className={styles.price}>{displayedGame.price}</p>
              <div className={styles.logoContainer}>
                <img className={styles.logo} src={windowsLogo} alt="Available For PC" />
                {(platform2 === 'Xbox' || platform3 === 'Xbox') && (
                  <img className={styles.logo} src={xboxLogo} alt="Available For Xbox" />
                )}
                {(platform2 === 'PlayStation') && (
                  <img className={styles.logo} src={playstationLogo} alt="Available For Playstation" />
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div>
        <button type="button" aria-label={results[0].name} onClick={() => onChange(0)} />
        <button type="button" aria-label={results[1].name} onClick={() => onChange(1)} />
        <button type="button" aria-label={results[2].name} onClick={() => onChange(2)} />
        <button type="button" aria-label={results[3].name} onClick={() => onChange(3)} />
        <button type="button" aria-label={results[4].name} onClick={() => onChange(4)} />
        <button type="button" aria-label={results[5].name} onClick={() => onChange(5)} />
        <button type="button" aria-label={results[6].name} onClick={() => onChange(6)} />
        <button type="button" aria-label={results[7].name} onClick={() => onChange(7)} />
        <button type="button" aria-label={results[8].name} onClick={() => onChange(8)} />
        <button type="button" aria-label={results[9].name} onClick={() => onChange(9)} />
        <button type="button" aria-label={results[10].name} onClick={() => onChange(10)} />
        <button type="button" aria-label={results[11].name} onClick={() => onChange(11)} />
      </div>
    </div>
  );
}
