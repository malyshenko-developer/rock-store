import React from "react";

import { useRouter } from "next/navigation";

import qs from 'qs';

interface Params {
    prices: number[];
    selectedBrands: Set<number>;
}


export const useSyncFiltersWithUrl = ({ prices, selectedBrands }: Params) => {
    const router = useRouter();

    React.useEffect(() => {
        const filters = {
            priceFrom: prices[0],
            priceTo: prices[1],
            brands: Array.from(selectedBrands)
        }

        const queryString = qs.stringify(filters, {
            arrayFormat: 'comma'
        })

        router.push(`?${queryString}`, { scroll: false });
    }, [prices, selectedBrands, router]);
}