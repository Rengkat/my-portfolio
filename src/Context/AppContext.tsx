import { createContext, useEffect, useReducer } from "react";
import { Reducer } from "./Reducer";
import { Action, State } from "../Types";
import { Client } from "../../lib/sanity";

interface Props {
  children: React.ReactNode;
}
export interface AppState extends State {
  openMainNav: () => void;
}
const initialState: State = {
  isMainMenuOpen: true,
  projects: [],
  projectsLoading: false,
  blogs: [],
  blogsLoading: false,
  testminialsLoading: false,
  testimonials: [],
};
export const AppContext = createContext<AppState>({} as AppState);
const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    Reducer as React.Reducer<State, Action>, // Type assertion for the Reducer
    initialState
  );

  const openMainNav = () => {
    dispatch({ type: "OPEN_MAIN_MENU" });
  };
  // fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      dispatch({ type: "LOADING_PROJECTS", payload: true });
      try {
        const query = `*[_type == 'projects']{
            _id,
            title,
            slug,
            subtitle,
            mainImage,
            githubLink,
            category
          }`;
        const data = await Client.fetch(query);
        dispatch({ type: "FETCH_PROJECTS", payload: data });
        dispatch({ type: "LOADING_PROJECTS", payload: false });
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);
  // fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      dispatch({ type: "LOADING_BLOGS", payload: true });
      try {
        const query = `*[_type == 'blogs']{
        _id,
        title,
        category,
        keywords,
        image,
        shortDescription,
        tags,
        dateOfPublication,
        externalUrl
      }`;
        const data = await Client.fetch(query);
        dispatch({ type: "FETCH_BLOGS", payload: data });
        dispatch({ type: "LOADING_BLOGS", payload: false });
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);
  useEffect(() => {
    const getTestimonials = async () => {
      dispatch({ type: "LOADING_TESTIMONIALS", payload: true });
      try {
        const query = `*[_type == 'testimonial']{
          _id,
          firstName,
          surname,
          testimony,
          image,
        }`;
        const data = await Client.fetch(query);
        dispatch({ type: "FETCH_TESTIMONIALS", payload: data });
        dispatch({ type: "LOADING_TESTIMONIALS", payload: false });
      } catch (error) {
        console.log(error);
      }
    };
    getTestimonials();
  }, []);

  return <AppContext.Provider value={{ ...state, openMainNav }}>{children}</AppContext.Provider>;
};

export default Provider;
