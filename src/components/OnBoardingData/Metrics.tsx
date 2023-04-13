import InputRange from "./InputRange";

export default function Metrics() {
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
                <div><InputRange/></div>
                <div><div className="font-semibold text-customGray-2000 text-center">Runaway</div>
                    <div className="flex justify-center mt-4">
                    <div className="flex justify-center mt-4 gap-4">
                        <div className="text-5xl font-semibold green-gradient">3.2</div>
                        <div className="pt-2 font-semibold green-gradient">Months</div>
                    </div>
                    </div></div>
            </div>
        </div>
    )
};
