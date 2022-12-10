import { screen } from "@testing-library/react";
import PrimaryMenu, { PrimaryMenuType } from "..";
import { setup } from "@services";

const mockData = {
  label: "Sign in",
  path: "/signin",
  target: null,
};

const primaryMenuSetup = (data: PrimaryMenuType) => {
  return setup<PrimaryMenuType>(PrimaryMenu, data);
};
describe("Primary Menu Component", () => {
  beforeEach(() => {
    primaryMenuSetup(mockData);
  });

  it("should be in the document", () => {
    expect(screen.getByTestId("primary-menu")).toBeInTheDocument();
  });

  test("label should not be empty", () => {
    expect(screen.getByTestId("primary-menu-label")).toHaveTextContent(
      mockData.label
    );
  });

  test("href attr should not be empty", () => {
    expect(screen.getByTestId("primary-menu-link")).toHaveAttribute(
      "href",
      mockData.path
    );
  });

  it("should not have a target attr", () => {
    expect(screen.getByTestId("primary-menu-link")).not.toHaveAttribute(
      "target"
    );
  });
});

describe("Primary Menu Component with external link", () => {
  it("should have a target attr", () => {
    primaryMenuSetup({ ...mockData, target: "_blank" });
    expect(screen.getByTestId("primary-menu-link")).toHaveAttribute(
      "target",
      "_blank"
    );
  });
});
