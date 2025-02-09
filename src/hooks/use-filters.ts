import { useFilterBrands, useFilterPrices } from "./";

export const useFilters = () => {
    const filterBrands = useFilterBrands();
    const filterPrices = useFilterPrices();

    return { ...filterBrands, ...filterPrices }
}