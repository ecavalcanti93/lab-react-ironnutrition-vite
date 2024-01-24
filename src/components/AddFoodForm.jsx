import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd";

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { _id: Math.random(), name, image, calories, servings };
    addNewFood(newFood);

    setName("");
    setImage("");
    setCalories(0);
    setServings(0);
  };

  return (
      <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input type="text" name="name" value={name} onChange={handleName} required />

      <label htmlFor="director">Image</label>
      <Input name="image" value={image} type="text" onChange={handleImage} />

      <label htmlFor="calories">Calories</label>
      <Input type="number" name="calories" value={calories} onChange={handleCalories} min={0} max={10} />

      <label htmlFor="servings">Servings</label>
      <Input type="number" name="servings" value={servings} onChange={handleServings} />

      <button className="btncreate" type="submit">Create</button>
      </form>
  );
}

export default AddFoodForm;