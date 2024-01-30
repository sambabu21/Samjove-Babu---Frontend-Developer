
export default function CapsulesSearchForm( { handleChange,clearFilters }){

    return (
        <div className="search-engine">
           
            <h2>Search parameters and filters</h2>
            <div className="parameters">
            <div>
                    <label htmlFor="status">Status</label>
                    <select 
                        id="status"
                        onChange={handleChange}
                        name="status"
                        >
                        <option value="">--Please choose an option--</option>
                        <option value='retired'>Retired</option>
                        <option value='unknown'>Unknown</option>
                        <option value='active'>Active</option>
                        <option value='destroyed'>Destroyed</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="type">Type</label>
                    <select 
                        id="type"
                        onChange={handleChange}
                        name="type"
                        >
                        <option value="">--Please choose an option--</option>
                        <option value='Dragon 1.0'>Dragon 1.0</option>
                        <option value='Dragon 1.1'>Dragon 1.1</option>
                        <option value='Dragon 2.0'>Dragon 2.0</option>
                    </select>
                </div>
                {/* <div>
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
                </div> */}
            </div>
            <button  onClick={clearFilters}>Clear Filters</button>
        </div>
    )
}