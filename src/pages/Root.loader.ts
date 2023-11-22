import key from '../key.js';
// import data from '../../data.js';
import { GamesType } from './Root.js';

function generateFakePrice() {
  const prices = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
  let index = Math.random();
  let price;
  if (index < 0.7) {
    // 70% chance of landing $0-$30
    index = Math.floor(index * 10);
    if (index === 0) {
      price = 'Free To Play';
    } else {
      price = `$${prices[index] - 1}.99`;
    }
  } else {
    // 30% chance of landing $35-$60
    index = Math.floor((index - 0.7) * 20) + 7;
    price = `$  ${prices[index] - 1}.99`;
  }
  return price;
}

function threeMonthInterval() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  let prevMonth: number | string;
  let prevYear: number | string;
  if (parseInt(month, 10) > 3) {
    prevMonth = String(today.getMonth() - 2).padStart(2, '0');
    prevYear = year;
  } else {
    prevMonth = String(today.getMonth() + 10).padStart(2, '0');
    prevYear = year - 1;
  }
  return `${prevYear}-${prevMonth}-01,${year}-${month}-01`;
}
function addGamePrices(data: GamesType) {
  const copy = { ...data };
  copy.results = copy.results.map(
    (game) => ({ ...game, price: generateFakePrice() }),
  );
  return copy;
}

export default async function rootLoader() {
  const time = threeMonthInterval();
  const response = await fetch(
    // `https://api.rawg.io/api/games?key=${key}&platforms=4&page=1&page_size=40&updated=${time}&ordering=-added`,
  );
  if (!response.ok) {
    throw new Error(
      `This is an HTTP error: The status is ${response.status}`,
    );
  }
  const actualData = await response.json();
  const gamesWithPrices: GamesType = addGamePrices(actualData);
  return gamesWithPrices;
}
