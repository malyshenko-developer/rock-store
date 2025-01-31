import React from "react";

import { useSearchParams } from "next/navigation";

import { useSet } from "react-use";

import { Brand } from "@prisma/client";

import { API } from "@/services/api-client";

interface ReturnProps {
    brands: Brand[];
    loadingBrands: boolean;
    selectedBrands: Set<number>;
    toggleBrand: (id: number) => void;
}


export const useFilterBrands = (): ReturnProps => {
    const searchParams = useSearchParams();
    const selectedBrandsFromUrl = searchParams.get('brands')?.split(',').map(Number) || [];

    const [brands, setBrands] = React.useState<Brand[]>([]);
    const [loadingBrands, setLoadingBrands] = React.useState(true);

    const [selectedBrands, { toggle }] = useSet(new Set<number>(selectedBrandsFromUrl));

    React.useEffect(() => {
        const fetchBrands = async () => {
            try {
                setLoadingBrands(true);
                const brands = await API.brands.getAll();

                setBrands(brands);
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingBrands(false);
            }
        }

        fetchBrands();
    }, []);

    return { brands, loadingBrands, selectedBrands, toggleBrand: toggle };
}