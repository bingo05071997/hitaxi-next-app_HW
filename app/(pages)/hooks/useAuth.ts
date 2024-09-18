
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/app/services/auth";

const useAuth = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Check if user is logged in
        const checkAuth = async () => {
            try {
                const user = await getUser();
                setIsAuthenticated(true);
            } catch (error: any) {
                setIsAuthenticated(false);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    }, []);

    if (loading) {
        return { isAuthenticated: null, loading };
    }

    return { isAuthenticated, loading };
};

export default useAuth;
