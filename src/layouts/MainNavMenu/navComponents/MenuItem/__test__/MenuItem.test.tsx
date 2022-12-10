import React from "react";

import { screen } from "@testing-library/react";
import { setup } from "@services";
import MenuItem from "..";
import NavProvider from "../../../context";

const mockData = {
  label: "features",
  children: <div>Hello</div>,
};

describe("MenuItem Component", () => {
  beforeEach(() => {
    setup(MenuItem, mockData, { wrapper: NavProvider });
  });

  it("should be in the document", () => {
    expect(screen.getByTestId("menu-item")).toBeInTheDocument();
  });
});
