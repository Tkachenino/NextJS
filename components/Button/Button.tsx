import { ButtonProps } from "./Button.props";
import style from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button = ({ appearence, children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <>
      <button
        className={`${style.button} ${appearence == "primary" ? style.primary : ""} ${
          appearence == "ghost" ? style.ghost : ""
        }`}
      >
        {children}
        <span className={style.svg}>
          <ArrowIcon />
        </span>
      </button>
    </>
  );
};
