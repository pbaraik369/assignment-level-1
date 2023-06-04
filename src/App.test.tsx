import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header with correct text", () => {
    const { getByText } = render(<Header />);
    const headerText = getByText("Assignment");
    expect(headerText).toBeInTheDocument();
  });
});
