import { IStackItem } from './IStack';

interface IAuthor {
  id: number;
  avatarUrl: string | null;
  name: string;
}

export interface IShortProjectInfo {
  id: number;
  imageUrl: string | null;
  title: string;
  author: IAuthor;
  date: string;
  target: string;
  stack: IStackItem[];
  description: string;
}

export interface IProjectInfo {
  id: number;
  imagesUrls: string[] | null;
  title: string;
  author: IAuthor;
  date: string;
  target: string;
  stack: IStackItem[];
  description: string;
  link: string;
}

export interface IProjectCardProps {
  imageUrl: string | null;
  title: string;
  author: IAuthor;
  date: string;
  target: string;
  stack: IStackItem[];
  description: string;
}
