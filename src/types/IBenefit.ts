import { FunctionComponent, SVGProps } from 'react';

export interface Benefit {
  id: number;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  ru: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
}
