import { useNavigate } from "react-router-dom";
export default function Buttonmenu({page,icon,isActive}){
    const Navigate = useNavigate();
    return(
        <>
            <button  onClick = {()=>Navigate(page)} className={`${isActive ? 'bg-gradient-to-r from-red-500 via-red-500 to-orange-400':null} w-[8vh] p-4 hover:bg-[#d81f52] bg-black item-center `}>{icon}</button>
        </>
    )
}