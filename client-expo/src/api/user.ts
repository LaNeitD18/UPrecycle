import APIHandler from "./index";

export const getUser = (userId: string) => APIHandler.get(`/user/${userId}`);
export const addUser = (user: any) => APIHandler.post(`/user`, user);
