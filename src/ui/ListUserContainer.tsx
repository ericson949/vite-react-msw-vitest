import {useEffect, useState} from "react";

const ListUserContainer = () => {
    const [user, setUser]= useState("UNKNOW")
    useEffect( ()=>{
        const loadingData = async()=> {
            await fetch('https://api.example.com/user', {
                method:"GET"
            }).
            then(res=>res.json()).
            then(data=> {
                setUser(data.name)
            }).catch(err=>{
                console.log(err)
            })
        }
        loadingData()
    })
    return (
        <div data-testid={"user-name"}>
            {
                user
            }
        </div>
    );
};

export default ListUserContainer;