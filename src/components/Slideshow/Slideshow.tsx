import { useState } from 'react';

type Props = {
  results: string[],
};

export default function Slideshow({ results }: Props) {
  const [selection, setSelection] = useState(0);
  const [mainPhoto, setMainPhoto] = useState(results);

  return (
    <div>
      <div>

      </div>
      <div>
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
        <button />
      </div>
    </div>
  );
}
