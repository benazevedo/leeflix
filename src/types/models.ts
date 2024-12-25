export interface IMovie {
  _id: number;
  ranking: string;
  titleImg: string;
  bgImg: string;
  previewImg: string;
  title: string;
  year: string;
  length: string;
  genre: string[];
  cast: string[];
  description: string;
  category: string[];
  series: string;
  active: boolean;
}

interface IAuthor {
  name: string;
  image: string;
}

export interface IBlog {
  _id: number;
  thumbnail: string;
  category: string;
  title: string;
  author: IAuthor;
  date: string;
}
