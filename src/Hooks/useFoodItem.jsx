import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useFoodItem = () => {
    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: foods = [] } = useQuery({
        queryKey: ['foods', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/foods`)
            return res.data;

        },
    })

    return [foods, refetch]

}
export default useFoodItem;