import InputRange from "./InputRange";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { ReactComponent as Edit } from "../../assets/edit.svg";
import { ReactComponent as Reverse } from "../../assets/reverse.svg";
import { ReactComponent as Next } from "../../assets/next.svg";
import Button from "components/Buttons/Button";

export default function Metrics() {
    const data = {
        headers: [
            "Sr. No.",
            "Runaway (in month)",
            "CAC (in $)",
            "Date",
            "Action"
        ],
    }
    const items = [
        {
            srno: "1",
            runaway: "0.40",
            cac: "0.01",
            date: "@mdo"
        },
        {
            srno: "1",
            runaway: "0.40",
            cac: "0.01",
            date: "@mdo"
        }
    ]
    return (
        <div className="p-6 bg-white">
            <div className="text-2xl font-semibold text-customGray-2000">Metrics</div>
            <div className="grid grid-cols-4 py-5 bg-white rounded-lg shadow-lg">
                <div>
                    <div className="text-center font-semibold text-customGray-2000">Cash Position</div>
                    <div className="flex justify-center mt-4 gap-4">
                        <div className="text-5xl font-semibold green-gradient">0.7</div>
                        <div className="pt-2 font-semibold green-gradient">Million</div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-customGray-2000 text-center">Utilized Findings</div>
                    <div className="flex justify-center mt-4">
                        <div className="text-5xl font-semibold green-gradient">88%</div>
                    </div>
                </div>
                <div><InputRange /></div>
                <div><div className="font-semibold text-customGray-2000 text-center">Runaway</div>
                    <div className="flex justify-center mt-4">
                        <div className="flex justify-center mt-4 gap-4">
                            <div className="text-5xl font-semibold green-gradient">3.2</div>
                            <div className="pt-2 font-semibold green-gradient">Months</div>
                        </div>
                    </div></div>
            </div>
            <div className="grid grid-cols-3 gap-10 mt-10">
                <div className="p-5 bg-white rounded-lg shadow-lg">
                    <div className="text-center font-semibold text-customGray-2000">CAC</div>
                    <div className="mt-4 text-3xl font-semibold green-gradient">0</div>
                </div>
                <div className="p-5 bg-white rounded-lg shadow-lg">

                    <div className="text-center font-semibold text-customGray-2000">LTV</div>
                    <div className="mt-4 text-3xl font-semibold green-gradient">$7.2</div>
                </div>

                <div className="p-5 bg-white rounded-lg shadow-lg">

                    <div className="text-center font-semibold text-customGray-2000">Churn Rate</div>
                    <div className="flex justify-center mt-4 gap-4">
                        <div className="text-5xl font-semibold green-gradient">3.2</div>
                        <div className="pt-2 font-semibold green-gradient">Months</div>
                    </div>
                </div>

            </div>
            <div className="my-10 shadow-lg rounded-xl">
                <table className="bg-white w-full">
                    <thead className="border-b">
                        <tr>
                            {data.headers.map(header => <th scope="col" className="px-6 py-4 text-sm font-medium text-left text-gray-400">{header}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <>
                                <tr className="transition duration-300 ease-in-out bg-white border-b hover:bg-gray-100">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.srno}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.runaway}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.cac}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.date}</td>
                                    <td className="flex justify-center gap-4 py-2">
                                        <Delete />
                                        <Edit />
                                    </td>
                                </tr>
                            </>
                        ))}
                        <tr className="bg-[#F4FFFE] border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td></td>
                            <td className="px-6 py-4 text-sm font-medium text-center text-green1 whitespace-nowrap">Total Expenses</td>
                            <td className="px-6 py-4 text-sm font-medium text-green1 whitespace-nowrap">$ 7693.80</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between">
                <div>
                    <Button className="!w-[155px] !h-10 !rounded-md bg-[#F3FFFF] !p-0 !font-normal !text-[#1FC39E]">
                        <Reverse className="inline-block mr-[10px]" />
                        Back
                    </Button>
                </div>
                <div>
                    <Button className="!w-[155px] !h-10 !rounded-md bg-[#1FC39E] !p-0 !font-normal !text-white">
                        Next
                        <Next className="inline-block ml-[10px] mb-[2px]" />
                    </Button>
                </div>
            </div>
        </div>
    )
};
