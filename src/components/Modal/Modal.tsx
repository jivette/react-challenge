import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StateAlert } from "../../interfaces/IDefault";
import { closeAlert } from "../../store/Alerts/Actions";
import "../../sass/Alert.scss";

interface IProps {
  content: StateAlert;
}
export default function Modal({ content }: IProps) {
  const dispatch = useDispatch();

  let timer1 = setTimeout(() => dispatch(closeAlert()), 3000);

  useEffect(() => {
    return () => {
      clearTimeout(timer1);
    };
  }, [timer1]);

  return (
    <div
      className={content.type === "success" ? "modal success" : "modal error"}
    >
      {content.message}
    </div>
  );
}
