import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import "./ButtonWrapper.scss"

export type ButtonWrapperType = {
  btnText: string;
};

const ButtonWrapper: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
  ButtonWrapperType
> = ({ btnText, ...rest }) => {
  return (
    <button {...rest}>{btnText}</button>
  )
}

export default ButtonWrapper;