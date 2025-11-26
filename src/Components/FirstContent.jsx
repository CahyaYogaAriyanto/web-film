import ButtonFirstContent from "./ButtonFirstContent";
import { FaCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import CheckBox from "./CheckBox";
import Line from "./Line";
import VarianFirst from "./VarianFirst";
export default function FirstContent({firstime,secondtime}){
    return (
        <>
            <VarianFirst title='Decades'/>
            <div className="flex justify-center items-center">
                <FaCircle color="#3a3939"/>
                <hr className="text-[#3a3939] border-[1.3px] border-[#3a3939] w-[22vh]"/>
                <FaCircle color="#3a3939"/>
            </div>
            <div className="flex justify-center items-center gap-[18vh] text-[#3a3939] font-bold">
                <p>{firstime}</p>
                <p>{secondtime}</p>
            </div>
            <Line/>
            <VarianFirst title='Mainstream' line={<Line/>}/>
            <div className="relative gap-10">
                <CheckBox title='Hip Hop' />
                <CheckBox title='Pop'/>
                <CheckBox title='Rock'/>
                <CheckBox title='Country'/>
            </div>
            <Line/>
            <VarianFirst title='Mainstream' line={<Line/>}/>
            <Line/>
            <VarianFirst title='Mainstream' line={<Line/>}/>
            <Line/>
            <VarianFirst title='Mainstream' line={<Line/>}/>
            <Line/>

            
        </>
    )
}