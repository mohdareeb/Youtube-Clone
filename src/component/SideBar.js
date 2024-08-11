import React from "react";
import { useSelector } from "react-redux";

const SideBar=()=>{
    const isMenuOpen=useSelector((store) => store.app.isMenuOpen)
    if(!isMenuOpen) return null;
    return (
        <div className="w-40 p-8 h-screen border shadow-lg">
            <ul className="mb-10 mt-2">
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <ul className="mb-10">
                <li className="font-bold">Subscriptions</li>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <ul className="mb-10">
                <li className="font-bold">Watch Later</li>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default SideBar;