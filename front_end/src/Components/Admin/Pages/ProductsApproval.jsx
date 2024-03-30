import React from "react";
import { authorsTableData } from "../../data/authors-table-data";
function Approval() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {authorsTableData.map((author) => (
        <div
          key={author.id}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center space-x-2 p-6">
            <div className="flex items-center space-x-3">
              <img
                className="h-20 w-20 flex-shrink-0 bg-gray-300"
                src={author.image}
                alt="Author"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-500">
                <span className="font-medium">Supplier:</span> {author.supplier}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Name:</span> {author.productName}
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium">Price:</span> {author.price}
              </p>
            </div>
          </div>
          <div className="p-6 flex justify-between w-full">
            <button className="px-4 py-2 bg-red-500 text-white rounded-md font-medium w-1/2 mr-2">
              Reject
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md font-medium w-1/2 ml-2">
              Accept
            </button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Approval;
