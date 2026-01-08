export default function Header ({title}) {
    return (
        <div 
            className="text-center flex justify-center items-center p-12 my-6 bg-indigo-500 rounded-md shadow-sm mx-auto hover:bg-indigo-700 transiiton ease-in duration-200"
        >
            <h1 className="text-2xl font-bold text-white">
                {title}
            </h1>
        </div>
    )
}