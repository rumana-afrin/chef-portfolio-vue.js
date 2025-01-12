<template>

  <!--start Navigation Section -->
  <nav class="primary-nav">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="wow animate__animated animate__bounceInDown col-6 text-center" data-wow-duration="2s">
          <!--use na korleu cholebe */-->
          <span><i class="fa-solid fa-phone"></i> +8801712774812</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>abc@gmail.com</span>

        </div>
      </div>
    </div>
  </nav>

  <nav class="main-nav stop_nav">
    <div class="container-fluid p-0">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <div class="navbar-brand logo">
            <router-link class="text-dark" to="/">
              <img src="@/assets/image/alomgir-hossen.png" alt="">
              <p class="person_name">Alomgir Hossen</p>
            </router-link>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="topnav navbar-nav me-auto mb-2 mb-lg-0 ms-0">
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle nav-menu" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">Recipes</router-link>
                <ul class="dropdown-menu recipes">
                  <li class="page">
                    <router-link class="dropdown-item greenLine" to="#">All Recepies</router-link>
                    <router-link class="nav-link page-linking" to="/recipes"></router-link>
                  </li>

                  <li class="page">
                    <router-link class="dropdown-item greenLine" to="#">Vegetable</router-link>
                    <router-link class="nav-link page-linking" :to="{ name:'vegetable', query:{category: 'Vegetable'}}"></router-link>

                  </li>

                  <li class="page">
                    <router-link class="dropdown-item greenLine" to="#">Non-Veg</router-link>
                    <router-link class="nav-link page-linking bg-info" to="/nonvag"></router-link>

                  </li>
                  <li class="page">
                    <router-link class="dropdown-item greenLine" to="#">Baking</router-link>
                    <router-link class="nav-link page-linking bg-info" to="recipes.html"></router-link>

                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link class="nav-link greenLine nav-menu" aria-current="page" to="#">Video
                  Recipes</router-link>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle nav-menu" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Course
                </router-link>
                <ul class="dropdown-menu menue-item">
                  <div class="row w-100">
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 menue-one">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle nav-menu" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Cuisine
                </router-link>
                <ul class="dropdown-menu menue-item">
                  <div class="row w-100">
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 menue-one">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle nav-menu" to="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Blog
                </router-link>
                <ul class="dropdown-menu menue-item">
                  <div class="row w-100">
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                    <div class="col-12 col-md-6 col-lg-6 col-xl-6 menue-one">
                      <li><router-link class="dropdown-item greenLine" to="#">Chinese cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">French cuisine</router-link></li>

                      <li><router-link class="dropdown-item greenLine" to="#">Spanish Cuisine</router-link></li>
                      <li><router-link class="dropdown-item greenLine" to="#">Italian cuisine</router-link></li>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link greenLine nav-menu" aria-disabled="true">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link greenLine nav-menu" aria-disabled="true">Contact</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/gallary" class="nav-link greenLine nav-menu"
                  aria-disabled="true">Gallery</router-link>
              </li>
              <li class="nav-item">
                <router-link to="#" class="nav-link greenLine nav-menu" aria-disabled="true">Restaurent</router-link>
              </li>

            </ul>
            <ul class="main-right-nav navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5 me-lg-0">
              <li class="nav-item d-flex justify-content-start">
                <!-- <router-link v-if="personal_info.length > 0" to="{{ personal_info[0].linkedin }}" class="nav-link greenLine social-link" aria-disabled="true"><i
                    class="fa-brands fa-facebook"></i></router-link> -->
                <a v-if="personal_info.length > 0" :href="personal_info[0].facebook"
                  class="nav-link greenLine social-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a v-if="personal_info.length > 0" :href="personal_info[0].pinterest"
                  class="nav-link greenLine social-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-pinterest"></i>
                </a>
                <a v-if="personal_info.length > 0" :href="personal_info[0].linkedin"
                  class="nav-link greenLine social-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a v-if="personal_info.length > 0" :href="personal_info[0].youtube"
                  class="nav-link greenLine social-link" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-youtube"></i>
                </a>

                <!-- <router-link to="#" class="nav-link greenLine social-link" aria-disabled="true"><i
                    class="fa-brands fa-pinterest"></i></router-link> -->
                <!-- <router-link to="#" class="nav-link greenLine social-link" aria-disabled="true"><i
                    class="fa-brands fa-linkedin"></i></router-link> -->
                <!-- <router-link to="#" class="nav-link greenLine social-link" aria-disabled="true"><i
                    class="fa-brands fa-youtube"></i></router-link> -->
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  </nav>
  <!--end Navigation Section -->

</template>

<script>
import axios from 'axios';
export default {
  name: 'Header',

  data() {
    return {
      personal_info: [],
    }

  },
  async mounted() {

    const pesonal_info = await axios.get("http://127.0.0.1:8000/api/personal-info");
    this.personal_info = pesonal_info.data;
    // Listening to route changes
    this.$router.afterEach((to, from) => {
      document.querySelector('.collapse')?.classList.remove('show');
    });
  }
}
</script>

<style scoped>

</style>


<!-- "?" holo  optional chaining operator.
The optional chaining operator is used to avoid runtime errors when dealing with objects that may not exist. It ensures that the code will not throw an exception if document.querySelector('.collapse') is null or undefined. 
-->