import { useDispatch } from "react-redux";
import { closedMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage =()=>{
    const dispatch = useDispatch();
    dispatch(closedMenu());
    const [searchparams] = useSearchParams();
    console.log(searchparams.get("v"))

    return (
        <div className="p-3">
            <iframe width="1000" 
            height="500" 
            src={"https://www.youtube.com/embed/" + searchparams.get("v") } 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage;