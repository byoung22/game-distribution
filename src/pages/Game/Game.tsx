import { useParams } from 'react-router-dom';
import styles from './Game.module.css';

export default function Game() {
  const { slug } = useParams();
  return (
    <div>
      {slug}
    </div>
  );
}
