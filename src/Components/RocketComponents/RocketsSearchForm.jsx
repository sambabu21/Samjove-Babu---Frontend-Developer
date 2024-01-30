
export default function RocketsSearchForm( { filters,handleChange,clearFilters}){

    return (
        <div className="search-engine">
           
            <h2>Search parameters and filters</h2>
            <div className="parameters">
                <div>
                    <label htmlFor="name">Rocket Name</label>
                    <input  
                        type="text"
                        placeholder="Enter rocket name"
                        id="name"
                        name="rocket_name"
                        value={filters.rocket_name}
                        onChange={handleChange}
                    ></input>
                </div>
                <div>
                    <label htmlFor="status">Status</label>
                    <select 
                        id="status"
                        onChange={handleChange}
                        name="active"
                        >
                        <option value="">--Please choose an option--</option>
                        <option value='true'>Active</option>
                        <option value='false'>Inactive</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <select
                        id="country"
                        onChange={handleChange}
                        name="country"   
                    >
                        <option value="">--Please choose an option--</option>
                        <option value="Republic of the Marshall Islands">Republic of the Marshall Islands</option>
                        <option value="United States">United States</option>
                    </select>
                </div>
            </div>
            <button onClick={clearFilters} >Clear Filters</button>
        </div>
    )
}