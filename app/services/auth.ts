import { UserType } from '../common/types';
import api from './api';

export const LOCAL_STORAGE_USER_KEY = 'user';

export async function register(email: string, password: string, rememberMe: boolean, isDriver: boolean = false): Promise<UserType> {
    try {
        const response = await api.post('/auth/register', {
            email,
            password,
            rememberMe,
            isDriver
        });
    
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message || "Register Failed");
    }
}

export async function login(email: string, password: string, rememberMe: boolean): Promise<UserType> {
    try {
        const response = await api.post('/auth/login', {
            email,
            password,
            rememberMe
        });
    
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message || "Login Failed");
    }
}

export async function logout(): Promise<void> {
    try {
        await api.post('/auth/logout');
    } catch (error: any) {
        throw new Error(error.response.data.message || "Logout Failed");
    }
}

export async function getUser(): Promise<UserType> {
    // First check local storage
    const storedUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
    
    if (storedUser) {
        return JSON.parse(storedUser);
    }

    // If not in local storage, fetch from API
    try {
        const response = await api.get('/auth/user');
        saveUserToLocalStorage(response.data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response.data.message || "Get User Failed");
    }
}

export function saveUserToLocalStorage(user: UserType): void {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(user));
}
