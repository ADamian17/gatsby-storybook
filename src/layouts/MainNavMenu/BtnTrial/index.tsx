import React from "react";
import PrimaryButton from "../../../Buttons/PrimaryButton/PrimaryButton";
import styles from "./BtnTrial.module.scss";

type TBtnTrial = {
  page: string;
  trialBtn?: string;
  btnContent: {
    label: string;
    path: string;
  };
};

export const BtnTrial: React.FC<TBtnTrial> = ({
  page,
  trialBtn,
  btnContent: { label, path },
}) => {
  const stickyOnlyBtnTrial = page === "Home" ? `homeTrial ${trialBtn}` : null;
  const onClickHandler = () => {
    window.dataLayer.push({
      event: "navigation",
      navigation_name: "header",
      navigation_url: window.location.host + path,
      navigation_text: label,
      navigation_category: label,
    });
  };
  return (
    <li className={`${styles.trialBtn} trialBtn ${stickyOnlyBtnTrial}`}>
      <PrimaryButton
        onClickHandler={onClickHandler}
        buttonText={label}
        buttonLink={path}
        data-click-type="sign_up_cta"
        data-click-text="Start for free"
        data-click-location="Navigation"
      />
    </li>
  );
};

export default BtnTrial;
