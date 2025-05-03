import { FaBowlFood } from "react-icons/fa6";
import { LiaCodiepie } from "react-icons/lia";
import { SiFoodpanda } from "react-icons/si";


const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            {/* <LiaCodiepie className="animate-spin text-6xl text-blue-500" /> */}
            {/* <FaBowlFood className="animate-spin text-6xl text-blue-500" /> */}
            <SiFoodpanda className="animate-spin text-6xl text-gray-800" />
        </div>
    );
};

export default Loading;