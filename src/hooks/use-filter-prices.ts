import React from "react";

import { useSearchParams } from "next/navigation";


export const useFilterPrices = () => {
    const searchParams = useSearchParams();

    const initialPriceFrom = Number(searchParams.get('priceFrom')) || 20000;
    const initialPriceTo = Number(searchParams.get('priceTo')) || 80000;

    const [prices, setPrices] = React.useState<number[]>([initialPriceFrom, initialPriceTo]);

    const updatePrices = (_: Event, newPrices: number | number[]) => {
        setPrices(newPrices as number[])
    }

    const updateOnePrice = (index: number, value: number) => {
        setPrices((prev) => {
            const newPrices = [...prev];

            newPrices[index] = Math.min(100000, value);

            return newPrices;
        });
    }

    return { prices, updateOnePrice, updatePrices }
}