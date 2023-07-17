import React, { useEffect, useState } from 'react'
import ArticleList from '../components/ArticleList'
import UseFetch from '../hooks/UseFetch'
import { useNavigate } from 'react-router-dom'

function Articles() {
  const [api, setApi] = useState("http://localhost:3000/articles")
  const { data, isPending, error} = UseFetch(api)
  const navigate =useNavigate()
  useEffect(()=>{
    if(error){
         setTimeout(()=>{
           navigate("/articles")
         },2000)
    }
    },[error])
  return (
    <div>
      <h1 className='title'>Articles</h1>
      <hr /> <br />
      <ArticleList data = {data} /> 
    </div>
  )
}
export default Articles