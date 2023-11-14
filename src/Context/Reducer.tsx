import { Action, State } from "../Types";

//   : false, isSubMenuOpen;

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN_MAIN_MENU":
      return { ...state, isMainMenuOpen: !state.isMainMenuOpen };
    case "LOADING_PROJECTS":
      return { ...state, projectsLoading: action.payload };
    case "FETCH_PROJECTS":
      return { ...state, projects: action.payload };
    case "LOADING_BLOGS":
      return { ...state, blogsLoading: action.payload };
    case "FETCH_BLOGS":
      return { ...state, blogs: action.payload };
    case "FETCH_TESTIMONIALS":
      return { ...state, testimonials: action.payload };
    case "LOADING_TESTIMONIALS":
      return { ...state, testminialsLoading: action.payload };

    default:
      return state;
  }
};
