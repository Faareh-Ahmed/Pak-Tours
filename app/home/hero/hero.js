import Navbar from "../nav/navbar";

export default function Hero() {
    return (
        <>
            <div className=" relative">

                <Navbar />
                <video src='videos/backgroundvid3.mp4' className="w-screen h-screen object-cover" autoPlay loop preload="none" muted />
            </div>
        </>
    );
}