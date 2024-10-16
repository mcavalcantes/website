export interface Education {
  START_DATE: string;
  END_DATE: string;
  TITLE: string;
  SUBTITLE: string;
}

export interface Skill {
  TITLE: string;
  ITEMS: string[];
}

export interface Experience {
  START_DATE: string;
  END_DATE: string;
  TITLE: string;
  SUBTITLE: string;
  BULLETS: [string, string, string];
}

export interface Project {
  HREF: string;
  TITLE: string;
  DESCRIPTION: string;
  BULLETS: [string, string, string];
}

export interface Achievement {
  DATE: string;
  TITLE: string;
  SUBTITLE: string;
  DESCRIPTION: string;
}

export interface Social {
  ICON: {
    BLACK: string;
    WHITE: string;
  };
  HREF: string;
  TITLE: string;
}

export interface Post {
  DATE: string;
  HREF: string;
  TITLE: string;
  PREVIEW: string;
  CONTENT: string;
}
