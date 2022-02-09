import React from "react";
import * as S from "./style";

export default function Button({ onClicked, text }) {
  return <S.Button onClick={onClicked}>{text}</S.Button>;
}
