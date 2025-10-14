<template>
    <div class="similar-games">
        <div class="title">Similar Games</div>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3"
                v-for="item in GamesList"
                :key="item.id"
            >
                <div class="box" @click="toDetail(item.id)">
                    <img class="img" :src="item.thumb" :alt="item.title" />
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

    import { defineEmits } from 'vue';
    import { ElRow, ElCol } from 'element-plus';
    import localGamesData from '@/data/games.js';
    import { getRandomElements } from '@/utils'

    import { useRouter } from "vue-router";
    
    const router = useRouter();
    const emit = defineEmits(['childEvent']);

    const GamesList = getRandomElements(localGamesData, 9);

    const toDetail = (id) => {
        emit('childEvent', id);
        router.push("/detailpage?id=" + id);
    };

</script>

<style lang="scss" scoped>
    .similar-games {
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
            }
        }
    }
</style>