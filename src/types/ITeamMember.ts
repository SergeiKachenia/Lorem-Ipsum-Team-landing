import { IStackItem } from './IStack';

export interface ITeamMember {
  uuid: string;
  ru: {
    name: string;
    stackList: IStackItem[];
    vkLink: string;
    gitHubLink: string;
    desc: string;
  };
  en: {
    name: string;
    stackList: IStackItem[];
    vkLink: string;
    gitHubLink: string;
    desc: string;
  };
}
