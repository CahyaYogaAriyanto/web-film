import ButtonFirstContent from "./ButtonFirstContent"
import { FaChevronDown } from "react-icons/fa6";
export default function VarianFirst({title}){
    return(
        <>
            <div className=" bg[#28262b] flex justify-between mx-4 my-2">
                <h2 className="text-white font-semibold">{title}</h2>
                <ButtonFirstContent icon={<FaChevronDown size={10} color="white"/>}/>
            </div>
        </>
    )
}