import { useState } from "react"
import CapsuleTile from "./CapsuleTile"
import Pagination from "../Pagination"

export default function CapsuleGrid({ filteredResults }){
    //state to control pagination
    
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage,setPostsPerPage] = useState(10)

    //determining current page
    const indexOfLastPost = currentPage*postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = filteredResults.slice(indexOfFirstPost,indexOfLastPost)


    const listElements = currentPosts.map((capsule)=>{
        return <CapsuleTile name={capsule.capsule_serial} type={capsule.type} status={capsule.status} key={capsule.capsule_serial}/>
    })
    return (
        <div className="grid-container">
                {/* <h2 className="search-text">{searchText}</h2> */}
                <div className="display-grid">
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listElements}
                        </tbody>
                    </table>
                </div>
                <Pagination filteredResults={filteredResults} totalPosts={filteredResults.length}/>
            </div>
    )
}