import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { youtube_suggestion_api } from "../constant/api";


const Header=()=>{
    const dispatch  = useDispatch();
    const [searchQuery,setsearchQuery]=useState("");
    const [searchSuggestion,setSearchSuggestion] =useState("");

    const handleSidebar =()=>{ 
        dispatch(toggleMenu())
    }
    


    useEffect(()=>{
        const timer= setTimeout(()=>
            {searchFunction()
            },
            200);

        return ()=>{
            clearTimeout(timer)
        }

    },[searchQuery]);

    const searchFunction=async()=>{
        const data = await fetch(youtube_suggestion_api +searchQuery);
        const json = await data.json();
        console.log(json[1]);
        setSearchSuggestion(json[1]);
    }

    const watchSearch=(searchResult)=>{
    
        console.log(searchResult);
    }
   
    return (
        <div>
            <div className="flex justify-between p-4 shadow-lg">
                <div className="flex h-6">
                    <button onClick={()=>{handleSidebar()}} className="w-10 cursor-pointer"><img className="mr-2" alt="hamburger"  src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"/></button>
                    <img className="bg-black" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"/>
                </div>
                <div className="h-6">
                    <input className="border border-black rounded-l-lg  w-80 px-1" type="text" value ={searchQuery} onChange={(e)=>{setsearchQuery(e.target.value)}}/>
                    <button className="bg-gray-200 rounded-r-lg border border-black w-8">🔍</button>
                </div>
                
                <div className="h-6">
                    <img className="h-8"alt="username" src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-vector-icon-png-image_1824214.jpg"/>
                </div>
            </div>

            {searchSuggestion.length!== 0 ?     <div className="fixed left-[41%] w-[22rem] bg-white p-2 rounded-lg shadow-lg ">
                    <ul>
                        {
                            searchSuggestion?.map((item , index)=>{
                                return (
                                <li  key ={index} className="hover:bg-gray-200 rounded-lg"><button onClick={()=>{watchSearch(item)}} >🔍 {item}</button></li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
            :
            null
            }
        </div>
    )
}

export default Header;