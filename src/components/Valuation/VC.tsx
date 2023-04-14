export default function VC() {
    const items = [
        {
            label: "VC Revenue",
            value: "1000000",
        },
        {
            label: "Exit Multiple",
            value: "7",
        }
    ]
    return (
        <>
            <div className="bg-white p-7 shadow-md">
                <div className="flex justify-end py-2">
                    <select id="series" className="w-[110px] bg-[#F3F3FF] text-sm font-semibold text-[#1FC39E] px-2 py-2 rounded">
                        <option value="revenue">use Revenue </option>
                        <option value="ebita">use EBITA </option>
                        <option value="both">use both </option>
                    </select>
                </div>
                <table className="w-full">
                    <tbody>
                        {items.map(item => (
                            <>
                                <tr className="border-b">
                                    <td className="py-4 text-center text-gray-600 font-semibold text-sm">{item.label}</td>
                                    <td className="py-4 text-center text-gray-600">
                                        <input type="text" className=" border-none outline-none text-center focus:shadow-outline w-28 text-md bg-gray-200 px-1 py-2 rounded font-normal focus:ring-1 text-md" pattern="[0-9]" defaultValue={item.value} />
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};
