import { useEffect ,useState } from "react";
import VideoCart from "./VideoCart";
import { youtube_api } from "../constant/api";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";


const VideoContainer=()=>{
    const [items,setItems] = useState([]);
    const [keywordItem,setKeywordItem]=useState([]);
    
    const check = useSelector((store)=>store.keyword.keyword);
   
    // console.log(check.payload);
    useEffect(()=>{
        fetch_video()
    },[check])
    
    const fetch_video=async()=>{
        
        if(check.payload === undefined){
            const data = await fetch(youtube_api)
            const json = await data.json();
            setItems(json.items);
        }
        else{
            setItems([])
            const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+check.payload+"&type=video&key=AIzaSyDadFPGptWvLcXXiE3-cL754Pf130_Wamw");
            const json = await data.json();
            setKeywordItem(json.items);
        }
    }

    

    
    // console.log(items)
    return items.length!==0 ? (
        <div className="flex flex-wrap">
            

             {
                items.map((item,index)=>{
                    return (
                        <Link to={"watch?v=" + item.id}><VideoCart item={item} key ={index}/></Link>
                    )
                })
                
             }
            
        </div>
        
    ): (
    <div className="flex flex-wrap">
             {
                keywordItem.map((item,index)=>{
                    return (
                        <Link to={"watch?v=" + item.id.videoId}><VideoCart item={item} key ={index}/></Link>
                    )
                })
             }
        </div>
            )

}

export default VideoContainer;