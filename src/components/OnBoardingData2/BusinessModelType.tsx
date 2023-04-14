import { useState } from "react";


export default function BusinessModelType() {
    const items = [
        {
            id: 1,
            name: 'standard financial model'
        },
        {
            id: 2,
            name: 'services financial model'
        },
        {
            id: 3,
            name: 'marketplace model'
        },
        {
            id: 4,
            name: 'saas model'
        },
        {
            id: 5,
            name: 'hardware financial model'
        }
    ]

    const defaultBorder = 'border-2';
    const activeStyle = 'border-[#1FC39E] border-2';
    const [ active, setActive ] = useState(0);
    function Change(params:any) {
        console.log(params);
        setActive(params)
    }

    return (
        <div className="grid grid-cols-2 gap-y-8">
            {items.map(item => (
                <>
                {active == item.id ? (
                    <div className={`w-60 rounded-md ${activeStyle} bg-[#f3f3ff] py-3 px-5`} onClick={() => Change(item.id)}>{item.name}</div>
                ) : (
                    <div className={`w-60 rounded-md ${defaultBorder} bg-[#f3f3ff] py-3 px-5`} onClick={() => Change(item.id)}>{item.name}</div>
                )}
                 
                
                </>
                
            ))}
        </div>
    )
};
