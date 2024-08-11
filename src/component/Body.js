import SideBar from "./SideBar";
import ButtonList from "./ButtonList";

import { Outlet } from "react-router-dom";

const Body =()=>{
    return (
        <div className="flex">
            <SideBar/>
            <div>
                <ButtonList/>
                <Outlet />
            </div>
        </div>
    )
}

export default Body;