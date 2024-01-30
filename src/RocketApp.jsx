// import { useState,useEffect } from 'react'

import TileSection from './Components/RocketComponents/TileSection'
import RocketsSearchForm from './Components/RocketComponents/RocketsSearchForm'
import { useData } from './customHooks'
import RocketBanner from './Components/RocketComponents/BannerRockets'


export default function RocketApp() {
  
  const { data,filteredResults,filters,setFilters } = useData('https://api.spacexdata.com/v3/rockets')
  
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
      <RocketBanner />
      <RocketsSearchForm 
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


