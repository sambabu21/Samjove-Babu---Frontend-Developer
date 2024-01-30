export default function Pagination({ filteredResults,postsPerPage }){
   let  pageNumbers=[]

    for(let i=1;i<=Math.ceil(filteredResults/postsPerPage);i++){
         pageNumbers.push(i)
    }

    return (
        <div className="page-number-container">
            <ul>
                {pageNumbers.map((num)=>{
                    <li key={num}>{num}</li>
                })}
            </ul>
        </div>
    )
}