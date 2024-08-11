const Header=()=>{
    return (
        
        <div className="flex justify-between p-4 shadow-lg">
            <div className="flex h-6">
                <img className="mr-2" alt="hamburger" src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"/>
                <img className="bg-black" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"/>
            </div>
            <div className="h-6">
                <input className="border border-black rounded-l-lg  w-80" type="text" />
                <button className="bg-gray-200 rounded-r-lg border border-black w-8">🔍</button>
            </div>
            <div className="h-6">
                <img className="h-8"alt="username" src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-vector-icon-png-image_1824214.jpg"/>
            </div>
        </div>
    )
}

export default Header;