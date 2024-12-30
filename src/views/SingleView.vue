<template>
      <!--start main content-->
      <section class="recipe-details mt-5">
        <div class="row">
            <div class="col-md-5 p-0">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
            </div>
            <div class="col-md-7 ps-4">
                <h1>Recipe Name</h1>
                <div class="recipe-rate d-flex align-items-center mt-3">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="row mt-4">
                    <ul class="nav nav-pills mb-3 justify-content-around border-bottom border-2" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active bg-white text-dark fs-5 fw-semibold" id="pills-Ingredients-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-Ingredients" type="button" role="tab"
                                aria-controls="pills-Ingredients" aria-selected="true">Ingredients</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link bg-white text-dark fs-5 fw-semibold" id="pills-Instructions-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-Instructions" type="button" role="tab"
                                aria-controls="pills-Instructions" aria-selected="false">Instructions</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link bg-white text-dark fs-5 fw-semibold" id="pills-Nutritious-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-Nutritious" type="button" role="tab"
                                aria-controls="pills-Nutritious" aria-selected="false">Nutritious</button>
                        </li>

                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-Ingredients" role="tabpanel"
                            aria-labelledby="pills-Ingredients-tab" tabindex="0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div class="tab-pane fade" id="pills-Instructions" role="tabpanel"
                            aria-labelledby="pills-Instructions-tab" tabindex="0">
                            Lorem ipsum dolor sit amet consectetur.
                        </div>
                        <div class="tab-pane fade" id="pills-Nutritious" role="tabpanel"
                            aria-labelledby="pills-Nutritious-tab" tabindex="0">
                            Lorem ipsum dolor sit.
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--end main content-->
</template>

<script>
    export default {
        name: 'SingleView'
    }
</script>

<style lang="scss" scoped>

</style>