export default function CheckBox({title}){
    return (
        <>
            <div className="relative ms-4">
                <label>
                    <input className="bg-transparent bg-gray-600" type="checkbox" checked='' />
                    <span className="ms-2 font-semibold text-[#3a3939]">{title}</span>
                </label>
            </div>
        </>
    )
};