import CapsulesBanner from "./Components/CapsuleComponents/CapsulesBanner"
import CapsulesSearchForm from "./Components/CapsuleComponents/CapsulesSearchForm"
import CapsuleGrid from "./Components/CapsuleComponents/CapsuleGrid"
import { useData } from "./customHooks"


export default function CapsuleApp(){
  const { data,filteredResults,filters,setFilters } = useData('https://api.spacexdata.com/v3/capsules')
    
    
    function handleChange(e){
        const { name,value } = e.target
        setFilters((prevFilters)=>{
            return {
                ...prevFilters,
                [name] : (value==="")?null:value
            }
        })
    }

    function clearFilters(){
        setFilters({
          status:null,
          type:null
      })
      }

    return (
        <>
            <CapsulesBanner />
            <CapsulesSearchForm 
                filters={filters} 
                handleChange={handleChange}
                clearFilters={clearFilters}
            />
            <CapsuleGrid 
                filteredResults={filteredResults}
            />
        </>
    )
}