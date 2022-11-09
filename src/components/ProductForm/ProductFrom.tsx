import React, { useState } from "react";
import axios from "axios";
import { IProduct } from "../../models";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const productData: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 2.9,
    count: 123,
  },
};

interface ProductFromProps {
  onCreate: (product: IProduct) => void;
}

export default function ProductFrom({ onCreate }: ProductFromProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const submitHandler = async (e: React.FormEvent) => {
    setError("");
    e.preventDefault();
    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    onCreate(response.data);
  };
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={handleValueChange}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:bg-blue-400"
      >
        Creat product
      </button>
    </form>
  );
}
