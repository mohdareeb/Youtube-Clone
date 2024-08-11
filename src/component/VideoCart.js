const VideoCart=({item})=>{
    console.log(item)
    return (
        <div className="m-2 p-4 rounded-lg border border-gray-50 shadow-lg w-64 h-60">
            <img alt="thumbnail" src={item?.snippet?.thumbnails?.medium?.url}/>
            <h1 className="font-bold">{item?.snippet?.title.slice(0,50)}...</h1>
            <div className="flex justify-between">
                <h1>{item?.snippet?.channelTitle}</h1>
                <h1>{item?.statistics?.viewCount} Views </h1>
            </div>
            
             
        </div>
    )
}

export default VideoCart;