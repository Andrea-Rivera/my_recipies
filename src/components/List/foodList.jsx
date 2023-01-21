import data from "../../data/food.json";
import FoodlistItem from "../Food/foodListItem"

//Parent component
function FoodList() {
  return data.food.map((recipe) => {
    return(<FoodlistItem foodData={recipe}/>)
  });
}

export default FoodList;
