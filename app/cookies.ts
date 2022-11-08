import { createCookie } from "remix";

export const stateCookie = createCookie("state", { maxAge: 3600 });
