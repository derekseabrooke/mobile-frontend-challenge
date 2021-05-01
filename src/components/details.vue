<template>
  <div>
    <div v-for="site in mysites" :key="site.id" class="Sites">
      <div>
        <h1>Site Details for {{ site.title }}</h1>
        <h2>
          {{ site.contacts.main.firstName }}&nbsp;
          {{ site.contacts.main.lastName }}
        </h2>
        <h3>{{ site.contacts.main.jobTitle }}</h3>
        <address>
          <p>Phone: {{ site.contacts.main.phoneNumber }}</p>
          <p>Email: {{ site.contacts.main.email }}</p>
          <h4>Mailing</h4>
          <p>{{ site.contacts.main.address.zipCode }}</p>
          <p>{{ site.contacts.main.address.street }}</p>
          <p>{{ site.contacts.main.address.city }}</p>
          <p>{{ site.contacts.main.address.state }}</p>
          <p>{{ site.contacts.main.address.country }}</p>
        </address>
      </div>
    </div>
    <router-link class="button" :to="{ name: 'AllSites' }"
      >&lt; All Sites</router-link
    >
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
  props: {
    id: String,
  },
  computed: {
    mysites() {
      return this.sites.filter((item) => {
        return item.id === this.id;
      });
    },
  },
};
</script>
<style scoped>
.button {
  padding: 10px;
  background-color: #1aa832;
  color: white;
  border: 1px solid #ccc;
}
</style>