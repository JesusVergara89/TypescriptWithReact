import { useEffect, useRef, useState } from "react"

type Props = {
    milli: number
}

export const Timer = ({milli}: Props) => {
    const [seconds, setSeconds] = useState(0)
    const ref = useRef<number>()
    useEffect(()=>{
        setSeconds(0)
    },[milli])
    useEffect(()=>{
        ref.current && clearTimeout( ref.current )
        //ref.current = setInterval(()=> setSeconds( s => s + 1) , milli)
    },[])
    console.log(ref)
  return (
    <div>
        <h3>Timer {seconds}</h3>
        <h3>{milli}</h3>
    </div>

  )
}
