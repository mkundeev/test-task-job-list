import { useState } from "react";
import { IProduct } from "../../models";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const btnBgClassName = showDetails ? "bg-yellow-400" : "bg-blue-400";
  const btnClasses = ["py-2 px-4 border w-36", btnBgClassName];

  return (
    <div className="border py-2 px-2 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        type="button"
        className={btnClasses.join(" ")}
        onClick={handleClick}
      >
        {showDetails ? "Hide details" : "Show deatails"}
      </button>
      {showDetails && (
        <div>
          <p>{product.description}</p>
          <p className="font-bold">Rate:{product.rating?.rate}</p>
        </div>
      )}
    </div>
  );
}
