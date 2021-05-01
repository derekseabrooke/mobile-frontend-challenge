<template>
  <div>
    <h1>All Sites</h1>
    <div v-for="site in sites" :key="site.id" class="Sites">
      <div class="button">
        <router-link :to="{ name: 'details', params: { id: site.id } }">
          <p>{{ site.title }}</p>
          <p>
            {{ site.contacts.main.firstName }}&nbsp;
            {{ site.contacts.main.lastName }}
          </p>
          <p>{{ site.contacts.main.address.country }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Sites",
  data() {
    return {
      sites: [],
    };
  },
  methods: {
    getSites() {
      axios
        .get("https://tracktik-challenge.staffr.com/sites")
        .then((response) => (this.sites = response.data));
    },
  },
  beforeMount() {
    this.getSites();
  },
};
</script>
<style scoped>
.button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
  width: max-content;
}
</style>