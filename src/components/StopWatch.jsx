import { useRef, useState } from 'react';

export default function StopWatch() {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null)

    // start the stop watch
    const handleStartStopwatch = () => {
        setStartTime(Date.now())
        setNow(Date.now())

        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10)
    }

    // stop the stopwatch
    const handleStopwatchStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondPassed = 0

    if (startTime != null && now != null) {
        secondPassed = (now - startTime) / 1000
    }

    return (
        <>
            <div className='w-[400px] h-[300px] flex flex-col justify-center items-center bg-gray-300 rounded-md shadow-md' >
                <div className='flex justify-center items-center w-full'>

                    <h1 className='text-center w-full'>
                        <span>Time passed:{secondPassed}</span>
                    </h1>
                </div>
                <div className="flex justify-center mt-3 items-center">
                    <button className='px-5 py-3 rounded-sm text-white bg-indigo-400'
                        onClick={handleStartStopwatch}
                    >
                        Start
                    </button>
                    <button className='px-5 py-3 rounded-sm text-white bg-indigo-400'
                        onClick={handleStopwatchStop}
                    >Stop</button>
                </div>
            </div>
        </>
    );
}
