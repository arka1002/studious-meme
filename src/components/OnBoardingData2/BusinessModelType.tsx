export default function BusinessModelType() {
    const items = [
        {
            id: 1,
            name: 'standard financial model'
        },
        {
            id: 2,
            name: 'services financial model'
        },
        {
            id: 3,
            name: 'marketplace model'
        },
        {
            id: 4,
            name: 'saas model'
        },
        {
            id: 5,
            name: 'hardware financial model'
        }
    ]
    return (
        <div className="grid grid-cols-2 gap-y-8">
            {items.map(item => (
                <div className="w-60 rounded-md border-2 bg-[#f3f3ff] py-3 px-5">{item.name}</div>
            ))}
        </div>
    )
};
