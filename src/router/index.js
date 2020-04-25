import VueRouter from "vue-router";
import routes from "./routes";

console.log(process.env.NODE_ENV);

const router = new VueRouter({
  mode: "history",
  base: process.env.NODE_ENV === "production" ? "/imfundfirus-frontend" : "/",
  routes
});

export default router;
