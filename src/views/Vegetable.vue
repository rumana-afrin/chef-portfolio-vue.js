<script>
import axios from 'axios';
export default {
    data() {
        return {
            category: '',
            recipes: [],
            title: '',
            banner: '',
            error: null,
        }
    },
    async mounted() {
        this.category = this.$route.query.category;
        // Fetch recipes for the category
        await this.fetchRecipes();
        await this.fetchTitleAndBanner();

    },
    watch: {
        // Watch for route changes and update the category and recipes
        '$route.query.category': async function (newCategory) {
            this.category = newCategory;
            await this.fetchRecipes();
        },
    },
    methods: {
        async fetchRecipes() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/recipes/${this.category}`);
                this.recipes = response.data.data;

            } catch (error) {
                console.error('Something Went Wrong:', error);
            }
        },
        async fetchTitleAndBanner() {
            try{
                const response = await axios.get("http://127.0.0.1:8000/api/vegetable-page");
                this.title = response.data.vegetable_page_titile;
                this.banner = response.data.vegetable_recipe_banner;                
            }catch (error) {
                console.error('Something Went Wrong:', error);
            }
        },

    },
}
</script>

<template>

    <!--start main content-->
    <section class="vag_message mt-5">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-sm-3 col-md-8 col-lg-8 text-center">

                    <h1>{{ this.title }}</h1>

                </div>
            </div>
        </div>
    </section>

    <!--start recipe section -->
    <section class="vag_recipes mt-5">

        <div class="container-fluid">
            <div class="row">
                <div class="vag_banner p-0">

                    <img v-if="this.banner" class="img-fluid" :src="this.banner" alt="">
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row row-cols-1 row-cols-md-4 row-cols-lg-3 g-5 mt-5 m-0 p-0">
                <div class="col veg-card mb-5 " v-for="recipe in recipes" :key="recipe.index">
                    <router-link to="single-recipe.html">
                        <div class="veg-card-img h-100">
                            <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="...">
                            <div class="card-body mt-3">
                                <h5 class="card-title text-dark">{{ recipe.name }}</h5>
                                <p><cite class="auther">by alomgir hossen</cite></p>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="col veg-card mb-5" v-for="recipe in recipes" :key="recipe.index">
                    <router-link to="single-recipe.html">
                        <div class="veg-card-img h-100">
                            <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="...">
                            <div class="card-body mt-3">
                                <h5 class="card-title text-dark">{{ recipe.name }}</h5>
                                <p><cite class="auther">by alomgir hossen</cite></p>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <!--end recipe section -->

</template>


<style scoped>
.card-img-top {
    height: 80%;
    border-radius: 10px;

}

.card-body {
    height: 20%;
    overflow: hidden;
    text-align: left;
}

.auther {
    font-size: 12px;
    color: #888;
}
</style>