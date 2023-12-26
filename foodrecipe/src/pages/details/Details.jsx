import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();
  const { recipeDetails,favouriteList,setRecipeDetails,handleAddToFavourite } = useContext(GlobalContext);
  console.log(id);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      // console.log(data);
      if (data?.data) {
        setRecipeDetails(data?.data);
      }
    };
    getRecipeDetails();
  }, []);
  console.log(recipeDetails);

  return (
    <div>
      <div className="recipe-collection flex ml-5">
        <div className="ingredients ">
          <img src={recipeDetails?.recipe.image_url} alt="" />
        </div>
        <div className="ingredients ml-10">
          <button onClick={()=> handleAddToFavourite(recipeDetails?.recipe)} className="fav-btn mb-4">
            {
           favouriteList && favouriteList.length > 0 && favouriteList.findIndex(
            (item)=>item.id === recipeDetails?.recipe?.id
           )!== -1 ?'Remove from favourites':"Add to favourites"
          }
          </button>
          
          <p>{recipeDetails?.recipe.title}</p>
          <p>cooking time : {recipeDetails?.recipe.cooking_time}</p>
        </div>
        <div className="ing-container ml-10 ">
           <h2 className="">Ingredients</h2>
        <ul>
          {
            recipeDetails?.recipe?.ingredients.map((ingredient,index)=>
            <li key={index}>
              <span>{ingredient.quantity} {ingredient.unit}</span>
              <span>{ingredient.description}</span>
            </li>
            )
          }
        </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Details;
