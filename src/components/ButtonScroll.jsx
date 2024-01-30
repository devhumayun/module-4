import { useRef } from "react";

export default function ButtonScroll() {
    const ref = useRef(null)
    const handleScrollDown = () => {
        document.getElementById("div").textContent = "Hello Cumilla's People"
        ref.current.scrollIntoView({
            behavior: "smooth"
        })
    }
    return (
        <div className="my-14 mx-20">
            <button onClick={handleScrollDown} className="bg-gray-500 text-white p-3 rounded-md"> Click me to reach the location! </button>
            <div id="div" ref={ref} className="text-2xl underline mt-[100vh]"> Welcome to cumilla  </div>
        </div>
    );
}