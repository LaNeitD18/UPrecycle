import APIHandler from "./index";

// eslint-disable-next-line no-undef
export const getTrashClassification = (url: string) => APIHandler.post(`/trash-classification`, { url });
