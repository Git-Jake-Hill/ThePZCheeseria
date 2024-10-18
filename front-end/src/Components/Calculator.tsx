import { useState } from "react";
import ICheese from "../Interfaces/ICheese";

export default function Calculator({ currentCheese }: { currentCheese: ICheese | undefined }) {
    const [weight, setWeight] = useState<number>(0.1);

    const handleChange = (e: any) => {
        let newWeight = e.target.value;
        // Set bounds for min/max weight
        if (newWeight > 10) {
            newWeight = 10;
        } else if (newWeight < 0.1) {
            newWeight = 0.01;
        }

        setWeight(newWeight);
    };

    const calculateCost = () => {
        // No cheese selected
        if (currentCheese === undefined) return 0.0;

        let pricePerKilo = currentCheese.pricePerKilo;
        return (weight * pricePerKilo).toFixed(2);
    };

    return (
        <div className="container">
            <div className="calculator">
                <h2>
                    {currentCheese === undefined
                        ? "No Cheese Selected"
                        : currentCheese.type.toUpperCase()}
                </h2>
                <label htmlFor="numberInput">Enter weight: </label>
                <input
                    type="number"
                    id="numberInput"
                    value={weight}
                    min="0.1"
                    max="10"
                    step="0.1"
                    onChange={handleChange}
                />
                <p>Price per kg: ${currentCheese ? currentCheese.pricePerKilo : 0.0}</p>
                <h2>Total: ${calculateCost()}</h2>
            </div>
        </div>
    );
}
