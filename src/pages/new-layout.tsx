import * as React from 'react';

import { MainGridLayout } from '@layouts';
const heroStyles = {
  paddingTop: '80px',
  gridColumn: 'center-starts / center-ends',
};

const innerGridWrapper = {
  display: 'grid',
  gridTemplateColumns: '1fr',
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
  fontSize: '36px',
  // lineHeight: '70px',
  color: '#707070',
};

const subcopy = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  color: '#707070',
};

const imagePlaceHolder = {
  // width: '408px',
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

const NewLayout = () => (
  <MainGridLayout>
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
  </MainGridLayout>
);

export default NewLayout;
