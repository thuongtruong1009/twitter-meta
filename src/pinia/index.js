import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('storeId', {
    state: () => {
        return {
            counter: 1,
            lastName: 'Michael',
            firstName: 'Michael',
        };
    },
    getters: {
        fullName: state => `${state.firstName} ${state.lastName}`,
    },
    actions: {
        increment() {
            this.counter++;
        },
    },
});