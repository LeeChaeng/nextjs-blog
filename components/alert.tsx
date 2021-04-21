import { FC, ReactElement } from "react";
import styles from "../styles/alert.module.css";
import cn from "classnames";

type PropTypes = {
  children: ReactElement;
  type: "Success" | "error";
};

const Alert: FC<PropTypes> = ({ children, type }) => {
  return (
    <div
      className={cn({
        [styles.success]: type === "Success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
};
