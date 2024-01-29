import { useState,useEffect } from "react"

//custom hook to handle api calls and filtering of data
export function useRockets(){
    const [rockets,setRockets] = useState([])
    const [filters,setFilters] = useState({
        rocket_name:'',
        active:null,
        country:null
    })

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/rockets')
        .then(res=>res.json())
        .then(data=> setRockets(data))

    },[])

    
    let filteredResults= rockets.filter(rocket=>{
        
        return Object.keys(filters).filter(key=>{
             
            return filters[key]!=null
        }).every(key=>{
            if(key==="rocket_name"){
                return rocket[key].toLowerCase().includes(filters[key])
            }else if(key==="active"){
                return rocket[key].toString()===filters[key] 
            }else{
                return rocket[key]===filters[key]
            }
        })
    })

    if(Object.values(filters).every(val=>!val)){
        filteredResults=rockets
    }

    return {rockets,filteredResults,filters,setFilters}
}