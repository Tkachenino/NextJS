import { PProps } from "./P.props";
import style from "./P.module.css";
import cn from "classnames";

export const P = ({ size = "m", className, children }: PProps): JSX.Element => {
  return (
    <p
      className={cn(style.p, className, {
        [style.s]: size === "s",
        [style.m]: size === "m",
        [style.l]: size === "l",
      })}
    >
      {children}
    </p>
  );
};
