import React from "react";
import { render, screen } from "@testing-library/react";
import { UserSelectionProvider } from "../../../context/UserSelectionContext";
import SummaryItem from "./SummaryItem";

const Wrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <UserSelectionProvider>{children}</UserSelectionProvider>
);

test("renders the SummaryItem component", () => {
  render(<SummaryItem />, { wrapper: Wrapper });
});
