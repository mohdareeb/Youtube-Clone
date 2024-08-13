const commentList =[
    {
        name:"Mohd Areeb",
        comment:"Lorem is the greart "
    },
    {
        name :"Aman",
        comment:"Lorem eme e"
    },
    {
        name:"Mohd Areeb",
        comment:"Lorem is the greart "
    },
    {
        name :"Aman",
        comment:"Lorem eme e"
    },
    {
        name:"Mohd Areeb",
        comment:"Lorem is the greart "
    },
    {
        name :"Aman",
        comment:"Lorem eme e"
    },
    {
        name:"Mohd Areeb",
        comment:"Lorem is the greart "
    },
    {
        name :"Aman",
        comment:"Lorem eme e"
    }
]

const CommentComponent=({listcomment})=>{
    return (
        <>
                {
                    listcomment.map((item,index)=>{
                        return (
                            <div key={index}>
                                <div className="pl-2 flex">
                                    <img alt="user-image" className="pr-2 h-8" src="https://png.pngtree.com/png-vector/20191018/ourmid/pngtree-user-vector-icon-png-image_1824214.jpg" />
                                    <h2 className="font-semibold">{item.name}</h2>
                                </div>
                                <div className="pl-4 ml-8 border-black border-l-2">
                                    <h2>{item.comment}</h2>
                                    {/* <CommentComponent listcomment={commentList}/> */}
                                </div>
                            </div>
                        );
                    })
                }
                </>        
    )
}
const CommentSection=()=>{
    return (
        <div>
        <h2 className="p-2 font-bold">Comment Section</h2>
        <CommentComponent listcomment ={commentList}/>
        </div>
    )
}

export default CommentSection;