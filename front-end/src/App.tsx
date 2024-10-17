import React, { useEffect, useState } from "react";
import "./App.css";
import ICheese from "./Interfaces/ICheese";
import Card from "./Components/Card";

const App = () => {
    const [cheeses, setCheeses] = useState<ICheese[]>([]);
    const [productID, setProductID] = useState(0);
    const [currentCheese, setCurrentCheese] = useState<ICheese | undefined>(undefined);
    const [weight, setWeight] = useState<number>(0.1);

    // Fetch cheese data from the API
    useEffect(() => {
        fetch("http://localhost:5000/api/cheese")
            .then((response) => response.json())
            .then((data) => setCheeses(data))
            .catch((error) => console.error("Error fetching cheese data:", error));
    }, []);

    useEffect(() => {
        setCurrentCheese(cheeses.find((item: ICheese) => item.id === productID));
    }, [cheeses, productID]);

    const handleChange = (e: any) => {
        let newWeight = e.target.value;

        if (newWeight > 10) {
            newWeight = 10;
        } else if (newWeight < 0.1) {
            newWeight = 0.01;
        }

        setWeight(newWeight);
    };

    const calculateCost = () => {
        if (currentCheese === undefined) return 0.0;

        let pricePerKilo = currentCheese.pricePerKilo;
        return (weight * pricePerKilo).toFixed(2);
    };

    return (
        <div className="App">
            <div className="container">
                <h1>PZ Cheeseria</h1>
            </div>
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
            <div className="container">
                <h1>Calculator</h1>
            </div>
            <div>
                <p>{currentCheese === undefined ? "No Cheese Selected" : currentCheese.type}</p>
                <label htmlFor="numberInput">Enter weight (0.01 to 10kg): </label>
                <input
                    type="number"
                    id="numberInput"
                    value={weight}
                    min="0.1"
                    max="10"
                    step="0.1"
                    onChange={handleChange}
                />
                <p>Price per kilogram: ${currentCheese ? currentCheese.pricePerKilo : 0.0}</p>
                <p>Total Cost: ${calculateCost()}</p>
            </div>
        </div>
    );
};

export default App;
