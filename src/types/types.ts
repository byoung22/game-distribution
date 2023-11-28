export type InfoType = {
  gameData: GamesType,
  descriptionData: DescriptionDataType,
};

type DescriptionDataType = {
  description_raw: string,
};

export type GamesType = {
  results: GameType[],
};

type GameType = {
  name: string,
  slug: string,
  parent_platforms: PlatformListType[],
  short_screenshots: ScreenshotListType[],
  price: string,
};

type PlatformListType = {
  platform: PlatformInfoType,
};

type PlatformInfoType = {
  name: string,
};

type ScreenshotListType = {
  id: number,
  image: string,
};
