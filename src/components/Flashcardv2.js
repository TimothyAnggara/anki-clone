import image from "../images/image.jpg"
export default function Flashcardv2(props){

    function handleButtonOnClick(){

    }
    return (
      <div className="flex h-screen justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <button className="front p-6 text-center justify-center flex`">
            {props.front}
        </button>

        <div className="back p-6 text-center hidden">
            {props.back}
            <div className="px-6 pt-4 pb-2 flex justify-center ">
                <button className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Good to go</button>
                <button className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Unsure</button>
                <button className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Don't know</button>
            </div>
        </div>
        
      
    </div>
    </div>)
}