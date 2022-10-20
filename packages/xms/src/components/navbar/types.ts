import { IconType } from 'react-icons/lib';

export type NavigationLink = {
  title: string;
  icon: IconType;
  href: string;
  children?: Omit<NavigationLink, 'children'>[];
};
