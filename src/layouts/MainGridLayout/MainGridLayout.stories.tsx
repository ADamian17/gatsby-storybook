import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainGridLayout, { MainGridLayoutType } from '.';

export default {
  component: MainGridLayout,
} as ComponentMeta<typeof MainGridLayout>;

const Template: ComponentStory<typeof MainGridLayout> = (args) => (
  <MainGridLayout {...args} />
);

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});

const heroStyles = {
  paddingTop: '80px',
  gridColumn: 'center-starts / center-ends',
};

const innerGridWrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr max-content',
  gap: '40px',
};

const contentWrapper = {
  display: 'grid',
  gridAutoRows: 'min-content',
  rowGap: '24px',
};

const headLine = {
  margin: 0,
  fontWeight: 500,
  fontSize: '56px',
  lineHeight: '70px',
  color: '#707070',
};

const subcopy = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#707070',
};

const imagePlaceHolder = {
  width: '408px',
  height: '427px',
  backgroundColor: '#E7F1F9',
};

const inputBtn = {
  width: '154px',
  height: '48px',
  background: '#FF7A5C',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  borderRadius: '4px',
  color: '#fff',
};

const input = {
  width: '331px',
  height: '48px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
  borderRadius: '4px',
  border: '1px solid #333333',
  padding: '16px',
  marginRight: '16px',
};

Desktop.parameters = {
  viewport: {
    defaultViewport: 'desktop',
  },
};

Desktop.args = {
  children: (
    <div style={heroStyles}>
      <div style={innerGridWrapper}>
        <div style={contentWrapper}>
          <h1 style={headLine}>
            Lorem ipsum dolor sit amet consectetur elit sed
          </h1>
          <p style={subcopy}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              style={input}
            />
            <input type="button" value="Start for Free" style={inputBtn} />
          </form>
        </div>

        <div style={imagePlaceHolder}></div>
      </div>
    </div>
  ),
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'sm-mobile',
  },
};

Mobile.args = {
  children: (
    <div style={{ ...heroStyles, gridColumn: 'initial' }}>
      <div style={{ ...innerGridWrapper, gridTemplateColumns: '1fr' }}>
        <div style={contentWrapper}>
          <h1 style={{ ...headLine, fontSize: '36px', lineHeight: '45px' }}>
            Lorem ipsum dolor sit amet consectetur elit sed
          </h1>
          <p style={subcopy}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              style={input}
            />
            <input type="button" value="Start for Free" style={inputBtn} />
          </form>
        </div>

        <div style={{ ...imagePlaceHolder, width: '100%' }}></div>
      </div>
    </div>
  ),
};
