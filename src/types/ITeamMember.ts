import { IStackItem } from './IStack';

export interface ITeamMember {
  name: string;
  stackList: IStackItem[];
  vkLink: string;
  gitHubLink: string;
  desc: string;
  uuid: string;
}
