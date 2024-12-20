import { createContext, Dispatch, SetStateAction } from "react";

export type searchType = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<searchType | undefined>(undefined);
