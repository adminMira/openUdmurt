interface NavLink {
  path: string;
  children?: string[][];
}
export interface Navigation {
  [key: string]: NavLink;
}
