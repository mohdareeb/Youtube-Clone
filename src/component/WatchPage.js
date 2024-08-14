import { useDispatch } from "react-redux";
import { closedMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import LiveChat from "./LiveChat";

const WatchPage =()=>{
    const dispatch = useDispatch();
    dispatch(closedMenu());
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"))

    return (
        <div>
            <div className="p-3 flex">
                <iframe width="980" 
                height="400" 
                src={"https://www.youtube.com/embed/" + searchparams.get("v") } 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <LiveChat/>
            </div>
            <div className="p-2">
                <CommentSection/>
            </div>
        </div>
    )
}

export default WatchPage;