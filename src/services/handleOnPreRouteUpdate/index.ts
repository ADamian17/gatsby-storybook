import { GatsbyBrowser } from 'gatsby';

const allowedPaths = ['/'];

export const handleOnPreRouteUpdate: GatsbyBrowser['onPreRouteUpdate'] = ({
  location,
}) => {
  console.log(location);
};

export default handleOnPreRouteUpdate;
