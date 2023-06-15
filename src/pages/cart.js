import Navbar from "@/components/Navbar";
import { removeToCart } from "@/redux/cartSlice";
import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleDelete = (x) => {
    dispatch(removeToCart(x));
    toast.success("Product Deleted...!");
  };
  const totalPrice = cart?.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4 mt-20">
          <div className="flex flex-col justify-center ">
            <div className="w-full max-w-7xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-gray-800">Manage Carts</div>
              </header>
              <div className="overflow-x-auto p-3">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th />
                      <th className="p-2">
                        <div className="font-semibold text-left">
                          Product Name
                        </div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Image</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Category</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Rating</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Price</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {cart.map((x) => (
                      <tr key={x.id}>
                        <td className="p-2"></td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {x.title}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left">
                            <img src={x.image} alt="" width={60} height={55} />
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left font-medium text-green-500">
                            {x.category}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left font-medium text-green-500">
                            {x.rating.rate}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="text-left font-medium text-green-500">
                            $ {x.price}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex justify-center">
                            <button onClick={() => handleDelete(x.id)}>
                              <svg
                                className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                <div>Total</div>
                <div className="text-blue-600">$ {totalPrice}</div>
              </div>
              <div className="flex justify-end">
                <input
                  type="hidden"
                  className="border border-black bg-gray-50"
                />
              </div>
            </div>
          </div>
        </section>
        <div className="h-screen">
          {cart.length === 0 && (
            <h2 className="text-center my-5">No Cart Item found...</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
