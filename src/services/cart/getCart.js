import { axiosInstance } from "../../api/axiosInstance";

export const getCart = async (token) => {
    try {
        const res = await axiosInstance.get('carts', { headers: {Authorization: `Bearer ${token}`}});
        return res.data;
    } catch (error) {
        if (error.response) throw error.response.data;
        else throw new error('Something went wrong');
    }
}