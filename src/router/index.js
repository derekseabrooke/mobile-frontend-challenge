import Vue from "vue";
import Router from "vue-router";
import AllSites from "@/components/all-sites";
import SiteDetails from "@/components/details";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: AllSites,
      name: "AllSites",
      props(route) {
        const matched = route.matched;
        if (matched.length > 1) {
          return matched[1].meta;
        }
        return {};
      }
    },
    {
      path: "/:id?",
      props: (route) => ({
        id: route.params.id
      }),
      name: "details",
      component: SiteDetails
    }
  ]
});
