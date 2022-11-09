import Product from "./components/Product";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import ProductForm from "./components/ProductForm";
import { useProducts } from "./hooks/products";
import { ModalContext } from "./context/ModalContext";
import { useContext } from "react";

import "./App.css";
import { IProduct } from "./models";

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const {
    modal,
    open: openModal,
    close: closeModal,
  } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    closeModal();
    addProduct(product);
  };
  return (
    <div className="mx-auto container max-w-2xl pt-5">
      <button
        type="button"
        className="py-2 px-4 border bg-yellow-400 hover:bg-blue-400"
        onClick={() => openModal()}
      >
        Add product
      </button>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title={"Product form"} onClose={() => closeModal()}>
          <ProductForm onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}

export default App;
