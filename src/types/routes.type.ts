import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TItemsParameter = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TItemsParameter[];
};
