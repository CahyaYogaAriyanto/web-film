import { IoSearch } from "react-icons/io5";
export default function Accont({name,icon}){
    return (
        <>
        <div className="flex gap-2 items-center font-semibold">
            <div className="text-white ">{name}</div>
            {icon}
            <IoSearch color="white" size={20}/>
        </div>
          
        </>
    )
}