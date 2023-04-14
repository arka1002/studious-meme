// @ts-nocheck

import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Pen } from "../../assets/pen.svg";
import { ReactComponent as Save } from "../../assets/save.svg";
import { useState } from "react";
import styles from './ScoreCard.module.css'
import Input from "components/Inputs/Input";
import { Form, Formik } from "formik";



export default function SC() {
    const [modalShown, toggleModal] = useState(false);
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
            "Value Driver",
            "Weight",
            "Your Venture Score",
            "Factor"
        ],
    }
    const items = [
        {
            valueDriver: "Strength of the Management Team",
            weight: "30%",
            yvs: "100%",
            factor: "0.3"
        },
        {
            valueDriver: "Size of the Opportunity",
            weight: "15%",
            yvs: "100%",
            factor: "0.15"
        }
    ]
    return (
        <>
            <div className="p-7 bg-white shadow-md">
                <div className="flex flex-row-reverse pb-4 items-center">
                    <div className="flex gap-2 cursor-pointer items-center text-[#14937E]">
                        <div>Add Value Driver</div>
                        <div><Plus onClick={() => {
                            toggleModal(!modalShown);
                        }} /></div>
                    </div>
                    <Modal
                        shown={modalShown}
                        close={() => {
                            toggleModal(false);
                        }}
                    >

                        <div>
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
                                            <Input id={"1"} name={"test"} type={"text"} label={``} placeholder={`Others`} />
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                        {/* <div><Input id={"6"} name={"hosting"} type={"text"} label={`Hosting Cost Per User`} placeholder={`4`} /></div> */}
                    </Modal>
                </div>
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
                                <tr onDoubleClick={() => changeMode(item.valueDriver)}>
                                    <td className="grid place-items-center py-4">
                                        {edit === item.valueDriver ? (
                                            <Save onClick={() => changeMode(item.valueDriver)} className='text-[#979797] text-center cursor-pointer' />
                                        ) : (
                                            <Pen onClick={() => changeMode(item.valueDriver)} />
                                        )}
                                    </td>
                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.valueDriver}</td>

                                    {edit === item.valueDriver ? (<td className="text-center py-4 font-semibold text-sm text-gray-600">
                                        <input type="text" pattern="[0-9]" id="discountedrate" className="w-28 border-none outline-none text-center focus:shadow-outline  bg-gray-200 p-1 rounded font-normal focus:ring-1 text-md focus:ring-gray-400" defaultValue={item.weight} />
                                    </td>) : (
                                        <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.weight}</td>
                                    )}
                                    {edit === item.valueDriver ? (<td className="text-center py-4 font-semibold text-sm text-gray-600">
                                        <input type="text" pattern="[0-9]" id="discountedrate" className="w-28 border-none outline-none text-center focus:shadow-outline  bg-gray-200 p-1 rounded font-normal focus:ring-1 text-md focus:ring-gray-400" defaultValue={item.yvs} />
                                    </td>) : (
                                        <td className="text-center py-4 font-semibold text-sm text-gray-600">{item.yvs}</td>
                                    )}

                                    <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">{item.factor}</td>
                                </tr>
                            </>
                        ))}
                        <tr>
                            <td></td>
                            <td className="py-4 px-1 lg:px-3 text-center font-bold text-sm text-gray-600">Factor Sum</td>
                            <td className="py-4 px-1 lg:px-3 text-center font-bold text-sm text-gray-600">100%</td>
                            <td></td>
                            <td className="text-center py-4 px-1 lg:px-3 font-normal text-sm text-gray-600">1</td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end">
                    <button className="py-3 px-6 rounded-md my-4 bg-[#1FC39E] text-white">Update Scorecard</button>
                </div>
            </div>
        </>
    )
};



function Modal({ children, shown, close }) {
    return shown ? (
        <div
            className={styles.modalbackdrop}
            onClick={() => {
                // close modal when outside of modal is clicked
                close();
            }}
        >
            <div
                className={styles.modalcontent}
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}
            >
                <button onClick={close}></button>
                {children}
            </div>
        </div>
    ) : null;
}