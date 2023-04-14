import { ReactComponent as Pen } from "../../assets/pen.svg";
import { ReactComponent as Save } from "../../assets/save.svg";
import { useState } from "react";


export default function DCF() {
    const [edit, setEdit] = useState('nonedit')
    function changeMode(params: any) {
        if (edit !== `${params}`) {
            setEdit(`${params}`)
        } else {
            setEdit('nonedit')
        }
    }
    const data = {
        headers: [
            "Year",
            "Discount Rate",
            "Long Term Growth Rate",
            "Survival Rate",
            "Discounted EBITA"
        ],
    }
    const items = [
        {
            year: "2025",
            discountRate: "0.40",
            ltgr: "0.01",
            sr: "1.00",
            ebita: "179502"
        },
        {
            year: "2026",
            discountRate: "0.40",
            ltgr: "0.01",
            sr: "1.00",
            ebita: "179502"
        }
    ]
    return (
        <>
            <div className="bg-white p-7 shadow-md">
                <div className="text-xs text-[#9F9F9F] pb-4">The DCF (Discounted Cash Flow) methods represent the most renown approach to company valuation, recommended by academics and a daily tool for financial analysts. The valuation is the present value of all the free cash flows to equity the startup is going to generate in the future, discounted by its risk. These methods weight the projected free cash flow to equity by the probability the startup will survive. Then, the flows are discounted to present by a rate that represents risks related to industry, size, development stage and profitability. Lastly, an illiquidity discount is applied to the sum of the discounted cash flows to compute the valuation.</div>
                <table className="w-full py-4">
                    <thead className="border-b border-[#1FC39E]">
                        <tr>
                            <th scope="col">{` `}</th>
                            {data.headers.map(header => <th scope="col" className="text-center py-4 text-[#1FC39E] font-bold text-sm">{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <>
                                <tr className="border-b" onDoubleClick={() => changeMode(item.year)}>
                                    <td className="grid place-items-center py-4">

                                        {edit === item.year ? (
                                            <Save onClick={() => changeMode(item.year)} className='text-[#979797] text-center cursor-pointer'/>
                                        ) : (
                                            <Pen onClick={() => changeMode(item.year)} />
                                        )}

                                        
                                    </td>
                                    <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.year}</td>


                                    {edit === item.year ? (<td className="text-center py-4 font-semibold text-sm text-gray-600">
                                        <input type="text" pattern="[0-9]" id="discountedrate" className="w-28 border-none outline-none text-center focus:shadow-outline  bg-gray-200 p-1 rounded font-normal focus:ring-1 text-md focus:ring-gray-400" defaultValue={item.discountRate} />
                                    </td>) : (
                                        <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.discountRate}</td>
                                    )}

                                    {edit === item.year ? (<td className="text-center py-4 font-semibold text-sm text-gray-600">
                                        <input type="text" pattern="[0-9]" id="discountedrate" className="w-28 border-none outline-none text-center focus:shadow-outline  bg-gray-200 p-1 rounded font-normal focus:ring-1 text-md focus:ring-gray-400" defaultValue={item.ltgr} />
                                    </td>) : (
                                        <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.ltgr}</td>
                                    )}
                                    {edit === item.year ? (<td className="text-center py-4 font-semibold text-sm text-gray-600">
                                    <input type="text" pattern="[0-9]" id="discountedrate" className="w-28 border-none outline-none text-center focus:shadow-outline  bg-gray-200 p-1 rounded font-normal focus:ring-1 text-md focus:ring-gray-400" defaultValue={item.sr}/>
                                    </td>) : (
                                        <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.sr}</td>
                                    )}
                                    
                                    <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.ebita}</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
            </div>
        </>
    )
};
