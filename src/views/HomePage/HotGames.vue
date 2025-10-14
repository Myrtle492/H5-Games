<template>
    <div class="hot-games">
        <div class="title">HOT GAMES</div>
        <el-carousel trigger="click" indicator-position="none" arrow="always">
            <el-carousel-item
                v-for="item in GamesList.filter((ele, index) => 9 <= index && index < 13)"
                :key="item.id"
                :style="{ backgroundImage: `url(${item.thumb})` }"
            >
                <div class="entrance">
                    <div class="name">{{ item.title }}</div>
                    <div class="btn" @click="toDetail(item.id)">PLAY NOW</div>
                </div>
            </el-carousel-item>
        </el-carousel>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3"
                v-for="item in GamesList.filter((ele, index) => 13 <= index && index < 16)"
                :key="item.id"
            >
                <div class="box" @click="toDetail(item.id)">
                    <img class="img" :src="item.thumb" :alt="item.title" />
                    <div class="name">{{ item.title }}</div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

    import { ElCarousel, ElCarouselItem, ElRow, ElCol } from 'element-plus';
    import { useRoute, useRouter } from "vue-router";
    import localGamesData from '@/data/games.js';
    
    const router = useRouter();
    
    const GamesList = localGamesData;
    
    const toDetail = (id) => {
      router.push("/detailpage?id=" + id);
    };

</script>

<style lang="scss" scoped>
    .hot-games {
        width: 100%;
        overflow: hidden;
        .title {
            font-size: 21px;
            color: #25b3e5;
            line-height: 36px;
            font-weight: bold;
            padding: 10px;
        }
        .el-carousel {
            height: 240px;
            margin: 0 15px 15px;
            overflow: hidden;
        }
        .el-carousel__item {
            height: 240px;
            .entrance {
                width: 100%;
                height: 50px;
                color: #fff;
                background-color: rgba(0, 0, 0, .5);
                position: absolute;
                bottom: 0;
                left: 0;
                display: flex;
                align-items: center;
                padding: 0 15px;
                .name {
                    flex: 1;
                    font-size: 20px;
                    padding-right: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .btn {
                    width: 100px;
                    height: 33px;
                    font-size: 14px;
                    background: #25b3e5;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .el-row {
            padding: 0 15px;
            .el-col {
                margin-bottom: 10px;
                .box {
                    background: #fff;
                    border-radius: 6px;
                    overflow: hidden;
                }
                .img {
                    width: 100%;
                    height: 110px;
                    background: #eee;
                    object-fit: cover;
                }
                .name {
                    color: #000;
                    font-size: 14px;
                    text-align: center;
                    padding: 8px 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
</style>