import { screen, within } from "@testing-library/react";
import SubMenuItemImage, { SubMenuItemImageType } from "..";
import { gatsbyImageData, setup } from "../../../../../../services";

/* smi => stand for sub menu item */

const mockData: SubMenuItemImageType = {
  image: gatsbyImageData,
  variant: null,
  idVideo: null,
};

describe("SubMenuItemImage Component with link", () => {
  beforeEach(() => {
    setup(SubMenuItemImage, mockData);
  });

  it("should be in the document", () => {
    expect(screen.getByTestId("smi-image")).toBeInTheDocument();
  });

  test("SubMenuItemImage Component should render image with link", () => {
    const imgLinkEl = screen.getByTestId("smi-image-link");

    expect(imgLinkEl).toBeInTheDocument();
    expect(imgLinkEl).toHaveAttribute("href");
    expect(imgLinkEl).toHaveAttribute("target", "_blank");
  });

  it("should render image", () => {
    const gatsbyImageWrapper = screen.getByTestId(
      "smi-image-gatsbyImage-wrapper"
    );
    const gatsbyImage = within(gatsbyImageWrapper).getByTestId(
      "smi-image-gatsbyImage"
    );

    expect(gatsbyImageWrapper).toBeInTheDocument();
    expect(gatsbyImage).toBeInTheDocument();
    expect(gatsbyImage).toHaveAttribute("data-srcset");
  });
});

describe("SubMenuItemImage Component with no link", () => {
  beforeEach(() => {
    setup(SubMenuItemImage, { ...mockData, variant: "without-link" });
  });

  it("should render image", () => {
    const gatsbyImageWrapper = screen.getByTestId(
      "smi-image-gatsbyImage-wrapper"
    );
    const gatsbyImage = within(gatsbyImageWrapper).getByTestId(
      "smi-image-gatsbyImage"
    );

    expect(gatsbyImageWrapper).toBeInTheDocument();
    expect(gatsbyImage).toBeInTheDocument();
    expect(gatsbyImage).toHaveAttribute("data-srcset");
  });
});

describe("SubMenuItemImage Component with video", () => {
  const props = {
    ...mockData,
    variant: "with-video",
    idVideo: "poiu323409",
  };

  beforeEach(() => {
    setup(SubMenuItemImage, props);
  });

  it("should render video label", () => {
    expect(screen.getByTestId("smi-image-label")).toHaveTextContent(
      "Product Demo"
    );
  });

  it("should render video container", () => {
    expect(screen.getByTestId("div:NavVideo")).toBeInTheDocument();

    expect(screen.getByTestId("videoButton:container")).toHaveStyle({
      backgroundImage: `url(${props.image["mediaItemUrl"]})`,
    });

    expect(screen.getByTestId("button:VideoButton")).toHaveAttribute(
      "id",
      `video__${props.idVideo}`
    );
  });
});
