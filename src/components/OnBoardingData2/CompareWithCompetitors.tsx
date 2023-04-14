import { useState } from "react";
import { ReactComponent as Tick } from "../../assets/tick.svg";
import Input from "components/Inputs/Input";
import { Form, Formik } from "formik";

export default function CompareWithCompetitors() {
    const items = [
        {
            id: 1,
            name: 'Better'
        },
        {
            id: 2,
            name: 'Same'
        },
        {
            id: 3,
            name: 'Worse'
        }
    ]
    const [active, setActive] = useState(0);
    function Change(params: any) {
        console.log(params);
        setActive(params)
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-y-8">
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
            <div>
                {active === 1 ? (
                    <div className="mt-6 w-60 py-3 px-4 bg-[#f3f3ff] rounded-lg">
                        <div className="underline pb-2 text-customGreen-200">How?</div>
                        <div className="pb-2">
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
                                            <Input id={"1"} name={"test"} type={"text"} label={``} placeholder={`123`} inputclassName={`bg-white placeholder:text-black`}/>
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

            </div>
        </div>

    )
};
