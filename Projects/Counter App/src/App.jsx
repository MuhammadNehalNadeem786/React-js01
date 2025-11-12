import { useState } from "react";

function App() {
    const initialValue = 0; // store initial value in a variable
    const [counter, setCounter] = useState(initialValue);

    const addvalue = () => {
        setCounter(prevCounter => {
            if (prevCounter < 20) {
                return prevCounter + 1;
            }
            return prevCounter; // ensure we return something
        })
    }

    const removevalue = () => {
        setCounter(prevCounter => {
            if (prevCounter > 0) {
                return prevCounter - 1;
            }
            return prevCounter;
        })
    }

    const resetValue = () => {
        setCounter(initialValue); // reset counter to initial value
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-500">
            <div className="bg-white p-8 rounded-xl text-center">
                <h1 className="text-3xl mb-4 font-bold text-gray-700">Counter App</h1>
                <h2 className="text-xl mb-6 font-medium">
                    Counter Value: <span className="text-blue-700">{counter}</span>
                </h2>

                <div className="flex justify-center gap-x-4">
                    <button
                        onClick={addvalue}
                        disabled={counter >= 20}
                        className={
                            counter >= 20
                                ? "px-5 py-2 rounded-lg text-white font-medium bg-red-400 cursor-not-allowed"
                                : "px-5 py-2 rounded-lg text-white font-medium bg-green-500 hover:bg-green-800"
                        }
                    >
                        Add Value
                    </button>

                    <button
                        onClick={removevalue}
                        disabled={counter <= 0}
                        className={
                            counter <= 0
                                ? "px-5 py-2 bg-red-400 font-medium rounded-lg text-white cursor-not-allow"
                                : "px-5 py-2 bg-blue-500 font-medium rounded-lg text-white hover:bg-blue-700"
                        }
                    >
                        Remove Value
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={resetValue}
                        className="px-5 py-2 bg-yellow-500 rounded-lg text-white hover:bg-yellow-600"
                    >
                        Reset
                    </button>
                </div>

                <p className="font-medium text-slate-900 mt-4">Range: 0-20</p>
            </div>
        </div>
    )
}

export default App
