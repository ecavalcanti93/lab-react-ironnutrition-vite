import { Card, Row, Col, Divider, Input, Button } from "antd";

function FoodBox(props) {
    const { name, image, calories, servings,id } = props.food;
  
    return (
      <div>
         <Col className="tittle">
          <Card
          title={name}
          style={{ width: 230, height: 320, margin: 10 }}
          className="card"
          >
          
          <img src={image} height={60} alt={name} />
          <p>Calories: {calories}</p>
          <p>Servings: {servings}</p>
          <p>
            <b>Total Calories: {servings * calories}kcal</b>
          </p>

          <Button className="deletebtn" onClick={() => props.deleteFood(id)}>Delete</Button>
          </Card>
        </Col>
        </div>
    );
  }
  
  export default FoodBox;