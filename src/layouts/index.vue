<template>
    <Header></Header>
    <router-view v-slot="{ Component }">
        <component :is="Component" />
    </router-view>
    <Footer v-show="route.path != '/detailpage'"></Footer>
</template>

<script setup>

    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    
    import { useRoute } from "vue-router";
    
    const route = useRoute();

</script>

<style lang="scss" scoped>

</style>