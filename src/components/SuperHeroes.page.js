import { useState, useEffect } from "react"
import axios from 'axios'


export const SuperHeroesPage = () => {
const [isLoading, setIsLoading] = useState(true)
const [data, setData] = useState([])
const [error , setError] = useState('')

useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(res => {setData(res.data)
    setIsLoading(false)})
    .catch(err => {setError(err.message) //(Request failed 404 )
        setIsLoading(false)})
},[])

if (isLoading) {
  return <h2>Loading...</h2>
}
if (error) {
    return <h2>{error}</h2>
}
// else{
    return (
        <>
          <h2>Super Heroes Page</h2>
          <ol>
          {data.map((name,ind) => {
            return <div>
            <li key={ind}>{name.title}</li>
            </div>
          })}
          </ol>
        </>
      )
}


// }


