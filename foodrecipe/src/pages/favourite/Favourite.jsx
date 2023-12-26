import React, { useContext } from 'react'
import  { GlobalContext } from '../../context'
import RecipeList from '../../components/RecipeList'

const Favourite = () => {
  const {favouriteList} = useContext(GlobalContext)
  return (
    <div className='box-recipe flex flex-wrap'>
      {
        favouriteList && favouriteList.length > 0 ?
        favouriteList.map((item,index)=> <RecipeList key={index} item={item}/>) 
         :<div>Nothing is added in favourite</div>
      }
    </div>
  )
}
export default Favourite
