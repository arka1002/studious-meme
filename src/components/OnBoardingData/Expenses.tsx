import Input from "components/Inputs/Input";
import { Form, Formik } from "formik";

export default function Expenses() {
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
                                <div><Input id={"1"} name={"payment"} type={"number"} label={`Payment Processing Fees Per Transaction`} symbol={`%`} placeholder={`2`} inputclassName={`pl-9`}/></div>
                                <div><Input id={"2"} name={"customer"} type={"number"} label={`Customer Support Outsourced`} symbol={`%`} placeholder={`3`} inputclassName={`pl-9`} /></div>
                                <div><Input id={"3"} name={"effective"} type={"number"} label={`Effective Annual Growth`} symbol={`%`} placeholder={`0`} inputclassName={`pl-9`} />
                                <div className="pt-1 text-[#10786C] text-sm font-medium">We’re Calculating Your Effective Annual Growth</div></div>
                                <div><Input id={"4"} name={"hourly"} type={"number"} label={`Hourly Tickets per agent hour`} symbol={`#`} placeholder={`3`} inputclassName={`pl-9`} /></div>
                                <div></div>
                                <div><Input id={"5"} name={"hourlycost"} type={"number"} label={`Hourly Cost`} symbol={`$`} placeholder={`4`} inputclassName={`pl-9`} /></div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
};
