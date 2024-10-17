import { useEffect, useState } from "react";
import ICheese from "../Interfaces/ICheese";

export default function Card({
    cheese,
    productID,
    setProductID,
}: {
    cheese: ICheese;
    productID: null | number;
    setProductID: (number: number) => void;
}) {
    const [border, setBorder] = useState(false);
    const cardSelected = "cheese-card card-selected";
    const cardDefault = "cheese-card";

    useEffect(() => {
        console.log(`Card: ${cheese.type} ID: ${cheese.id} PID: ${productID}`);
        setBorder(cheese.id === productID);
    }, [productID]);

    return (
        <button
            className={border ? cardSelected : cardDefault}
            onClick={() => setProductID(cheese.id)}
        >
            <img src={cheese.image} alt={cheese.type} className="cheese-image" />
            <h2>{cheese.type.toUpperCase()}</h2>
            <p>
                <strong>Price per Kilo:</strong> ${cheese.pricePerKilo.toFixed(2)}
            </p>
            <p>
                <strong>Colour:</strong> {cheese.colour}
            </p>
        </button>
    );
}
