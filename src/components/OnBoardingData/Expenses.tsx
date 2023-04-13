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
                                <div><Input id={"1"} name={"payment"} type={"number"} label={`Payment Processing Fees Per Transaction`} symbol={`%`} placeholder={`2`} /></div>
                                <div><Input id={"1"} name={"payment"} type={"number"} label={`Customer Support Outsourced`} symbol={`%`} placeholder={`3`} /></div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
};
