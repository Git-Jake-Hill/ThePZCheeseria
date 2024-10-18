import React, { useEffect, useState } from "react";
import "./App.css";
import ICheese from "./Interfaces/ICheese";
import Card from "./Components/Card";
import Calculator from "./Components/Calculator";

const App = () => {
    const [cheeses, setCheeses] = useState<ICheese[]>([]);
    const [productID, setProductID] = useState(0);
    const [currentCheese, setCurrentCheese] = useState<ICheese | undefined>(undefined);

    // Fetch cheese data from the API
    useEffect(() => {
        fetch("http://localhost:5000/api/cheese")
            .then((response) => response.json())
            .then((data) => setCheeses(data))
            .catch((error) => console.error("Error fetching cheese data:", error));
    }, []);

    // Update selected cheese card
    useEffect(() => {
        setCurrentCheese(cheeses.find((item: ICheese) => item.id === productID));
    }, [cheeses, productID]);

    return (
        <div className="App">
            <h1>The PZ Cheeseria</h1>
            <div className="container">
                {cheeses.map((cheese) => (
                    <Card
                        cheese={cheese}
                        productID={productID}
                        setProductID={setProductID}
                        key={cheese.id}
                    />
                ))}
            </div>
            <h1>Price Calculator</h1>
            <Calculator currentCheese={currentCheese} />
        </div>
    );
};

export default App;
