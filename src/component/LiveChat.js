import Mesg from "./Mesg";
import { generate } from "../constant/nameGenerator";
import { makeid } from "../constant/nameGenerator";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addMessages}  from "../utils/chatSlice";

const LiveChat=()=>{
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i =setInterval(()=>{
            console.log("Api Pooling")
            dispatch(addMessages({
                name:generate(),
                msg:makeid(25),
            }))
        },2000)

        return ()=>{
            clearInterval(i);
        }

    },[dispatch])

    return (
        <div className="ml-2 border border-black w-[340px] h-[400px]  rounded-lg overflow-scroll">
            <h2 className="font-medium p-2">Live Comments</h2>
           
           {
            chatMessages.map((c,index)=>{
                return (
                    <Mesg key ={index} username={c.name} msg={c.msg}/>
                )
            })
           }
            
            {/* <Mesg username={generate()} msg={makeid(15)}/>
            <Mesg username={generate()} msg={makeid(20)}/>
            <Mesg username={generate()} msg={makeid(25)}/> */}
        </div>
    )
}

export default LiveChat;