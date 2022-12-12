export interface ICaseGalleryItem {
  id: number;
  slug: string;
  thumbnail: string;
  date: string;
  title: string;
}

export interface ICaseDetailsItem {
  id: number;
  summary: {
    description: string;
    goal: string;
    result: string;
    dev_period: string;
    industry: string;
  };
  tech_stack: {
    backend: string;
    db: string;
    frontend: string;
    api: string;
  };
  images: string[];
}
