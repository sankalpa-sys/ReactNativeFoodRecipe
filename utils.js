import {addresses, users} from "./data";

export const getARandomRating = () => {
    return Math.floor(Math.random() * 5) + 1;
}

export const getARandomUser = () => {
    const randomNumber = Math.floor(Math.random() * users.length);
    return users[randomNumber];
}

export const getARandomAddress= () => {
    const randomNumber = Math.floor(Math.random() * addresses.length);
    return addresses[randomNumber];
}