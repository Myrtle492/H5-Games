<template>
    <div class="header">
        <div><span @click="toHome">OnlinGames</span></div>
        <div>Games</div>
    </div>
</template>

<script setup>

    import { useRouter } from "vue-router";
    
    const router = useRouter();

    const toHome = () => {
        router.push("/");
    }

</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 50px;
        color: #fff;
        font-size: 18px;
        background: #646464b2;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
