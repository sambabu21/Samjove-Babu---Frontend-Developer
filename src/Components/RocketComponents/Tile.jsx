

export default function Tile({ name,imageUrl,status,handleClick }){
    return (
        <div className="tile-container" onClick={handleClick}>
            <img src={imageUrl} alt={name} className="tile-img"/>
            <h2>{name}</h2>
            <p>{status}</p>
           
        </div>
    )
}