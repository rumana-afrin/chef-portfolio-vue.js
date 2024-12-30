<script>
export default{
  name: 'HomeView',

}

</script>

<template>

  <!--start header Section -->
  <header class="header">
    <div class="container-fluid banner">
      <div class="row w-100 d-flex justify-content-center gap-5">
        <div v-aos="{ name: 'fade-up' }" class="banner-about col-12 col-md-12 col-lg-5">
          <h1 class="banner-text">Hello, <br> I am Alomgir Hossain</h1>
          <h5 class="">I Transform Ingredients into Art</h5>
          <button class="btn default-btn mt-4"><router-link class="" to="#">Download CV</router-link></button>
        </div>
        <div v-aos="{ name: 'fade-up' }"
          class="animate__animated animate__fadeIn banner-experiance col-12 col-md-12 col-lg-5">
          <div class="ms-3">
            <h4>My Experience</h4>
            <ul class="banner-skill ps-0">
              <li>Head Chef at Hotel Sonargon</li>
              <li>Head Chef at Hotel Renasa</li>
              <li>Head Chef at Hotel Renasa</li>
              <li>Head Chef at Hotel Renasa</li>
              <li>Head Chef at Hotel Renasa</li>
            </ul>

          </div>
          <!-- <p>I am passionate about culinary arts and dedicated to perfection. I masterfully elevate classic recipes, offering a modern twist that redefines gourmet dining. I bring a unique touch to every plate, blending creativity with exceptional cooking skills.</p> -->
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
        <div v-owl-carousel class="owl-carousel owl-theme mt-5">
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>chicken cury</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img2.png" alt="">
            <p>Image Name 2</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img3.png" alt="">
            <p>Image Name 3</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 4</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 5</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 6</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 7</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 8</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 9</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 10</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 11</p>
          </div>
          <div class="item">
            <img src="@/assets/image/card-img1.png" alt="">
            <p>Image Name 12</p>
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
            <router-link class="section_button" to="#"><span></span>View All Recipes</router-link>
          </div>

        </div>
        <div class="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
          <div class="col">
            <div class="card h-100">
              <router-link to="single-recipe.html">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <router-link to="single-recipe.html">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <router-link to="single-recipe.html">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <router-link to="single-recipe.html">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </router-link>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <router-link to="single-recipe.html">
                <img src="@/assets/image/card-img3.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </router-link>
            </div>
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
              <img src="@/assets/image/home-image/skill-4.jpeg" alt="">
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <div v-aos="{ name: 'fade-down-left', duration: 2000 }" class="skill-content">
              <h3 class="skill-title">MY FEATURED SKILLS</h3>
              <ul class="chef-skills">
                <li><i class="fa-solid fa-circle"></i>Latin American Cuisine</li>
                <li><i class="fa-solid fa-circle"></i>Menu Development</li>
                <li><i class="fa-solid fa-circle"></i>Team Management</li>
                <li><i class="fa-solid fa-circle"></i>Culinary Techniques</li>
                <li><i class="fa-solid fa-circle"></i>Food Cost Management</li>
                <li><i class="fa-solid fa-circle"></i>Inventory Control Food Safety</li>
                <li><i class="fa-solid fa-circle"></i>Menu Planning</li>
                <li><i class="fa-solid fa-circle"></i>Customer Service Leadership</li>


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

          <div class="col-12 col-md-6 col-lg-6">
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-solid fa-phone-flip contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1">
                  <p class="fw-medium m-0">Phone</p>
                  <p class="contact-item">+881712774812</p>
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-solid fa-envelope contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1">
                  <p class="fw-medium m-0">Email</p>
                  <p class="contact-item">abc@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-linkedin contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1">
                  <p class="fw-medium m-0">Linkedin</p>
                  <p class="contact-item">www.linkedin.com</p>
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-facebook contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1">
                  <p class="fw-medium m-0">Facebook</p>
                  <p class="contact-item">www.facebook.com</p>
                </div>
              </div>
            </div>
            <div class="row"> <!-- Use g-3 to set the gap between columns -->
              <div class="col-2 d-flex justify-content-center align-items-center">
                <div class="p-2"><i class="fa-brands fa-pinterest contact-icon"></i></div>
              </div>
              <div class="col-10 ps-0">
                <div class="py-1">
                  <p class="fw-medium m-0">Pinterest</p>
                  <p class="contact-item">www.pinterest.com</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
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
.owl-carousel .item img {
  width: 100%; /* Make images responsive */
  height: auto; /* Maintain aspect ratio */
}

.owl-carousel .item {
  text-align: center; /* Center align content */
  padding: 10px; /* Optional padding */
}

.carousel {
  width: 100%; /* Ensure carousel spans the entire container */
  overflow: hidden; /* Prevent content overflow */
}
.owl-carousel {
  touch-action: pan-y; /* Enable touch scrolling vertically */
}

</style>
