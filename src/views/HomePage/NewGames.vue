<template>
    <div class="new-games">
        <div class="title">NEW GAMES</div>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3"
                v-for="item in GamesList.filter((ele, index) => index < 9)"
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

    import { ElRow, ElCol } from 'element-plus';
    import { useRouter } from "vue-router";
    import localGamesData from '@/data/games.js';

    const router = useRouter();
    
    const GamesList = localGamesData;
    
    const toDetail = (id) => {
      router.push("/detailpage?id=" + id);
    };

</script>

<style lang="scss" scoped>
    .new-games {
        width: 100%;
        overflow: hidden;
        .title {
            font-size: 21px;
            color: #25b3e5;
            line-height: 36px;
            font-weight: bold;
            padding: 10px;
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