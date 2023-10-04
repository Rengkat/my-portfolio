import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { State } from "../Types";

interface Props {
  children: React.ReactNode;
}
interface AppState extends State {
  openMainNav: () => void;
}
const initialState: State = {
  isMainMenuOpen: false,
  isSubMenuOpen: false,
};
export const AppContext = createContext<AppState | null>(null);
const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const openMainNav = () => {
    dispatch({ type: "OPEN_MAIN_MENU" });
  };
  return <AppContext.Provider value={{ ...state, openMainNav }}>{children}</AppContext.Provider>;
};

export default Provider;
