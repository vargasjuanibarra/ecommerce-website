export type FooterSection = {
  id: string;
  title: string;
  links: FooterLink[];
};

export type FooterLink = {
  name: string;
  link: string;
};
