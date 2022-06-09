import APIHandler from "./index";

export const getUser = (userId: string) => APIHandler.get(`/user/${userId}`);
