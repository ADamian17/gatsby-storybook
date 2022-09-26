import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SvgDefs from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: SvgDefs,
} as ComponentMeta<typeof SvgDefs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SvgDefs> = (args) => (
  <SvgDefs {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  svg: 'arrow-back',
};
