function FoodlistItem (props){


    //Child component
        return (
            <div class="container">
                {
                    props.data.haveTried && (<h1>It is delicious!</h1>)
                }
            
              <h3>
                {props.data.title} | {props.data.rating <=0 ? `No rating`:`${props.data.rating}/5`}
              </h3>
              <img src={props.data.image} className="foodImage" alt={props.data.title}  />
              <p>{props.data.description}</p>
            </div>
          )
    
}

export default FoodlistItem;