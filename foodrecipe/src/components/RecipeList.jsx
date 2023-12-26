import React from "react";
import { Link } from "react-router-dom";

const RecipeList = ({ item }) => {
  return (
    <div className="ml-16 recipe-container">
      <div className="container p-5">
        <div className="recipe-img mb-3 ">
          <img src={item.image_url} alt="" />
        </div>
        <div className="details ml-1 flex justify-between mr-2">
          <p className="text-teal-600 font-semibold">{item.publisher}</p>
          <p className="text-black font-bold text-xl ">{item.title}</p>
        </div>
        <div className="btn-details mt-6 flex justify-center text-center">
          <Link to={`/details/${item?.id}`} className="btn bg-black text-white px-6 rounded-lg py-4">RECIPE DETAILS</Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
