import { IAuthor } from '../../IAuthor';
import { IStackItem } from '../../IStack';

export interface IProjectCardProps {
  id: number;
  imageUrl: string | null;
  title: string;
  author: IAuthor;
  date: string;
  target: string;
  stack: IStackItem[];
  description: string;
}
