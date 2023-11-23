import { useParams, useLoaderData } from 'react-router-dom';
import styles from './Game.module.css';
import key from '../../key';

type PropType = {
  params: ParamsType,
};

type ParamsType = {
  slug: string,
};

export async function loader({ params }: PropType) {
  const response = await fetch(
    // `https://api.rawg.io/api/games?key=${key}&platforms=4&search=${params.slug}&search_exact=true`,
  );
  if (!response.ok) {
    throw new Error(
      `This is an HTTP error: The status is ${response.status}`,
    );
  }
  const actualData = await response.json();
  console.log(actualData);
  return actualData;
}

export default function Game() {
  const { slug } = useParams();
  return (
    <div>
      {slug}
    </div>
  );
}
