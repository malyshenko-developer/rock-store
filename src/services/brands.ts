import { Brand } from "@prisma/client"

import { axiosInstance } from "./instance"
import { API_ROUTES } from "./constants";


export const getAll = async () => {
    const { data } = await axiosInstance.get<Brand[]>(API_ROUTES.BRANDS);

    return data;
}