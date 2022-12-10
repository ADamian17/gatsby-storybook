import { screen } from "@testing-library/react";
import { setup } from "@services";
import SubMenuItemCol from "..";

const mockData = {
  items: [
    {
      id: "2039ek3290e3k",
      path: "/hello",
      label: "Hello World",
      description: "hello there",
    },
    {
      id: "2039ek32sfk3",
      path: "/hello2",
      label: "Hello World 2",
      description: "hello there 2",
    },
  ],
};

describe("SubMenuItemCol Component", () => {
  beforeEach(() => {
    setup(SubMenuItemCol, mockData);
  });
  it("should be in the document", () => {
    expect(screen.getByTestId("sub-menu-item-col")).toBeInTheDocument();
  });

  test("label should have textContext of blank by default", () => {
    expect(screen.getByTestId("sub-menu-item-col-label")).toHaveTextContent(
      "blank"
    );
  });

  test("items should not be empty", () => {
    expect(screen.getByTestId("sub-menu-item-col-items").children).toHaveLength(
      mockData.items.length
    );
  });
});

describe("SubMenuItemCol Component label not blank, no item", () => {
  beforeEach(() => {
    setup(SubMenuItemCol, { ...mockData, label: "features", items: null });
  });

  test("label should not have textContext of blank", () => {
    expect(screen.getByTestId("sub-menu-item-col-label")).toHaveTextContent(
      "features"
    );
  });
  test("items should be empty", () => {
    expect(screen.getByTestId("sub-menu-item-col-items")).toBeEmptyDOMElement();
  });
});
