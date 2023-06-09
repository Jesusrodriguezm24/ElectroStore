import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux"
import { addProductToCart } from "../../services/cart/addProductToCart";

export const useCreatePurchase = () => {
    const token = useSelector((store) => store.auth.token);

    const queryClient = useQueryClient();

    const mutation = useMutation( { mutationFn: ({ quantity, productId }) => addProductToCart({ token, quantity, productId }),
                                  onSuccess: async () => {
                                    await queryClient.invalidateQueries({queryKey: ["cart"]});
                                    await queryClient.invalidateQueries({queryKey: ["purchases"]});
                                  }
    } );

    return mutation;
}