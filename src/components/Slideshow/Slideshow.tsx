import { useState, useEffect } from 'react';
import 

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
  useEffect(() => {

  }, [selection]);

  return (
    <div>
      <div><img src={photos[selection].image} alt={results[selection].name} /></div>
      <div>
        <button type="button" aria-label={results[0].name} onClick={() => setSelection(0)} />
        <button type="button" aria-label={results[1].name} onClick={() => setSelection(1)} />
        <button type="button" aria-label={results[2].name} onClick={() => setSelection(2)} />
        <button type="button" aria-label={results[3].name} onClick={() => setSelection(3)} />
        <button type="button" aria-label={results[4].name} onClick={() => setSelection(4)} />
        <button type="button" aria-label={results[5].name} onClick={() => setSelection(5)} />
        <button type="button" aria-label={results[6].name} onClick={() => setSelection(6)} />
        <button type="button" aria-label={results[7].name} onClick={() => setSelection(7)} />
        <button type="button" aria-label={results[8].name} onClick={() => setSelection(8)} />
        <button type="button" aria-label={results[9].name} onClick={() => setSelection(9)} />
        <button type="button" aria-label={results[10].name} onClick={() => setSelection(10)} />
        <button type="button" aria-label={results[11].name} onClick={() => setSelection(11)} />
      </div>
    </div>
  );
}
