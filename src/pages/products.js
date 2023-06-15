import React from "react";
import { productsData } from "../components/data";
import { addtoCart } from "@/redux/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import CartNavbar from "@/components/CartNavbar";

const Products = () => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(addtoCart(product));
    toast.success("Product added to cart...!");
  };
  return (
    <>
      <CartNavbar />
      <section className="text-gray-600 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {productsData.map((product) => (
              <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                <a className="block relative h-48 rounded overflow-hidden   bg-white p-5">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product?.category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title.substring(0, 35)}
                  </h2>
                  <div className="flex justify-between">
                    <p className="mt-1">$ {product.price}</p>
                    <button
                      onClick={() => handleAdd(product)}
                      className="flex ml-auto text-white bg-[#14B8A6] border-0 py-1 px-3 focus:outline-none hover:bg-[#07d4bc] rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
