<template>
  
        <!-- start slider-container -->

        <!-- data-bs-ride="carousel" -->
        <header class="slider">
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel"
                data-bs-interval="1000">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src="@/assets/image/banner-food-1.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-4">Crispy chicken</h1>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src="@/assets/image/banner-food-3.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-4">Cookie Box</h1>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src="@/assets/image/food-banner-4.jpg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h1 class="mb-4">Crispy chicken</h1>
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
                                    <li class="nav-item mt-2 me-2" role="presentation">
                                        <button class="pill-item nav-link active" id="pills-home-tab"
                                            data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected="true">Baking Recipes</button>

                                    </li>
                                    <li class="nav-item mt-2 me-2" role="presentation">
                                        <button class="pill-item nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">Veg</button>

                                    </li>
                                    <li class="nav-item mt-2" role="presentation">
                                        <button class="pill-item nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-contact" type="button" role="tab"
                                            aria-controls="pills-contact" aria-selected="false">Non Veg</button>

                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <!-- start card section -->
                <div class="tab-content mt-5" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">

                        <div class="row backing-banner justify-content-center">
                            <div class="col-11 tab-banner">
                                <img src="@/assets/image/home-image/michael-wurster-banner.jpg" alt="">
                            </div>

                        </div>

                        <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4 mt-3">
                            <div class="col">
                                <div class="card h-100 card-image">
                                    <router-link to="">
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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
                                        <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
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

<script>

export default {
    name: 'Recipe',

}
</script>

<style scoped></style>