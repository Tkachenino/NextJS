import { useState, useEffect, KeyboardEvent } from "react";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star.svg";
import style from "./Rating.module.css";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating = 0,
  editRating,
  className,
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructorRating = (currentRating: number) => {
    const updateArray = ratingArray.map((i, idx) => (
      <span onMouseEnter={() => changeDisplay(idx + 1)} onMouseLeave={() => changeDisplay(rating)}>
        <StarIcon
          className={cn(style.star, {
            [style.fill]: idx < currentRating,
            [style.editable]: isEditable,
          })}
          onClick={() => choseRating(idx + 1)}
          onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(e, idx + 1)}
          tabIndex={isEditable ? 0 : -1}
        />
      </span>
    ));
    setRatingArray(updateArray);
  };

  useEffect(() => {
    constructorRating(rating);
  }, [rating]);

  const changeDisplay = (value: number): void => {
    if (isEditable) {
      constructorRating(value);
    }
  };

  const choseRating = (value: number) => {
    if (isEditable && editRating) {
      editRating(value);
    }
  };

  const handleSpace = (e: KeyboardEvent<SVGElement>, value: number) => {
    if (e.code === "Space" && isEditable && editRating) {
      editRating(value);
    }
  };

  return (
    <div className={cn(className, {})}>
      {ratingArray.map((i, idx) => (
        <span key={idx}>{i}</span>
      ))}
    </div>
  );
};
