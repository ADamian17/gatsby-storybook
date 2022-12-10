import React, { useContext } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { Image } from "../../../../../assets/Types";
import { NavCtx } from "../../context";
import NavVideo from "../../../../Videos/NavVideo/NavVideo";

import videoStyles from "../../../../Videos/Video.module.scss";

type ImageVariantType = "with-video" | "without-link";

export type SubMenuItemImageType = {
  image: Image;
  variant?: ImageVariantType;
  idVideo?: string;
};

const SubMenuItemImage: React.FC<SubMenuItemImageType> = ({
  image,
  idVideo,
  variant,
}) => {
  const { navStyles } = useContext(NavCtx);
  const menuItemImage = image && getImage(image.localFile);
  const withoutLinkComponent = (
    <div
      data-testid="smi-image-gatsbyImage-wrapper"
      className={videoStyles.headerSubVideo}
    >
      <div className={videoStyles.heroVideoContainer}>
        <GatsbyImage
          data-testid="smi-image-gatsbyImage"
          alt={image.altText}
          image={menuItemImage}
          imgClassName={videoStyles.demoVideoContainer}
        />
      </div>
    </div>
  );

  const withVideoComponent = (
    <>
      <a data-testid="smi-image-label" href="#/">
        Product Demo
      </a>

      <NavVideo
        data={{
          videoBackgroundImage: image,
          videoId: idVideo,
          autoplay: false,
        }}
      />
    </>
  );

  const variantOpts = {
    "with-video": withVideoComponent,
    "without-link": withoutLinkComponent,
  };

  const subVideoStyles =
    variant === "with-video"
      ? navStyles.subVideo
      : `${navStyles.subVideoProduct} ${navStyles.noLabel}`;

  return (
    <li className={`${subVideoStyles}`} data-testid="smi-image">
      {variantOpts[variant] ? (
        variantOpts[variant]
      ) : (
        <a
          data-testid="smi-image-link"
          href="/sign-up/"
          target="_blank"
          rel="noreferrer"
        >
          <figure
            data-testid="smi-image-gatsbyImage-wrapper"
            className={navStyles.productImgContainer}
          >
            <GatsbyImage
              data-testid="smi-image-gatsbyImage"
              alt={image.altText}
              image={menuItemImage}
              imgClassName={navStyles.productImg}
              data-click-type="sign_up_cta"
              data-click-text="Start for free"
              data-click-location="Navigation-Products-Image"
            />
          </figure>
        </a>
      )}
    </li>
  );
};

export default SubMenuItemImage;
