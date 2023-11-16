import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
export const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
export const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();