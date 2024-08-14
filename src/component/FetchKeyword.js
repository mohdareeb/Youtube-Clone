import {useEffect} from "react"


const FetchKeyword=({keyword})=>{
    
    useEffect(()=>{
        fetch_by_keyword(keyword);
    },[])

    const fetch_by_keyword=async(searchResult)=>{
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q="+searchResult+"&type=video&key=AIzaSyDadFPGptWvLcXXiE3-cL754Pf130_Wamw");
        const json = await data.json();
        console.log(json);
    }
    console.log(keyword);
    return (
        <div>
            <h2>This is Heading </h2>
        </div>
    )
}

export default FetchKeyword;