const Mesg = ({username,msg})=>{
    return (
        <div className="flex flex-wrap">
            <img className="h-8"alt="username" src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-vector-icon-png-image_1824214.jpg"/>
                <h2 className="font-medium">{username} :</h2>
                <h2 className="ml-2">{msg} </h2>
        </div>
    )
}

export default Mesg;