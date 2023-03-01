/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import Video from "./Video"
import { useAppSelector } from "@/store/hooks";

export const Reel = () => {
    const reels = useAppSelector((state) => (state.reels.data))
    const [video, setVideo] = useState([]);
    
  return (
    <div>
        {
            reels.map((reel, idx) => (
    
                <Video key={idx} reel={reel}/>
            ))
        }
    </div>
  )
}