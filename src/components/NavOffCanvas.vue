<template>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvas"
    aria-labelledby="offcanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">GregsList!</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body row">
      <ul class="nav-links">
        <li class="nav-link">
          <!-- NOTE the name of the page here HAS to match the name in the router.js for this page!!!! -->
          <!-- <router-link :to="{ name: 'CarsPage' }"> Cars </router-link> -->
          <h4 class="selectable" @click="navigate('CarsPage')">Cars</h4>
        </li>
        <!-- TODO this is your job for the afternoon challenge -->
        <li class="nav-link">
          <!-- <router-link :to="{ name: 'HousesPage' }"> Houses </router-link> -->
          <h4 class="selectable" @click="navigate('HousesPage')">Houses</h4>
        </li>
       <!-- <li class="nav-link">
          <router-link :to="{ name: 'JobsPage' }"> Jobs </router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router";
import { Offcanvas } from "bootstrap";
export default {
  setup() {
    const router = useRouter();
    return {
      navigate(page) {
        // NOTE programtically closes nav offcanvas
        Offcanvas.getOrCreateInstance(document.getElementById("nav")).toggle();
        router.push({ name: page });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
