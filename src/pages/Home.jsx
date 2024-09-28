import React, { useEffect, useState } from 'react'
import Movies from "./Movies";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [movieDataGenre, setMovieDataGenre] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [dramaCheck, setDramaCheck] = useState(false);
  const [crimeCheck, setCrimeCheck] = useState(false);
  const getMovies = async() => {
    await fetch(`https://freetestapi.com/api/v1/movies?search=${searchData}`)
    .then(res=>res.json())
    .then((finalRes)=>{
      
      console.log(finalRes);
      setMovieData(finalRes);
      }
    )
  }

  const getMoviesGenre = async() => {
    await fetch(`https://freetestapi.com/api/v1/movies`)
    .then(res=>res.json())
    .then((finalRes)=>{
      if (dramaCheck) {
      console.log(finalRes);
    }
    else{
        setMovieDataGenre(finalRes);
        console.log('get drama genre not found');
      }
      }
    )
  }

  // const getDrama = () => {
  //   if (dramaCheck) {
  //     console.log('get drama genre');
  //     getMovies();
  //   }
  //   else{
  //     console.log('get drama genre not found');
  //   }
  // }
  

  useEffect(()=>{
    getMovies();
  },[]);

  useEffect(()=>{
    getMoviesGenre();
  },[])

  
  return (
    <>
    <div className="container m-auto">
      <label htmlFor="" className="block">Movie search by name:</label>
      <input className="border" type="text" onChange={(e)=>setSearchData(e.target.value)} value={searchData} />
      <h3>Genre</h3>
      <div className="checkbox-group">
        <input type="checkbox" id="drama" checked={dramaCheck} onChange={()=>setDramaCheck(!dramaCheck)} />
        <label htmlFor="drama">Drama</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="crime" checked={crimeCheck} onChange={()=>setCrimeCheck(!crimeCheck)} />
        <label htmlFor="crime">Crime</label>
      </div>
    </div>
      <Movies movieData={movieData}/>
    </>
  )
}

export default Home