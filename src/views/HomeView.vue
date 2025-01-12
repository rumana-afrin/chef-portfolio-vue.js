<script>
import axios from 'axios';


export default {
  name: 'HomeView',

  data() {
    return {
      experiences: [],
      skills: [],
      recipe_category: [],
      home_setting: {},
      personal_info: [],
      recipes: {},
      error: null,
    };
  },

  computed: {
    // Dynamically generate the inline style for the header background image
    headerStyle() {
      return {
        'background-image': `url(${this.home_setting.home_banner_image})`,
        'background-position': 'center',
        'background-size': '100% 100%',
        'height': '100vh',
      };
    },
  },
  async mounted() {
    try {
      const experienceResponse = await axios.get("http://127.0.0.1:8000/api/experiences");
      //const experienceResponse = await axios.get("http://192.168.0.106:8000/api/experiences");

      this.experiences = experienceResponse.data;

      const skillResponse = await axios.get("http://127.0.0.1:8000/api/skill");
      this.skills = skillResponse.data;

      const homeSettingResponse = await axios.get("http://127.0.0.1:8000/api/home-setting");
      this.home_setting = homeSettingResponse.data;

      const pesonal_info = await axios.get("http://127.0.0.1:8000/api/personal-info");
      this.personal_info = pesonal_info.data;

      const home_recipe = await axios.get("http://127.0.0.1:8000/api/recipe");
      this.recipes = home_recipe.data.data;



    } catch (error) {
      this.error = 'Failed to fetch data. Please try again later.';
    }

    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        // const recipeCategory = await axios.get("http://192.168.0.106:8000/api/recipe-category");
        const recipeCategory = await axios.get("http://127.0.0.1:8000/api/recipe-category");
        this.recipe_category = recipeCategory.data;

        // Initialize Owl Carousel after data is fetched
        this.$nextTick(() => {
          $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            center: true,
            autoplay: true,
            dots: false,
            responsive: {
              0: { items: 1 }, // 1 item for very small devices
              600: { items: 2 }, // 2 items for slightly larger devices
              1000: { items: 4 }, // 4 items for desktops
            },
          });
        });
      } catch (error) {
        console.error("Error fetching recipe categories:", error);
      }
    },
  },


};
</script>


