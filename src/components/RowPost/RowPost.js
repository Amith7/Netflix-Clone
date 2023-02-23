import React,{useEffect,useState} from 'react'
import{imageUrl,API_KEY} from '../../constants/constants'
import YouTube  from 'react-youtube'
import axios from '../../axios'
import './RowPost.css'
function RowPost(props) {

  const [movies,setMovies]=useState([])
  const [urlId,seturlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then(response=>{
     console.log(response.data)
      setMovies(response.data.results)
    })
  },[])

  const opts={
    height:"390",
    width:'100%',
    playerVars:{
      autoplay: 1,
    },
  };

const handleMovie =(id)=>{
  console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{

  if(response.data.results.length!==0){
    seturlId(response.data.results[0])
  }else{
    console.log('Array Empty')
  }
})
}


  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
      {
        movies.map((obj)=>
        <img 
        className={props.isSmall ?'smallposter' :'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`}
        onClick={()=>handleMovie(obj.id)}
        />
        )}
      </div>
      { urlId && <YouTube  opts={opts} videoId={urlId.key}/>}
    </div>
  )
}

export default RowPost
