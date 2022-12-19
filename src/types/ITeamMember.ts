import { IStackItem } from './IStack';

export interface ITeamMember {
  uuid: string;
  vkLink: string;
  gitHubLink: string;
  ru: {
    name: string;
    stackList: IStackItem[];
    desc: string;
  };
  en: {
    name: string;
    stackList: IStackItem[];
    desc: string;
  };
}
