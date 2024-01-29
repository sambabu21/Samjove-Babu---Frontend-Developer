// import { useState,useEffect } from 'react'
import Banner from './Components/Banner'
import TileSection from './Components/TileSection'
import SearchForm from './Components/SearchForm'
import { useRockets } from './customHooks'


export default function RocketApp() {
  
  const { rockets,filteredResults,filters,setFilters } = useRockets()
  
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
        rocket_name:'',
        active:null,
        country:null
    })
    }

  return (
    <div className='site-container'>
      <Banner />
      <SearchForm 
          filters={filters} 
          handleChange={handleChange}
          clearFilters={clearFilters}
        />
      <TileSection 
          rocketList={filteredResults}
      />
    </div>
  )
}


