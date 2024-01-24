import "./App.css";
import { useState } from "react";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import Search from "./components/Search";
import Message from "./components/Message";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = foodId => {
    const filteredFoods = foods.filter(food => 
        foodId !== food.id)
        setFoods (filteredFoods)
}

const addNewFood = (food) => {
  const updatedFoods = [food, ...foods]
  setFoods(updatedFoods)
}

const searchFood = (char) => {
  let filteredFoods;

  if (char === "") {
    filteredFoods = foodsJson;
  } else {
    filteredFoods = foodsJson.filter((eachFood) => {
      return eachFood.name.toLowerCase().includes(char.toLowerCase());
    })
  }
  setFoods(filteredFoods);
}

return (
  <div className="App">

    <Divider><h1>Food List</h1></Divider>
    <Search setFoods={searchFood}/>

    <Row style={{ width: "100%", justifyContent: "center" }}>
    <AddFoodForm addNewFood={addNewFood} className="formfood"/>
    {foods.map((aFood, index) => (
      <FoodBox 
      key={index} 
      food={aFood}
      deleteFood={deleteFood} />
    ))}
    {!foods.length && <Message />}
    </Row>
  </div>
);
}

export default App;