

export default function Navbar() {
    return (
        <>
            <nav className="   text-white flex justify-between items-center px-4 py-2 absolute w-full ">
                <img src="images/Logo2.jpeg" alt='Logo' className=" rounded-full object-cover h-20 w-20"/>
                <div className=" flex  mx-auto gap-4 font-bold list-none text-2xl">
                    <li className=" p-4">Home</li>
                    <li className=" p-4">About</li>
                    <li className=" p-4">Carousel</li>
                    <li className=" p-4">Contact</li>
                </div>

            </nav>
        </>
    );
}