import { createContext, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({ children }){
  const [search,setSearch] = useState('')
  const [loading,setLoading] = useState(false)
  const [recipeList, setRecipeList] = useState([])
  const [favouriteList, setFavouriteList] = useState([])
  const [recipeDetails, setRecipeDetails] = useState(null)
   
  const handleSubmit = async(event)=>{
    event.preventDefault()
    setLoading(true)
  try {
    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
    );
    const data = await response.json()
    if(data?.data?.recipes){
      setRecipeList(data?.data?.recipes)
      setLoading(false)
      setSearch('')
    }
  } catch (error) {
    console.log(error);
    setLoading(false)
    setSearch('')
  }
  }

  const handleAddToFavourite = (getCurrentItem) =>{
    // console.log(getCurrentItem);
    let cpyFavouriteList = [...favouriteList]
    const index = cpyFavouriteList.findIndex(item => item.id===getCurrentItem.id)
    if (index === -1){
      cpyFavouriteList.push(getCurrentItem)
    }else{
      cpyFavouriteList.splice(index)
    }
    setFavouriteList(cpyFavouriteList)
  }
  // console.log(loading,recipeList,favouriteList);
  console.log("favlist",favouriteList);

  return(
    <GlobalContext.Provider value={{search,
     loading,recipeList,favouriteList,handleAddToFavourite, setFavouriteList, setSearch,handleSubmit,recipeDetails, setRecipeDetails}}>{children}</GlobalContext.Provider>
  )
}