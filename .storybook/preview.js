/*LINK  https://storybook.js.org/docs/react/essentials/viewport */

const customViewports = {
  'sm-mobile': {
    name: 'Small Mobile',
    styles: {
      width: '360px',
      height: '768px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '576px',
      height: '768px',
    },
  },
  table: {
    name: 'table',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
