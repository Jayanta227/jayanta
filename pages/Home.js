import Bg1, {Bg1mob} from "../components/Bg1";
import Navbar from "../components/Navbar";

export default function Home(){
    return (<>
    <Navbar page={'home'}/>
    <div className="absolute top-0 w-full left-0 z-[-1]">
    <Bg1 />
    <Bg1mob/>
    <div>text</div>
    </div>

    </>
    );
}