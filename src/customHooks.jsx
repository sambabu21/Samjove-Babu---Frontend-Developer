import { useState,useEffect } from "react"

//custom hook to handle api calls and filtering of data
export function useData(url){
    const [data,setData] = useState([])
    const [filters,setFilters] = useState({})

    // useEffect(()=>{
    //     if(url==='https://api.spacexdata.com/v3/rockets'){
    //     setFilters({
    //         rocket_name:'',
    //         active:null,
    //         country:null, 
    //     })
    // }else{
    //     setFilters({
    //         status:null,
    //         type:null
    //     })
    // }

    // },[])

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setData(data))

    },[])

    
    let filteredResults= data.filter(data=>{
        
        return Object.keys(filters).filter(key=>{
             
            return filters[key]!=null
        }).every(key=>{
            if(key==="rocket_name"){
                return data[key].toLowerCase().includes(filters[key])
            }else if(key==="active"){
                return data[key].toString()===filters[key] 
            }else{
                return data[key]===filters[key]
            }
        })
    })

    if(Object.values(filters).every(val=>!val)){
        filteredResults=data
    }

    return {data,filteredResults,filters,setFilters}
}