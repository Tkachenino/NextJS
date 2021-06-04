import { useState } from "react";
import { Htag, Button, P, Tag, Rating } from "../components";
// import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary" arrow={"right"}>
        Кнопка
      </Button>
      <Button appearence="ghost" arrow={"right"}>
        Кнопка
      </Button>
      <P size="s">TEXT</P>
      <P>TEXT</P>
      <P size="l">TEXT</P>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Tag size="m" color="ghost">
          ghost
        </Tag>
        <Tag size="m" color="gray">
          gray
        </Tag>
        <Tag size="m" color="red">
          red
        </Tag>
        <Tag size="s" color="green">
          green
        </Tag>
        <Tag size="m" color="primary">
          primary
        </Tag>
      </div>
      <Rating isEditable={true} rating={rating} editRating={setRating} />
    </>
  );
}
