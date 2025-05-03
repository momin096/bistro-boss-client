// api , axios , tanstack query

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { refetch, isLoading, data: cart = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`);
            return res.data;
        }
    })
    return [cart, refetch, isLoading];
};

export default useCart;