import { useEffect ,useState } from "react";
import VideoCart from "./VideoCart";
import { youtube_api } from "../constant/api";
import {Link} from "react-router-dom";


const VideoContainer=()=>{
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch_video()
    },[])

    

    const fetch_video=async()=>{
        
        const data = await fetch(youtube_api);
        const json = await data.json();
        // console.log(json);
        setItems(json.items)
        
        
    }
    console.log(items)
    return (
        <div className="flex flex-wrap">
            

             {
                items.map((item,index)=>{
                    return (
                        <Link to={"watch?v=" + item.id}><VideoCart item={item} key ={index}/></Link>
                    )
                })
             }
            
        </div>
    )

}

export default VideoContainer;