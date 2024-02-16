import React from "react";
import RealTimeUpdates from "./RealTimeUpdate";

const StockList = ({ stocks }) => {
  const addToWatchlist = (stock) => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    watchlist.push(stock);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  };

  return (
    <ul className="bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark w-full rounded-md h-96 overflow-y-scroll">
      {stocks.map((stock) => (
        <li key={stock.symbol} className="py-4">
          <h3 className="text-xl font-semibold">{stock.symbol}</h3>
          <p className="text-white">{stock.name}</p>
          <p className="text-white">{stock.description}</p>
          <button
            onClick={() => addToWatchlist(stock)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Add to Watchlist
          </button>
        </li>
      ))}
    </ul>
  );
};

export default StockList;
