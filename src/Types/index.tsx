export interface State {
  isMainMenuOpen: boolean;
  projects: Project[];
  projectsLoading: boolean;
  blogs: Blog[];
  blogsLoading: boolean;
  testimonials: Testimonials[];
  testminialsLoading: boolean;
}
export interface Project {
  subtitle: string;
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  githubLink: string;
  _id: string;
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  category: string[];
}
export interface DetailProjectType {
  technologiesUsed: string[];
  slug: {
    current: string;
    _type: "slug";
  };
  mainImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  imageSlider: {
    _type: "image";
    _key: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  }[];
  description: string;
  client: string;
  githubLink: string;
  liveUrl: string;
  _id: string;
  title: string;
  subtitle: string;
}
export interface Blog {
  keywords: string[];
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  shortDescription: string;
  tags: string[];
  dateOfPublication: string;
  _id: string;
  title: string;
  category: string[];
  externalUrl: string;
}
export interface Testimonials {
  image: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  firstName: string;
  surname: string;
  _id: string;
  testimony: string;
}
export interface Image {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}
export type Action =
  | { type: "OPEN_MAIN_MENU"; payload?: boolean }
  | { type: "FETCH_PROJECTS"; payload: Project[] }
  | { type: "LOADING_PROJECTS"; payload: boolean }
  | { type: "FETCH_BLOGS"; payload: Blog[] }
  | { type: "LOADING_BLOGS"; payload: boolean }
  | { type: "FETCH_TESTIMONIALS"; payload: Testimonials[] }
  | { type: "LOADING_TESTIMONIALS"; payload: boolean };

export function formatDate(dateString: Date) {
  // const options = { day: "numeric", month: "long", year: "numeric" };
  const date = new Date(dateString);
  const day = parseInt(date.toLocaleString("en-US", { day: "numeric" }), 10);
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { year: "numeric" });

  const dayWithSuffix = addOrdinalSuffix(day);

  return `${dayWithSuffix} ${month} ${year}`;
}

function addOrdinalSuffix(day: number) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }
}
