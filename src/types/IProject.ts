import { IAuthor } from './IAuthor';
import { IStackItem } from './IStack';

export interface IShortProjectInfo {
  id: number;
  imageUrl: string | null;
  imagesUrls?: string[] | null;
  ru: {
    title: string;
    author: IAuthor;
    date: string;
    target: string;
    stack: IStackItem[];
    description: string;
    link?: string;
  };
  en: {
    title: string;
    author: IAuthor;
    date: string;
    target: string;
    stack: IStackItem[];
    description: string;
    link?: string;
  };
}

export interface IProjectInfo {
  id: number;
  imagesUrls: string[] | null;
  ru: {
    title: string;
    author: IAuthor;
    date: string;
    target: string;
    stack: IStackItem[];
    description: string;
    link: string;
  };
  en: {
    title: string;
    author: IAuthor;
    date: string;
    target: string;
    stack: IStackItem[];
    description: string;
    link: string;
  };
}
