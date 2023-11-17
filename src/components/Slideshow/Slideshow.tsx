import { useState, useEffect } from 'react';
import styles from './Slideshow.module.css';

type Props = {
  results: Game[],
};

type Game = {
  name: string,
  short_screenshots: GameScreenshots[],
};

type GameScreenshots = {
  image: string,
};

export default function Slideshow({ results }: Props) {
  const [selection, setSelection] = useState(0);
  const [photos, setPhotos] = useState(results[0].short_screenshots);

  function onChange(sel: number) {
    setSelection(sel);
    setPhotos(results[sel].short_screenshots);
  }

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.mainPhoto}>
          <img
            src={photos[0].image}
            alt={`${results[selection].name}`}
          />
        </div>
        <div className={styles.info}>
          <h3>{results[selection].name}</h3>
          <div className={styles.photoContainer}>
            <div className={styles.secondaryPhoto}>
              <img
                src={photos[1].image}
                alt={`${results[selection].name}`}
              />
            </div>
            <div className={styles.secondaryPhoto}>
              <img
                src={photos[2].image}
                alt={`${results[selection].name}`}
              />
            </div>
            <div className={styles.secondaryPhoto}>
              <img
                src={photos[3].image}
                alt={`${results[selection].name}`}
              />
            </div>
            <div className={styles.secondaryPhoto}>
              <img
                src={photos[4].image}
                alt={`${results[selection].name}`}
              />
            </div>
          </div>
          <p>Now Available</p>
        </div>
      </div>
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
