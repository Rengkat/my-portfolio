export interface State {
  isMainMenuOpen: boolean;
  isSubMenuOpen: boolean;
}
export type Action =
  | { type: "OPEN_MAIN_MENU"; payload?: boolean }
  | { type: "OPEN_SUB_MENU"; payload?: boolean };
