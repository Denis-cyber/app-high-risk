import { StrictMode, ReactNode, FC } from "react";
import { BrowserRouter } from "react-router-dom";

export const BasicWrapper: FC<{ children: ReactNode }> = ({ children }) => (
  <StrictMode>
    <BrowserRouter>{children}</BrowserRouter>
  </StrictMode>
);
