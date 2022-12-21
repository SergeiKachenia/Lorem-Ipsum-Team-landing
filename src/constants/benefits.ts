import { ReactComponent as BugfreeIcon } from 'assets/icons/Bugfree.svg';
import { ReactComponent as ComfortIcon } from 'assets/icons/Comfort.svg';
import { ReactComponent as FullymadeIcon } from 'assets/icons/Fullymade.svg';
import { ReactComponent as SpeedIcon } from 'assets/icons/Speed.svg';
import { ReactComponent as SupportIcon } from 'assets/icons/Support.svg';
import { ReactComponent as WarrantyIcon } from 'assets/icons/Warranty.svg';

import { Benefit } from 'types/IBenefit';

export const benefits: Benefit[] = [
  {
    id: 1,
    Icon: SpeedIcon,
    ru: {
      title: 'Скорость',
      description: 'Мы всегда стараемся выполнить заказы раньше срока, чтобы Вы не теряли время в пустую',
    },
    en: {
      title: 'Speed',
      description: "We always try to fulfill orders ahead of time so that you don't waste time in vain",
    },
  },
  {
    id: 2,
    Icon: WarrantyIcon,
    ru: {
      title: 'Гарантия',
      description: 'Ваш заказ будет выполнен вне зависимости от возникших обстоятельств',
    },
    en: {
      title: 'Warranty',
      description: 'Your order will be executed regardless of the circumstances that have arisen',
    },
  },
  {
    id: 3,
    Icon: BugfreeIcon,
    ru: {
      title: 'Надёжность',
      description: 'Каждый проект проходит тестовый полигон и масштабный код ревью, для исключения багов',
    },
    en: {
      title: 'Reliability',
      description: 'Each project passes a test site and a large-scale code review to eliminate bugs',
    },
  },
  {
    id: 4,
    Icon: SupportIcon,
    ru: {
      title: 'Поддержка',
      description: 'Для каждого клиента выделяется личный агент поддержки, для решения вопросов кратчайшие сроки',
    },
    en: {
      title: 'Support',
      description: 'A personal support agent is allocated for each client to resolve issues as soon as possible',
    },
  },
  {
    id: 5,
    Icon: ComfortIcon,
    ru: {
      title: 'Удобство',
      description: 'Приятный интерфейс панели управления, готовность к правкам, 24/7 поддержка и многое другое',
    },
    en: {
      title: 'Convenience',
      description: 'Nice control panel interface, ready for edits, 24/7 support and much more',
    },
  },
  {
    id: 6,
    Icon: FullymadeIcon,
    ru: {
      title: 'Целостность',
      description: 'По завершению работы над заказом Вы получаете полностью настроенный проект, с рекламой и метриками',
    },
    en: {
      title: 'Integrity',
      description:
        'Upon completion of work on the order, you get a fully customized project, with advertising and metrics',
    },
  },
];
