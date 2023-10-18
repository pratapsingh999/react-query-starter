import {useQuery} from 'react-query'   // usequery is Hook
import axios from 'axios'

const fetchdata = () =>{
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    }

export const RQSuperHeroesPage = () => {
    // const {isLoading , data} = useQuery('superHeroes',()=>{
    //     return axios.get('https://jsonplaceholder.typicode.com/posts')
    // })
    const {isLoading,data,error} = useQuery('superHeroes',fetchdata)

if(isLoading){
    return <h2>Loading ....</h2>
}

if (error) {
    return    <h2>{error.message}</h2>    // <h2>{"Request failed 404"}</h2>,
}

    return <>
<h2>React Query Super Heroes Page</h2>
<ol>
{data.data.map((hero)=>{
    return (<li>{hero.body}</li>)
})}
</ol>
    </>
  }