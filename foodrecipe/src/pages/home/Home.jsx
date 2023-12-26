import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import RecipeList from '../../components/RecipeList'

const Home = () => {
  const {loading,recipeList} = useContext(GlobalContext)
  if(loading) return <div>Loading.....</div>
  return (
    <div className='box-recipe flex flex-wrap'>
      {
        recipeList && recipeList.length > 0 ?
        recipeList.map((item,index)=> <RecipeList key={index} item={item}/>) 
         :<div>No data found </div>
      }
    </div>
  )
}

export default Home
