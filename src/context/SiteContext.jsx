import { createContext, useContext } from "react";
import { initialSite } from "../services/api.js";

export const SiteCtx = createContext(initialSite);
export const useSite = () => useContext(SiteCtx);
