Vue.component("page", {
  template: "#page"
});
Vue.component("timeline", {
  template: "#timeline"
});
new Vue({
  el: "#app",
  data: {
    fixed: false,
    items: "",
    title: "HighScheduler"
  }
});
