import Button from "./Button";

const ButtonList =()=>{
    const buttonList=["All","Recruitment","Poetry","Computer Science","Philosophy","Computer Programming","UPSC","Civil Service"]
    return (
        <div className="flex m-2">
            {  
                buttonList.map((tag,index)=>{
                    return (
                        <Button name={tag} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default ButtonList;