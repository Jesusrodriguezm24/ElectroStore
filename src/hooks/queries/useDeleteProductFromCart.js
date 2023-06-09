import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux"

export const useDeleteProductFromCart = () => {
    const token = useSelector(store => store.auth.token);

    const queryClient = useQueryClient();

    const mutation = useMutation()

    ///////////////////////////////
    return mutation;
}