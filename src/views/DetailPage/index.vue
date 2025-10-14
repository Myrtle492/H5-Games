<template>
    <div class="detail-page">
        <div class="detail">
            <div class="content">
                <img class="icon" :src="obj.thumb" :alt="obj.title" />
                <div class="info">
                    <div class="name">{{ obj.title }}</div>
                    <div class="category-s" v-if="obj.category">
                        <span class="category">{{ obj.category }}</span>
                    </div>
                    <el-rate v-model="obj.star" disabled />
                </div>
            </div>
            <div class="desc">{{ obj.description }}</div>
            <div class="play" @click="toPlay">Play Now</div>
        </div>
        <!-- <div style="width:300px;height:250px;margin:10px auto;">
            <ins class="adsbygoogle" 
                style="display:inline-block;width:100%;height:100%;" 
                data-ad-client="ca-pub-2383602858776570"
            > 
            </ins> -->
            <div class="gptslot" data-adunitid="2" style="min-width: 300px; min-height: 250px; margin:10px auto">
        </div>
        <SimilarGames @childEvent="handleChildEvent"></SimilarGames>
    </div>
    
    <!-- <div style="width:320px;height:50px;position:fixed;bottom:0;left:50%;transform:translate(-50%);">
        <ins class="adsbygoogle" 
            style="display:inline-block;width:100%;height:100%;" 
            data-ad-client="ca-pub-2383602858776570"
        > 
        </ins> -->
         <div class="gptslot" data-adunitid="3" style="min-width: 300px; min-height: 250px; margin:10px auto">
    </div>
    
    <Teleport to="body">
        <div class="fixed left-0 top-0 z-20 flex h-full w-full flex-col bg-white" v-if="show">
            <div class="flex-1">
                <iframe class="h-full w-full" :src="obj.url" frameborder="0"></iframe>
            </div>
            <div class="h-[50px]"></div>

            <div
                class="absolute left-0 top-10 flex items-center rounded-r-xl bg-white py-3 pr-4 shadow-2xl"
                @click="show = false"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="ml-1 h-4 w-4"
                >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <img class="ml-2 h-6 w-6 rounded" :src="obj.thumb" alt="" />
            </div>
        </div>
    </Teleport>
</template>

<script setup>

    import { ref, onMounted } from 'vue';
    import { ElRate } from 'element-plus';
    import SimilarGames from './SimilarGames.vue';
    import localGamesData from '@/data/games.js';
    
    import { useRoute } from "vue-router";

    const route = useRoute();
    
    let show = ref(false);
    let obj = ref(localGamesData.find((item) => item.id == route.query.id));

    const toPlay = () => {
        show.value = true;
    }

    const handleChildEvent = (id) => {
        obj.value = localGamesData.find((item) => item.id == id)
    }
    
    onMounted(() => {
        // (adsbygoogle = window.adsbygoogle || []).push({});
    })

</script>

<style lang="scss">
    .el-rate__item {
        margin-right: -5px;
    }
</style>

<style lang="scss" scoped>
    .detail-page {
        padding: 15px 0;
        .detail {
            padding: 0 15px;
            margin-bottom: 20px;
        }
        .content {
            display: flex;
            margin-top: 10px;
        }
        .icon {
            width: 110px;
            height: 110px;
            background: #eee;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 15px;
        }
        .info {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .name {
                color: #25b3e5;
                font-size: 21px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .category-s {
                margin-bottom: 5px;
            }
            .category {
                color: #fff;
                font-size: 13px;
                background: rgba(37, 179, 229, .4);
                padding: 4px 8px;
                border-radius: 6px;
            }
        }
        .desc {
            max-height: 300px;
            overflow-y: auto;
            font-size: 14px;
            color: #000;
            line-height: 25px;
            margin-top: 25px;
        }
        .play {
            width: 100%;
            height: 50px;
            color: #fff;
            font-size: 16px;
            background: #25b3e5;
            border-radius: 30px;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>