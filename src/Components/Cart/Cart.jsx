import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Cart() {
  let { getLoggedUserCart, removeItem, updateProductCount } =
    useContext(cartContext);
  const [cartDetails, setcartDetails] = useState(null);
  async function getCart() {
    let response = await getLoggedUserCart();
    // console.log(response);
    if (response.data.status === "success") {
      setcartDetails(response.data.data);
    }
  }
  async function deleteItem(productId) {
    let response = await removeItem(productId);
    setcartDetails(response.data.data);
    toast("Product has been removed successfully");
    // console.log(response);
  }
  async function updateProductQuantity(productId, count) {
    let response = await updateProductCount(productId, count);
    setcartDetails(response.data.data);
    toast("product updated successfully");
    // console.log(response);
  }
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      {cartDetails !== null ? (
        <div className="bg-light p-4 m-4 underline">
          <h3>Shop Cart :</h3>
          <h6>Total Cart Price : {cartDetails.totalCartPrice}</h6>
          {cartDetails.products.map((product) => (
            <div
              key={product.product._id}
              className="row align-items-center border-bottom py-4 my-4"
            >
              <div className="col-md-1">
                <img
                  src={product.product.imageCover}
                  className="w-100"
                  alt=""
                />
              </div>
              <div className="col-md-11 d-flex justify-content-between">
                <div className="margin">
                  <h6>{product.product.title}</h6>
                  <h6 className="text-success">Price : {product.price}</h6>
                  <button
                    onClick={() => deleteItem(product.product._id)}
                    className="btn m-0 p-0"
                  >
                    {" "}
                    <i className="fa-regular fa-trash-can text-success"></i>
                    Remove Item
                  </button>
                </div>
                <div>
                  <button
                    onClick={() =>
                      updateProductQuantity(
                        product.product._id,
                        product.count + 1
                      )
                    }
                    className="btn border-main btn-sm"
                  >
                    +
                  </button>
                  <span className="mx-2">{product.count}</span>
                  <button
                    onClick={() =>
                      updateProductQuantity(
                        product.product._id,
                        product.count - 1
                      )
                    }
                    className="btn border-main btn-sm"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="btn btn-success">
            <Link className="text-white" to={"/checkout"}>
              Checkout
            </Link>
          </button>
        </div>
      ) : null}
    </>
  );
}
