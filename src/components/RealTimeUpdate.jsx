import { useEffect, useState } from "react";

const RealTimeUpdates = ({ symbol }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://ws.finnhub.io?token=cn7fkbpr01qgjtj4j5rgcn7fkbpr01qgjtj4j5s0"
    );

    socket.onopen = () => {
      console.log("WebSocket connected");
      socket.send(JSON.stringify({ type: "subscribe", symbol: symbol }));
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "trade") {
        setPrice(data.data[0].p);
      }
    };

    return () => {
      socket.close();
    };
  }, [symbol]);

  return <p className="text-gray-600">Price: {price}</p>;
};

export default RealTimeUpdates;
