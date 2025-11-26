import Navbar from "../Components/Navbar";
import NavSecond from "../Components/NavSecond";
import Buttonmenu from "../Components/ButtonMenu";
import Accont from "../Components/Accont";
import FirstContent from "../Components/FirstContent";
import FirstBox from "../Components/FirstBox";
import { ImDownload2 } from "react-icons/im";
import { GiClapperboard,GiMegaphone } from "react-icons/gi";
import { GoHome } from "react-icons/go";
import { HiSignal } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { IoMusicalNotesOutline,IoStatsChartOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { MdConnectedTv } from "react-icons/md";
import { IoPeopleCircleSharp } from "react-icons/io5";
export default function Home () {
    return (
        <>
            <div className="flex justify-center gap-20 mt-5 items-center">
                <Navbar title="Popular" />
                <Navbar title="Films" />
                <Navbar title="Tv Seris" />
                <Navbar title="Cartoons" />
                <Navbar title="Trailer" />
                <Navbar title="Announcement" />
                <div>
                    <Accont name="Cahya Yoga" icon={<IoPeopleCircleSharp size={40} color="white"/>}/>
                </div>
            </div>
            <div>
                <NavSecond />
            </div>
            <div className="flex justify-between gap-10  h-[100vh] ">
                <div className=" h-[75vh] w-[8vh] relative  ml-16 items-center gap-0 bg-black rounded-b-lg" >
                    <Buttonmenu icon={<GoHome  size={25} color="gray"/>} path="/" isActive={true}/>
                    <Buttonmenu icon={<IoMusicalNotesOutline size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<GiClapperboard size={25} color="red"/>} path="/"/>
                    <Buttonmenu icon={<GiMegaphone size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<ImDownload2 size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<IoStatsChartOutline size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<FaRegStar size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<MdConnectedTv size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<HiSignal  size={25} color="gray"/>} path="/"/>
                    <Buttonmenu icon={<LuUser2  size={25} color="gray"/>} path="/"/>
                </div>
                <div className=" mr-[] h-[60vh] w-[40vh] bg-[#26272c] rounded-xl">
                    <FirstContent firstime='2000s' secondtime='2000s'/>
                </div>
                <div style={{backgroundColor:'red'}} className=" flex justify-center gap-2 h-[75vh] w-[90vh] bg-[#26272c] rounded-xl ">
                    <div style={{backgroundColor:'blue',flex:1}} className=" p-2 h-[40vh] w-[35vh] ms-3 my-3 rounded-xl bg-[#2b2c31] ">
                        <IoPeopleCircleSharp style={{margin:'auto'}} size={40} color="white" className="place-items-center"/>
                        <h1 style={{}}>hallo</h1>
                    </div>
                    <div className="p-2 h-[40vh] w-[35vh] me-3 my-3 ">hai</div>
                </div>
                <div className=" h-[75vh] w-[50vh] bg-[#26272c] mr-[20vh] rounded-xl">login/register</div>
            </div>
        </>
    )
}
