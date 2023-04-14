// @ts-nocheck
import { useState } from "react";
import Comparables from "./Comparables";
import DCF from "./DCF";
import ScoreCard from "./ScoreCard";
import VC from "./VC";


export default function NavTabs() {
    const [currentTab, setCurrentTab] = useState('dcf');
    const defaultStyle = "py-3 px-4 cursor-pointer font-semibold text-gray-400"
    const activeStyle = "py-3 px-4 cursor-pointer bg-white text-black font-semibold rounded-tl-lg rounded-tr-lg"
    return (
        <>
            <div className="p-2 rounded-lg bg-[#f3f3ff]">
                <div className="pt-4 flex justify-between items-center">
                    <div className="flex">
                        <div className={currentTab === 'dcf' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('dcf')}>DCF</div>
                        <div className={currentTab === 'vc' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('vc')}>VC</div>
                        <div className={currentTab === 'sc' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('sc')}>Score Card</div>
                        <div className={currentTab === 'compara' ? activeStyle : defaultStyle} onClick={() => setCurrentTab('compara')}>Comparables</div>
                    </div>
                    <div className="py-3 pr-8 text-red-600 hover:text-red-400 cursor-pointer">Reset</div>
                </div>
                <div><ConditionalConnector tab={currentTab} /></div>
            </div>
        </>
    )
};




function ConditionalConnector({ tab }) {
    if (tab === 'dcf') {
        return (
            <>
                <DCF />
            </>
        )
    } else if (tab === 'sc') {
        return (
            <>
                <ScoreCard />
            </>);
    } else if (tab === 'vc') {
        return (
            <>
                <VC />
            </>)
    }
    else if (tab === 'compara') {
        return (
            <>
                <Comparables />
            </>)
    }
};

