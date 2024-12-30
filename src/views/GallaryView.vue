<template>
  <section>
    <div class="container">
      <div class="hero">
        <div class="content">
          <p class="cursor typewriter-animation">In the <span class="food">Heat of the Kitchen</span> – <br> Stories Told Through <span class="food">Food</span>
            and <span class="food">Photos</span>!</p>
          <h2 class="mt-5">Welcome to My Culinary Gallery!</h2>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center card-image">
      <div class="card-section d-flex justify-content-center">

        <!-- Each card should have its own column -->
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="img-container">
            <div class="img-body">
            <img class="img-fluid" src="@/assets/image/home-image/skill-1.png" alt="">
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="img-container">
            <div class="img-body">
            <img class="img-fluid" src="@/assets/image/home-image/skill-5.jpg" alt="">
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="img-container">
            <div class="img-body">
            <img class="img-fluid" src="@/assets/image/banner-6.jpg" alt="">
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  </section>




  <section class="main">
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
  </section>
</template>

<script>
export default {
  name: 'GallaryView',
}
</script>

<style scoped>
.container {
  position: relative;
  max-width: 100%;
  height: 100vh;
  background-image: url('@/assets/image/gallary,banner.jpeg');
  background-size: 100% 100%;
  background-position: center;
  padding: 0px;
}

.hero {
  width: 100%;
  height: 100%;
  background-color: rgba(44, 43, 43, 0.753);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.content {
  display: column;
  justify-content: center;
  align-items: center;
}

.content p {
  color: #fff;
  font-size: 60px;
  font-weight: 700;
  line-height: 74px;
}

.content h2 {
  color: #fff;
}

.food {
  color: rgb(65, 161, 1);
}
.card-image{
  width: 100%;
  margin: 0px;
  position: absolute;
  top: 110%;
  left: 0%;
}
.card-section{
  width: 80%;
}
.img-container{
  padding: 10px;
}
.img-body{
  width: 100%;
  height: 500px;
  animation: mymove 4s infinite linear alternate;
}
.img-body img{
  width: 100%;
  height: 280px;
}
@keyframes mymove {
  to {transform: rotateY(180deg);}
}

@media screen and (max-width: 768px) {
  .content p {
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
}}
@media screen and (min-width: 1024px) {
  .card-image{
  width: 100%;
  margin: 0px;
  position: absolute;
  top: 101%;
  left: 0%;
}

}

.cursor{
    position: relative;
    width: 24em;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    /* font-size: 20px; */
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
}
/* Animation */
.typewriter-animation {
  animation: 
    typewriter 5s steps(50) 1s 1 normal both, 
    blinkingCursor 500ms steps(50) infinite normal;
}
@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blinkingCursor{
  from { border-right-color: rgba(255,255,255,.75); }
  to { border-right-color: transparent; }
}
</style>