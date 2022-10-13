import React from 'react';

import styles from './MainHero.module.scss';

type MainHeroType = {};

const MainHero: React.FC<MainHeroType> = (props) => {
  return (
    <div className={styles.mainHero}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Lorem ipsum dolor sit amet consectetur elit sed
          </h1>
          <p className={styles.subcopy}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          {/* <form>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
              style={input}
            />
            <input type="button" value="Start for Free" style={inputBtn} />
          </form> */}
        </div>

        <div className={styles.imageHero}></div>
      </div>
    </div>
  );
};

export default MainHero;
