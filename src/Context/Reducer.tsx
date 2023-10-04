import { Action, State } from "../Types";

//   : false, isSubMenuOpen;

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN_MAIN_MENU":
      return { ...state, isMainMenuOpen: !state.isMainMenuOpen };
    case "OPEN_SUB_MENU":
      return { ...state, isSubMenuOpen: !state.isSubMenuOpen };
    default:
      return state;
  }
};
