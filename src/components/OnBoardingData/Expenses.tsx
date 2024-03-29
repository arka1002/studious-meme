import Button from "components/Buttons/Button";
import Input from "components/Inputs/Input";
import { Form, Formik } from "formik";
import DoughNutChart from "./ExpensesChart";

export default function Expenses() {
    const data = {
        headers: [
            "Sr. No.",
            "Expenses",
            "Cost (in $)"
        ],
    }
    const items = [
        {
            srno: "2025",
            expenses: "0.40",
            cost: "0.01"
        },
        {
            srno: "2025",
            expenses: "0.40",
            cost: "0.01"
        }
    ]
    return (
        <div className="p-3">
            <div className="font-semibold text-2xl py-6">Expenses</div>
            <Formik
                initialValues={{
                    password: "",
                    email: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {({ errors, touched }) => (
                    <>
                        <Form>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                <div><Input id={"1"} name={"payment"} type={"number"} label={`Payment Processing Fees Per Transaction`} symbol={`%`} placeholder={`2`} inputclassName={`pl-9 border !rounded-lg border-lg bg-white`} /></div>
                                <div><Input id={"2"} name={"customer"} type={"number"} label={`Customer Support Outsourced`} symbol={`%`} placeholder={`3`} inputclassName={`pl-9 border !rounded-lg border-lg bg-white`} /></div>
                                <div><Input id={"3"} name={"effective"} type={"number"} label={`Effective Annual Growth`} symbol={`%`} placeholder={`0`} inputclassName={`pl-9 border !rounded-lg border-lg bg-white`} />
                                    <div className="pt-1 text-[#10786C] text-sm font-medium">We’re Calculating Your Effective Annual Growth</div></div>
                                <div><Input id={"4"} name={"hourly"} type={"number"} label={`Hourly Tickets per agent hour`} symbol={`#`} placeholder={`3`} inputclassName={`pl-9 border !rounded-lg border-lg bg-white`} /></div>
                                <div></div>
                                <div><Input id={"5"} name={"hourlycost"} type={"number"} label={`Hourly Cost`} symbol={`#`} placeholder={`4`} inputclassName={`pl-9 border border-lg bg-white !rounded-lg`} /></div>
                                <div><Input id={"6"} name={"hosting"} type={"text"} label={`Hosting Cost Per User`} symbol={`$`} placeholder={`4`} inputclassName={`pl-9 !rounded-lg border border-lg bg-white`} /></div>
                                <div><Input id={"7"} name={"employee"} type={"text"} label={`Employee Onboarding Cost`} symbol={`$`} placeholder={`33`} inputclassName={`pl-9 !rounded-lg border border-lg bg-white`} />
                                    <div className="pt-1 text-[#10786C] text-sm font-medium">Recommendation: Hey! Enter Visa, Health etc. Cost</div></div>
                                <div><Input id={"8"} name={"rent"} type={"text"} label={`Rent Monthly`} symbol={`$`} placeholder={`33`} inputclassName={`pl-9 !rounded-lg border border-lg bg-white`} /></div>
                                <div></div>
                            </div>
                            <div className="grid place-items-center pt-6">
                                <Button className="!w-[198px] !h-[44px] button-bg text-white grid place-items-center !p-0 !font-normal">Add more Expenses</Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
            <div className="mt-6"><DoughNutChart /></div>
            <div className="mt-6 shadow-lg rounded-xl p-6">
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
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.expenses}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{item.cost}</td>
                                </tr>
                            </>
                        ))}
                        <tr className="bg-[#F4FFFE] border-b transition duration-300 ease-in-out">
                            <td></td>
                            <td className="px-6 py-4 text-sm font-medium text-center text-green1 whitespace-nowrap">Total Expenses</td>
                            <td className="px-6 py-4 text-sm font-medium text-green1 whitespace-nowrap">$ 7693.80</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
