import React, { useState } from 'react';

import styles from './Slider.module.scss';

type SliderItem = {
  image: {
    src: string;
    alt: string;
  };
};

type SliderType = {
  sliderItems: SliderItem[];
};

const Slider: React.FC<SliderType> = ({ sliderItems }) => {
  const [activeItem, setActiveItem] = useState(0);
  const sliderItemsList =
    sliderItems &&
    sliderItems.map(({ image }, idx) => (
      <li
        key={image.alt}
        className={`${styles.sliderItem} ${
          idx === activeItem ? styles.activeSliderItem : ''
        }`}
      >
        <figure className={styles.sliderItemImg}>
          <img src={image.src} alt={image.alt} />
        </figure>
      </li>
    ));

  const sliderDots =
    sliderItems &&
    sliderItems.map(({ image }, idx) => (
      <div
        className={`${styles.sliderDot} ${
          idx === activeItem ? styles.activeDot : ''
        }`}
      ></div>
    ));

  const increase = () => {
    setActiveItem((prev) => (prev + 1) % sliderItems.length);
  };
  const decrease = () => {};

  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (!e.currentTarget.dataset.direction) return;
    const direction = e.currentTarget.dataset.direction;
    const actions = {
      '1': increase,
      '-1': decrease,
    };

    // const prevActiveItem = this.activeItem;
    // actions[direction] && actions[direction]();
    // this.updateSliderItems(prevActiveItem, this.activeItem);
    // console.log(this.sliderItems)
    // return;
    // setActiveItem((prev) => prev + 1);
  };

  return (
    <div className={styles.sliderWrapper}>
      <ul className={styles.sliderList}>{sliderItemsList}</ul>

      <button
        className={`${styles.sliderBtn} ${styles.sliderBtnPrev}`}
        data-direction="-1"
      >
        prev
      </button>

      <button
        onClick={handleClick}
        className={`${styles.sliderBtn} ${styles.sliderBtnNext}`}
        data-direction="1"
      >
        next
      </button>

      <div className={styles.sliderDots}>{sliderDots}</div>
    </div>
  );
};

export default Slider;
