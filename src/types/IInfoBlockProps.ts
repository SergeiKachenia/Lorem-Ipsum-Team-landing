import { IAuthor } from './IProject';
import { IStackItem } from './IStack';

export interface IInfoBlockProps {
  title: string;
  author: IAuthor;
  date: string;
  target: string;
  stack: IStackItem[];
  description: string;
  link: string;
}
