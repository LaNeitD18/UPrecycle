import axios from "axios";
import { APIConfigs } from "../constants";

const APIHandler = axios.create({ baseURL: APIConfigs.BASE_URL });

export default APIHandler;
