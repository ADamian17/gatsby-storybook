import { screen } from "@testing-library/react";
import { setup } from "@services";
import SubMenuItemCopy from "..";

const mockData = {
  menuItemHeadline: "Hello",
  menuItemSubheadline: "cool",
  withCopy: true,
};

describe("SubMenuItemCopy Component", () => {
  beforeEach(() => {
    setup(SubMenuItemCopy, mockData);
  });

  it("should be in the document", () => {
    expect(screen.getByTestId("sub-menu-item-copy")).toBeInTheDocument();
  });

  test("menuItemHeadline should match props", () => {
    expect(screen.getByTestId("sub-menu-item-copy-headline")).toHaveTextContent(
      mockData.menuItemHeadline
    );
  });

  test("menuItemSubheadline should match props", () => {
    expect(
      screen.getByTestId("sub-menu-item-copy-subheadline")
    ).toHaveTextContent(mockData.menuItemSubheadline);
  });
});

test("SubMenuItemCopy Component should not be in the document", () => {
  setup(SubMenuItemCopy, { ...mockData, withCopy: null });
  expect(screen.queryByTestId("sub-menu-item-copy")).not.toBeInTheDocument();
});
