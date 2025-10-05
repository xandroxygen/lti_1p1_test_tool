import { createCookie } from "@remix-run/node";

export const stateCookie = createCookie("state", {
  maxAge: 3600,
  secure: process.env.NODE_ENV === "production",
  sameSite: "none",
});
