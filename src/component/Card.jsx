const Card = (props) => {
    console.log(props);
    return (
      
   <div className="h-64 w-64 shadow-black m-4 "  style={{ backgroundColor: props.colorCode }}>
          <h1 className=" text-center font-bold text-2xl">{props.colorName}</h1>
        <h1 className=" text-center font-bold text-2xl">{props.colorCode}</h1>
      </div>
     
    );
  };
    
  
  export default Card;