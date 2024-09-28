import React from 'react'

function Movies({movieData}) {
 const mdata = movieData.map((v,i)=>{
          return(
            <div key={i}>
            <img src={v.poster} alt={v.title} />
              <h3>{v.title}</h3>  
            </div>
          )
        })
  return (
    <>
    <div className="container m-auto">

      <div className="grid grid-cols-5">
        {mdata}
    </div>
      </div>
    </>
  )
}

export default Movies