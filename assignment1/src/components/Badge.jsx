import '../index.css'
export default function Badge ({label, value}) {
    return (
        <div className="flex flex-cols-2 gap-4 justify-between items-center mx-auto w-1/4 my-2 bg-gray-50 p-3 rounded-md shadow-md hover:bg-gray-100">
            <div className="text-xl text-indigo-600">
                {label}
            </div>
            <div className="text-indigo-500 text-md mt-[4px]">
                <p className="text-center hover:bg-white px-4 py-2 rounded-md shinny-red-border transition ease-in duration-200">
                    {value}
                </p>
            </div>
        </div>
    )
}