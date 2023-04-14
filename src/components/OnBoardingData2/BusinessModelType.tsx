import { useState } from "react";
import { ReactComponent as Tick } from "../../assets/tick.svg";

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
    const [active, setActive] = useState(0);
    function Change(params: any) {
        console.log(params);
        setActive(params)
    }

    return (
        <div className="grid grid-cols-2 gap-y-8">
            {items.map(item => (
                <>
                    {active == item.id ? (
                        <div className="flex items-center">
                            <div className="w-60 rounded-md border-[#1FC39E] border-2 transition-all cursor-pointer bg-[#f3f3ff] py-3 px-5" onClick={() => Change(item.id)}>{item.name}</div>
                            <Tick className="bg-white text-customGreen-200 rounded-full translate-x-2 transition-all" />
                        </div>
                    ) : (
                        <div className="flex items-center">
                            <div className="w-60 rounded-md border-2 transition-all cursor-pointer bg-[#f3f3ff] py-3 px-5" onClick={() => Change(item.id)}>{item.name}</div>
                            <Tick className="bg-white text-customGreen-200 rounded-full opacity-0" />
                        </div>
                    )}

                </>

            ))}
        </div>
    )
};
