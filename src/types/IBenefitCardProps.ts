import { FunctionComponent, SVGProps } from 'react';

export interface IBenefitCardProps {
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
