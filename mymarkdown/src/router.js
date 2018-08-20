import Vue from "vue";
import VueRouter from "vue-router";
import Top from "./views/Top";
import Terms from "./views/Terms";

Vue.use(VueRouter); //Vueで利用すつための登録
// ページに表示される情報
const routes = [
  {
    // path: "/user/:user_id", ユーザーごとのページを表示したい場合の記述方法
    path: "/",
    name: "top",
    component: Top
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms
  }
];

export default new VueRouter ({
  routes: routes
});
