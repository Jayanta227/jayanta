import Navbar from "../components/Navbar";
import Bg1, {Bg1mob} from "../components/Bg1";

export default function About() {
  return (
    <>
      <Navbar page={"about"} />
      <div className="absolute top-0 w-full left-0 z-[-1]">
        <Bg1 />
        <Bg1mob />
        <div>text</div>
      </div>
    </>
  );
}
