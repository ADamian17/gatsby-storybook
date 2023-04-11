import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '.';

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Second = Template.bind({});

Primary.args = {
  text: 'button',
  loading: false,
  withArrow: false,
};

Second.args = {
  text: 'Second button',
  loading: false,
  withArrow: true,
};
