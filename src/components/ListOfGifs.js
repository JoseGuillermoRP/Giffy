import React, {useEffect,useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'


export default function ListOfGifs ({params}){
 
    const {keyword} = params
    const [loading, setLoading] = useState(
        {loading: false, results: [] })
 
   
    console.log(params)
   
  
 
    const [gifs, setGifs] = useState([])
               
     useEffect(function (){
        setGifs(
            actualGifs => ({loading: true, results: actualGifs.results})
            )

        getGifs({keyword})
        .then(gifs => {
            setGifs({loading: false, results:gifs})
            setGifs(gifs)
            setLoading(false)
        })
                  
    }, [keyword]) 

    if (gifs.loading) return <i> Cargando:)</i>  

     return <div>
              {
             gifs.results.map(({id, title, url}) => 
                <Gif 
                key={id}
                id={id}
                title={title}
                url={url}
                />
           )
         }
     
         
     </div>
       

     
}