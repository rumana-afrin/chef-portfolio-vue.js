<script>
import axios from 'axios';
export default {
    name: 'Recipe',
    data() {
        return {
            categories: ['Baking', 'Veg', 'Non-Veg'],
            activeCategory: 'Baking',
            recipes: [],
            carousels: [],
            bannerImage:{},
            error: null,
        };
    },

    methods: {
        async fetchRecipes(category) {
            this.activeCategory = category;

            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${category}`);
                this.recipes = response.data.data || [];
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    this.error = 'Failed to fetch data. Please try again later.';
                } else {
                    console.error("An error occurred while fetching recipes:", error);
                }
            }
        },

        async fetchCarousels() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/carousel");
                this.carousels = response.data;
            } catch (error) {
                this.error = 'Something went wrong, Please try again later.';
            }
        },
        async banner() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/all-recipe-page");
                this.bannerImage = response.data;                
            } catch (error) {
                this.error = 'Something went wrong, Please try again later.';
            }
        }
    },

    async mounted() {
        await this.fetchRecipes(this.activeCategory);
        await this.fetchCarousels();
        await this.banner();
    },
};
</script>


<template>

    <!-- start slider-container -->

    <!-- data-bs-ride="carousel" -->
    <header class="slider">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"
            data-bs-interval="1000">
            <div class="carousel-indicators">
                <button v-for="(carousel, index) in carousels" :key="'indicator-' + index"
                    :data-bs-target="'#carouselExampleFade'" :data-bs-slide-to="index" :class="{ active: index === 0 }"
                    :aria-current="index === 0 ? 'true' : null" :aria-label="'Slide ' + (index + 1)">
                </button>
            </div>
            <div class="carousel-inner">
                <div v-for="(carousel, index) in carousels" :key="'carousel-' + index"
                    :class="['carousel-item', { active: index === 0 }]" data-bs-interval="1000">
                    <img v-if="carousel.image" :src="carousel.image" class="carousel-image d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h1 class="mb-4">{{ carousel.image_name }}</h1>
                    </div>
                </div>

            </div>
        </div>
    </header>
    <!-- end slider-container -->

    <section class="recipe-card">
        <div class="container">
            <div class="row justify-content-center">
                <div class="recipe-heading">
                    <div class="text-center">
                        <h2>Recipes</h2>
                        <div class="recipe d-flex justify-content-center">
                            <ul class="nav nav-pills mb-3 d-flex justify-content-center w-100" id="pills-tab"
                                role="tablist">
                                <li class="nav-item mt-2 me-2" v-for="category in categories" :key="category">
                                    <button class="pill-item nav-link" :class="{ active: activeCategory === category }"
                                        @click="fetchRecipes(category)">
                                        {{ category }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <!-- start card section -->
            <div class="tab-content mt-5" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
                    tabindex="0">

                    <div class="row justify-content-center">
                        <div class="col-11 tab-banner">
                            <img v-if="bannerImage.all_recipe_banner" :src="bannerImage.all_recipe_banner" alt="">
                        </div>

                    </div>

                    <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                        <div class="col" v-for="recipe in recipes" :key="recipe.id">
                            <div class="card h-100 card-image">
                                <router-link :to="{ name: 'single-view', params: { id: recipe.id } }">
                                    <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>{{ recipe.name }}</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>
                                        </div>
                                    </div>
                                </router-link>
                            </div>

                        </div>

                    </div>

                </div>

                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                    tabindex="0">

                    <div class="row backing-banner justify-content-center">
                        <div class="col-11 tab-banner">
                            <img src="@/assets/image/home-image/michael-wurster-banner.jpg" alt="">
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="">
                                    <img src="@/assets/image/card-img1.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>

                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="">
                                    <img src="@/assets/image/card-img1.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="">
                                    <img src="@/assets/image/card-img1.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="">
                                    <img src="@/assets/image/card-img1.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="">
                                    <img src="@/assets/image/card-img1.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                    tabindex="0">

                    <div class="row backing-banner justify-content-center">
                        <div class="col-11 tab-banner">
                            <img src="@/assets/image/banner-food-1.jpg" alt="">
                        </div>
                    </div>

                    <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="single-recipe.html">
                                    <img src="@/assets/image/card-img2.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>

                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="single-recipe.html">
                                    <img src="@/assets/image/card-img2.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="single-recipe.html">
                                    <img src="@/assets/image/card-img2.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="single-recipe.html">
                                    <img src="@/assets/image/card-img2.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 card-image">
                                <router-link to="single-recipe.html">
                                    <img src="@/assets/image/card-img2.png" class="card-img-top" alt="...">
                                    <div class="hover-content">
                                        <div class="recipe-info">
                                            <h5>Fish Curry</h5>
                                            <button class="btn primary-btn fw-bold"><router-link class="" to="#">See
                                                    More</router-link></button>

                                        </div>
                                    </div>

                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.carousel-image {
    width: 100vw;
    height: 80vh;
}
.tab-banner img{
    width: 100vw;
    height: 30vw;
}
</style>