<template>

  <!--start header Section -->
  <header class="header" :style="headerStyle">
    <div class="container-fluid banner">
      <div class="row w-100 d-flex justify-content-center gap-5">
        <div v-aos="{ name: 'fade-up' }" class="banner-about col-12 col-md-12 col-lg-5">
          <h1 class="banner-text">Hello, <br> I am Alomgir Hossain</h1>
          <h5 class="">{{ home_setting.home_subtitle }}</h5>
          <button class="btn default-btn mt-4"><router-link class="" to="#">Download CV</router-link></button>
        </div>
        <div v-aos="{ name: 'fade-up' }"
          class="animate__animated animate__fadeIn banner-experiance col-12 col-md-12 col-lg-5">
          <div class="ms-3">
            <h4>My Experience</h4>
            <ul class="banner-skill ps-0">
              <li v-for="experience in experiences" :key="experiences.id">
                <i class="fa-solid fa-circle"></i>{{ experience.experience }}
              </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </header>
  <!--end header Section -->

  <main>
    <!-- wow animate__animated animate__flip -->
    <section class="carousel">

      <div class="container mt-5">

        <div class="carousel-head mt-5">


          <i class="animate__animated animate__backInLeft fa-solid fa-carrot"></i>
          <img src="@/assets/image/deviding-line-shap.png" alt="">
          <i class="animate__animated animate__backInRight fa-solid fa-face-smile"></i>

        </div>
        <div class="mt-5 mb-5 d-flex justify-content-center">
          <h3 class="w-25 ps-5">TOP CATEGORY</h3>
        </div>
        <div class="owl-carousel owl-theme mt-5">
          <div class="item" v-for="category in recipe_category" :key="category.id">
            <img v-if="category.category_image" :src="category.category_image" alt="Category Image">
            <p v-else>Loading...</p>
            <div class="item-body">

              <p>{{ category.category_name }}</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <!-- end carousel -->

    <section class="menu-card">
      <div class="container">
        <div class="row">
          <div class="col-12 menu-heading">
            <div class="section-heading text-center">
              <h1>Special</h1>
            </div>
            <router-link class="section_button" to="/recipes"><span></span>View All Recipes</router-link>
          </div>

        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
          <div class="col" v-for="recipe in recipes" :key="recipe.id">
            <router-link to="single-recipe.html">
              <div class="card h-100">

                <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="...">
                <div class="rec-info">
                  <h5 class="p-0 m-0">{{ recipe.name }}</h5>
                  <p><cite class="owner">by alomgir hossen</cite></p>
                </div>

              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- end card section -->

    <section class="skill">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <div v-aos="{ name: 'flip-right', duration: 2000 }" class="skill-image">

              <img v-if="home_setting.home_skill_image" :src="home_setting.home_skill_image" alt="Skill Image">
              <p v-else>Loading...</p>

            </div>
          </div>

          <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <div v-aos="{ name: 'fade-down-left', duration: 2000 }" class="skill-content">
              <h3 class="skill-title">MY FEATURED SKILLS</h3>
              <ul class="chef-skills">
                <li v-for="skill in skills" :key="skill.id"><i class="fa-solid fa-circle"></i>{{ skill.skill }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- end skill section -->

    <section class="contact-us">
      <div class="container">
        <div class="contact-title text-center">
          <h2 class="">CONTACT ME</h2>
          <h5 class="mt-4">Let's create culinary magic together! Contact me for professional kitchen
            assistance.</h5>
        </div>
        <div class="row mt-5">

          <div class="col-12 col-md-7 col-lg-7">
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-solid fa-phone-flip contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1" v-if="personal_info.length > 0"> <!-- Check if data exists -->
                  <p class="fw-medium m-0">Phone</p>
                  <p class="contact-item">+{{ personal_info[0].phone }}</p> <!-- Access the first item -->
                </div>
                <div v-else>
                  <p>Loading...</p> <!-- Show loading or fallback message -->
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-solid fa-envelope contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1" v-if="personal_info.length > 0"> <!-- Check if data exists -->
                  <p class="fw-medium m-0">Email</p>
                  <p class="contact-item">+{{ personal_info[0].email }}</p> <!-- Access the first item -->
                </div>
                <div v-else>
                  <p>Loading...</p> <!-- Show loading or fallback message -->
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-linkedin contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1" v-if="personal_info.length > 0"> <!-- Check if data exists -->
                  <p class="fw-medium m-0">Linkedin</p>
                  <p class="contact-item">+{{ personal_info[0].linkedin }}</p> <!-- Access the first item -->
                </div>
                <div v-else>
                  <p>Loading...</p> <!-- Show loading or fallback message -->
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-facebook contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1" v-if="personal_info.length > 0"> <!-- Check if data exists -->
                  <p class="fw-medium m-0">Facebook</p>
                  <p class="contact-item">+{{ personal_info[0].facebook }}</p> <!-- Access the first item -->
                </div>
                <div v-else>
                  <p>Loading...</p> <!-- Show loading or fallback message -->
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-pinterest contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1" v-if="personal_info.length > 0"> <!-- Check if data exists -->
                  <p class="fw-medium m-0">Pinterest</p>
                  <p class="contact-item">+{{ personal_info[0].pinterest }}</p> <!-- Access the first item -->
                </div>
                <div v-else>
                  <p>Loading...</p> <!-- Show loading or fallback message -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-5 col-lg-5">
            <form class="contact-form" action="">


              <div class="row">
                <div class="col-12 col-md-12 col-lg-6">
                  <div class="form-area">
                    <label class="input-label" for="">Name</label>
                    <input class="input-area" type="text">
                  </div>

                </div>
                <div class="col-12 col-md-12 col-lg-6 mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                  <div class="form-area">
                    <label class="input-label" for="">Email</label>
                    <input class="input-area" type="text">
                  </div>

                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-md-12 col-lg-6">
                  <div class="form-area">
                    <label class="input-label" for="">Phone</label>
                    <input class="input-area" type="text">
                  </div>

                </div>
                <div class="col-12 col-md-12 col-lg-6 mt-4 mt-sm-4 mt-md-4 mt-lg-0">
                  <div class="form-area">
                    <label class="input-label" for="">Subject</label>
                    <input class="input-area" type="text">
                  </div>

                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12 col-md-12 col-lg-12">
                  <div class="form-area">
                    <label class="input-label" for="">Message</label>
                    <textarea class="input-area" name="" id="" cols="30" rows="5"></textarea>
                  </div>

                </div>

              </div>
              <button type="submit" class="btn default-btn mt-4 px-5 py-3"><router-link class="" to="#">Send
                  Message</router-link></button>


            </form>
          </div>

        </div>
      </div>
    </section>

  </main>

</template>

<style scoped>
/* Make sure all images inside the carousel have the same height */
.owl-carousel .item img {
  width: 100%;
  height: 200px;
  /* Set a fixed height for all images */
  /* object-fit: cover;  */
}

.owl-carousel .item {
  text-align: center;
  padding: 10px;
  height: 200px;
  /* Set the same height for each item */
}

.carousel {
  width: 100%;
  overflow: hidden;
}

.owl-carousel {
  touch-action: pan-y;
}

.card img {
  height: 70%;
}

.rec-info {
  height: 30%;
  padding: 10px 10px;
}

.owner {
  font-size: 12px;
  color: #888;
}
.item {
  height: 100%;
}
.item img{
  height: 70% !important;
}
.item .item-body{
  height: 30% !important;

}
</style>
