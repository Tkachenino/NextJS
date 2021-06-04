import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button = ({ appearence, arrow = "none", children }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className={`${style.button} ${appearence == "primary" ? style.primary : ""} ${
          appearence == "ghost" ? style.ghost : ""
        }`}
      >
        {children}
        {arrow !== "none" && (
          <span
            className={`${style.svg} ${arrow == "right" ? style.rigth : ""} ${
              arrow == "down" ? style.down : ""
            }`}
          >
            <ArrowIcon />
          </span>
        )}
      </button>
    </>
  );
};
