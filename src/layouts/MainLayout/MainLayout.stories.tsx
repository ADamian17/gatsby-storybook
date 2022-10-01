import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MainLayout from ".";

export default {
  component: MainLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MainLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainLayout> = args => (
  <MainLayout {...args} />
);

export const Default = Template.bind({});
