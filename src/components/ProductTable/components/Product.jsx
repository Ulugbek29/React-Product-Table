import React from "react";
import Loader from "../../common/Loader/Loader";

export default function Product({ products }) {
  return (
    <>
        <table className="w-full h-full  border-[1px] border-slate-900  border-collapse rounded-lg">
          <thead>
            <tr className="flex border-collapse first:bg-slate-800 text-white">
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Id
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Thumbnail
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Title
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Brand
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Price
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Rating
              </th>
              <th className="flex-1 border-collapse border-[1px] border-slate-900 p-2">
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr
                  key={product.id}
                  className="flex border-collapse even:bg-slate-200"
                >
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.id}
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    <img src={product.images[0]} className="w-full h-[150px]" />
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.title}
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.brand}
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.price}$
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.rating}
                  </td>
                  <td className="flex-1 flex justify-center items-center text-xl font-semibold border-collapse border-[1px] border-slate-900 p-2">
                    {product.stock}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </>
  );
}
