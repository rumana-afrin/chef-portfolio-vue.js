<template>
    <Header />
    <!-- -------------------start content section------------ -->
    <RouterView />
    <!-- -------------------end content section------------ -->
    <Footer />
</template>

<script>
import Header from '../components/common/Header.vue';
import Footer from '../components/common/Footer.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Header,
        Footer,
    }
}
</script>

<style scoped></style>