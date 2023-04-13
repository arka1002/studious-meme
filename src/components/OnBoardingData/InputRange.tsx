// @ts-nocheck
import styles from './InputRange.module.css'
import { useState } from "react";

export default function InputRange() {
    const [value, setValue] = useState(25);


    return (
        <>
            <div className='pt-16'>
                <div className='relative'>
                    {/* Needed to add CSS Modules because tailwind css doesnt support the necessary pseudo-elements required for styling */}
                    <p className={styles.upperp} style={{ left: `${value}%` }}>{value}</p>
                    <div className={styles.upperspan} style={{ left: `${value}%` }}></div>
                </div>
                <input
                    type="range"
                    id="test"
                    className={styles.special}
                    min={0}
                    max={100}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    style={{
                        backgroundImage: `linear-gradient(to right, #0e7469  0%, #1fc39e ${value}%, #d9d9d9 ${value}%, #d9d9d9 100%)`,
                    }} 
                    />
            </div>
        </>
    );
};
