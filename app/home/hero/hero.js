import Navbar from "../nav/navbar";

export default function Hero() {
    return (
        <>
            <div className=" relative">

                <Navbar />
                <video src='videos/backgroundvid3.mp4' className=" w-full h-screen object-cover min-h-screen" autoPlay loop preload="none" muted />
            </div>
        </>
    );
}