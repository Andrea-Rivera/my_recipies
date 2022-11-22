import data from "../../data/food.json";
import FoodlistItem from "../Food/Food"

//Parent component
function FoodList() {
  return data.food.map((recipe) => {
    return(<FoodlistItem data={recipe}/>)
  });
}

export default FoodList;
