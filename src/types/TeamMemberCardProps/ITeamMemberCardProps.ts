import { IStackItem } from '../IStack';

export interface ITeamMemberCardProps {
  name: string;
  stackList: IStackItem[];
  desc: string;
  uuid: string;
  tgLink?: string;
  ghLink?: string;
}
