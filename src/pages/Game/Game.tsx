import { useLoaderData } from 'react-router-dom';
import { GamesType } from '../Home/Home';
import GameCard from '../../components/GameCard/GameCard';
import styles from './Game.module.css';
import key from '../../key';
import data from './gameData';
import descriptionData from './descriptionData';

type PropType = {
  params: ParamsType,
};

type ParamsType = {
  slug: string,
};

export type InfoType = {
  data: GamesType,
  descriptionData: DescriptionDataType,
};

type DescriptionDataType = {
  description_raw: string,
};

export async function loader({ params }: PropType) {
  // const response = await fetch(
  //   `https://api.rawg.io/api/games?key=${key}&platforms=4&search=${params.slug}&search_exact=true`,
  // );
  // if (!response.ok) {
  //   throw new Error(
  //     `This is an HTTP error: The status is ${response.status}`,
  //   );
  // }
  // const data = await response.json();
  // const response2 = await fetch(
  //   `https://api.rawg.io/api/games/${params.slug}?key=${key}&platforms=4`,
  // );
  // if (!response2.ok) {
  //   throw new Error(
  //     `This is an HTTP error: The status is ${response.status}`,
  //   );
  // }
  // const descriptionData = await response2.json();
  const obj = {
    data,
    descriptionData,
  };
  console.log(obj);
  return obj;
}

export default function Game() {
  const info = useLoaderData() as InfoType;
  return (
    <div className={styles.container}>
      <h2>{info.data.results[0].name}</h2>
      <GameCard
        info={info}
      />
    </div>
  );
}
