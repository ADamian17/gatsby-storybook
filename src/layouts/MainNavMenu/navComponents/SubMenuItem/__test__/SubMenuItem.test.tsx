import { screen } from "@testing-library/react";
import { setup } from "@services";
import SubMenuItem from "..";

const mockData = {
  content: {
    label: "Practice Management Software",
    description:
      "Build a practice you're proud of with the all-in-one, fully integrated EHR.",
    path: "/features",
    target: null,
  },
};

describe("SubMenuItem Component", () => {
  beforeEach(() => {
    setup(SubMenuItem, mockData);
  });

  it("should be in the document", () => {
    expect(screen.getByTestId("sub-menu-item")).toBeInTheDocument();
  });

  test("label should not be empty", () => {
    expect(screen.getByTestId("sub-menu-item-label")).toHaveTextContent(
      mockData.content.label
    );
  });

  test("label should not be empty", () => {
    expect(screen.getByTestId("sub-menu-item-description")).toHaveTextContent(
      mockData.content.description
    );
  });

  test("href attr should not be empty", () => {
    expect(screen.getByTestId("sub-menu-item-link")).toHaveAttribute(
      "href",
      mockData.content.path
    );
  });

  test("target attr should not be in element", () => {
    expect(screen.getByTestId("sub-menu-item-link")).not.toHaveAttribute(
      "target"
    );
  });
});

describe("SubMenuItem Component External link, No description", () => {
  beforeEach(() => {
    setup(SubMenuItem, {
      ...mockData,
      content: { ...mockData.content, description: null, target: "_blank" },
    });
  });
  test("label should not be empty", () => {
    expect(
      screen.getByTestId("sub-menu-item-description")
    ).toBeEmptyDOMElement();
  });

  test("target attr should not be in element", () => {
    expect(screen.getByTestId("sub-menu-item-link")).toHaveAttribute("target");
  });
});
