<script>
import axios from 'axios';

export default {
  name: 'SingleView',
  props: ['id'], // Get the ID from the route
  data() {
    return {
      recipe: {},
      error: null,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/recipe/${this.id}`);
      this.recipe = response.data.data; 
      console.log(this.recipe);
      
    } catch (error) {
      this.error = 'Failed to fetch recipe details. Please try again later.';
      console.error(error);
    }
  },
};
</script>


<template>
    <!--start main content-->
        <div class="row p-0 mt-5 me-0 ms-0">
            <div class="col-md-5 p-0">
                <img v-if="recipe.image" :src="recipe.image" class="card-img-top" alt="...">
            </div>
            <div class="col-md-7 ps-4">
                <h1>{{recipe.name}}</h1>
                <div class="recipe-rate d-flex align-items-center mt-3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="row mt-4">
                    <ul class="nav nav-pills mb-3 justify-content-around border-bottom border-2" id="pills-tab"
                        role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active bg-white text-dark fs-5 fw-semibold"
                                id="pills-Ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-Ingredients"
                                type="button" role="tab" aria-controls="pills-Ingredients"
                                aria-selected="true">Ingredients</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link bg-white text-dark fs-5 fw-semibold" id="pills-Instructions-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-Instructions" type="button" role="tab"
                                aria-controls="pills-Instructions" aria-selected="false">Instructions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link bg-white text-dark fs-5 fw-semibold" id="pills-Nutritious-tab"
                                data-bs-toggle="pill" data-bs-target="#pills-Nutritious" type="button" role="tab"
                                aria-controls="pills-Nutritious" aria-selected="false">Nutritious</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-Ingredients" role="tabpanel"
                            aria-labelledby="pills-Ingredients-tab" tabindex="0">
                            <p v-html="recipe.description"></p>
                        </div>
                        <div class="tab-pane fade" id="pills-Instructions" role="tabpanel"
                            aria-labelledby="pills-Instructions-tab" tabindex="0">
                            <p v-html="recipe.instructions"></p>
                        </div>
                        <div class="tab-pane fade" id="pills-Nutritious" role="tabpanel"
                            aria-labelledby="pills-Nutritious-tab" tabindex="0">
                            <p v-html="recipe.instructions"></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    <!--end main content-->
</template>

<style scoped></style>