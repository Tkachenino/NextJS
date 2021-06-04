import { TagProps } from "./Tag.props";
import style from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "m",
  color = "ghost",
  href,
  className,
  children,
}: TagProps): JSX.Element => {
  return (
    <p
      className={cn(style.tag, className, {
        [style.s]: size === "s",
        [style.m]: size === "m",
        [style.red]: color === "red",
        [style.green]: color === "green",
        [style.ghost]: color === "ghost",
        [style.gray]: color === "gray",
        [style.primary]: color === "primary",
      })}
    >
      {href ? <a href={href}>{children}</a> : children}
    </p>
  );
};
