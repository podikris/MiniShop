import { useState, useEffect } from "react";
import { get } from "../../persistence/Products";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const ProductsList = await get();
      setData(ProductsList);
    };
    fetchData();
  }, []);

  return (
    <div className="card-list container">
      {data.map((product: any, i) => (
        <div key={i} className="card">
          <div>{product?.name}</div>
          <div>Price: {product?.price}</div>
          <div>Ingredients: {product?.ingredients.join(", ")}</div>
          <p>{product?.description}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
