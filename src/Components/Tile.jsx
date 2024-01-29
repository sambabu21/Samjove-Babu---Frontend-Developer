

export default function Tile({ name,imageUrl,status,handleClick }){
    return (
        <div className="tile-container">
            <img src={imageUrl} alt={name} className="tile-img"/>
            <h2>{name}</h2>
            <p>{status}</p>
            <button onClick={handleClick} className="view-det-btn">View details</button>
        </div>
    )
}