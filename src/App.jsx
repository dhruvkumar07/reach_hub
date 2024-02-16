import { useState } from "react";
import RealTimeUpdates from "./components/RealTimeUpdate";
import SearchBar from "./components/Searchbar";
import StockList from "./components/StockList";
import axios from "axios";
import SearchResults from "./components/SearchResult";

function App() {
  const [stocks, setStocks] = useState([]);

  const searchStocks = async (query) => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/search?q=${query}&token=cn7fkbpr01qgjtj4j5rgcn7fkbpr01qgjtj4j5s0`
      );
      console.log(response);
      setStocks(response.data.result);
    } catch (error) {
      console.error("Error searching stocks:", error);
    }
  };

  return (
    <div className="bg-slate-900 flex items-center justify-center flex-col text-white w-screen h-auto min-h-screen">
      <h1 className="font-bold text-3xl mb-6">
        stock application by Dhruv Kumar
      </h1>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Stock Tracker</h1>
        <SearchBar onSearch={searchStocks} />
        <StockList stocks={stocks} />
      </div>
      <RealTimeUpdates symbol={stocks[0].symbol} />
    </div>
  );
}

export default App;
