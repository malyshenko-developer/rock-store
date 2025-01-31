import { useFilterBrands } from "./use-filter-brands"
import { useFilterPrices } from "./use-filter-prices";

export const useFilters = () => {
    const filterBrands = useFilterBrands();
    const filterPrices = useFilterPrices();

    return { ...filterBrands, ...filterPrices }
}