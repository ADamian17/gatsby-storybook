import { Image, ImageMediaItemUrl } from '@types';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ImageDataType = Image & ImageMediaItemUrl;

export const isChildImageSharp = (obj: ImageDataType['localFile']): boolean => {
  if (obj?.hasOwnProperty('childImageSharp') && obj?.childImageSharp) {
    return true;
  }

  return false;
};

export const isMediaItemUrl = (obj: ImageDataType): boolean => {
  if (obj?.hasOwnProperty('mediaItemUrl') && obj.mediaItemUrl) {
    return true;
  }

  return false;
};

const getImageSrc = (
  imageData: ImageDataType
): IGatsbyImageData | ImageMediaItemUrl['mediaItemUrl'] => {
  if (
    imageData?.hasOwnProperty('localFile') &&
    imageData.localFile &&
    isChildImageSharp(imageData.localFile)
  ) {
    return getImage(imageData.localFile);
  }

  return isMediaItemUrl(imageData) ? imageData.mediaItemUrl : null;
};

export default getImageSrc;
