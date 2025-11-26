import { FaChevronRight,FaChevronLeft,FaHeart,FaPlay } from "react-icons/fa";
import ButtonNavTop from "./ButtonNavTop";
import ButtonTurn from "./ButtonTurn";

export default function NavSecond (){
    return (
        <>
            <div className='mx-11 flex justify-center m-6 gap-5 text-white items-center'>  
                <input type="text" placeholder="Name Film" className="w-[40vh] h-8 rounded-full p-3 bg-transparent border-2 placeholder:text-white border-stone-500"/>
                <button className=" h-8 rounded-md bg-[#26272c] border-stone-500 w-[30vh]">Hip Hop Music</button> 
                <ButtonNavTop icon={ <FaHeart size={15} color="white" />}/>
                <div className=" flex gap-2  item-center">
                    <ButtonTurn icon={<FaChevronLeft size={20}  />}/>
                    <ButtonTurn icon={<FaChevronRight size={20} />}/>
                </div>
                <div className="bg-[#26272c] rounded-md w-[70vh] h-[6vh] items-center p-2 me-1">
                    <ButtonNavTop icon={<FaPlay size={15} color="white" />}/>
                </div>
            </div>
        </>
    )
}