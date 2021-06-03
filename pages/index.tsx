import { Htag, Button } from "../components";
import styles from "../styles/Home.module.css";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button appearence="primary">Кнопка</Button>
      <Button appearence="ghost">Кнопка</Button>
    </>
  );
}
