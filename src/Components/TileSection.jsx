import { useState } from "react";
import Tile from "./Tile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

export default function TileSection( { rocketList } ){
    //state to control the rocket detail window triggering on and off
    const [details,setDetails] = useState([])
    const [closed,setClosed] = useState(false)
    

    const listElements = rocketList.map(rock=>{
        return <Tile key={rock.id} imageUrl={rock.flickr_images[0]} name={rock.rocket_name} status={rock.active} handleClick={()=>handleClick(rock)}/>
    })
    
    function handleClick(rocket){
        setDetails([{...rocket}])
        setClosed(true)
    }

    let searchText = (listElements.length===0)?"No rockets based on your filters..": "Rockets based on your search..."

    return (
        <>
            {/* Rockets display grid */}
            <div className="grid-container">
                <h2 className="search-text">{searchText}</h2>
                <div className="display-grid">
                    
                    {listElements}
                </div>
            </div>

        {/* rocket detail window which gets displayed when the view details button is clicked */}
        {
            closed ? <div className="detail-container">
                <FontAwesomeIcon icon={faXmark} onClick={()=>{setClosed(false)}} className="close-btn"/>
                {details.map(detail=>{
                    return (
                        <div key={detail.id} className="detail-window">
                            <div>
                                <img src={detail.flickr_images[0]} alt={detail.rocket_name} className="detail-img"/>
                            </div>
                            <div>
                                <h2>{detail.rocket_name}</h2>
                                <p>{detail.description}</p>
                                <p>Cost per launch: {detail.cost_per_launch}</p>
                                <p>First flight: {detail.first_flight}</p>
                                <p>Succes rate percentage: {detail.success_rate_pct}%</p>
                                <p>Status: {detail.active?"active":"inactive"}</p>
                            </div>
                        </div>
                    )
                })}
            </div> : null
        }
        </>
    )
    
}