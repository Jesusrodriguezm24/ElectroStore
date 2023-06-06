import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/Products/getAllProducts";

export const useProducts = () => {
    const query = useQuery({ queryKey: ['products'], queryFn:getAllProducts});
    
    return query;
}

