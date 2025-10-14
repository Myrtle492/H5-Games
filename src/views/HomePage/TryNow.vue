<template>
    <div class="try-now">
        <div class="title">TRY NOW</div>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="3"
                v-for="item in GamesList"
                :key="item.id"
            >
                <div class="box" @click="toDetail(item.id)">
                    <img class="img" :src="item.thumb" :alt="item.title" />
                    <div class="name">{{ item.title }}</div>
                </div>
            </el-col>
        </el-row>
        <el-pagination
            :pager-count="5"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="total"
            @current-change="currentChange"
        />
    </div>
</template>

<script setup>

    import { ref } from 'vue';
    import { ElRow, ElCol, ElPagination } from 'element-plus';
    import { useRouter } from "vue-router";
    import localGamesData from '@/data/games.js';
    import { getRandomElements } from '@/utils'
    
    const router = useRouter();
    
    let GamesList = ref(localGamesData.filter((ele, index) => 25<= index && index < 37));
    let pageSize = 12;
    let total = localGamesData.filter((ele, index) => index >= 25).length;
    
    const toDetail = (id) => {
      router.push("/detailpage?id=" + id);
    };

    const currentChange = (val) => {
        GamesList.value = getRandomElements(localGamesData.filter((ele, index) => index >= 25), pageSize);
    }

</script>

<style lang="scss">
    .el-pagination button {
        border-radius: 50%;
    }
    .el-pager {
        margin: 0 10px;
    }
    .el-pager li {
        background: transparent;
    }
    .el-pager li.is-active {
        color: #fff;
        background: #25b3e5;
    }
</style>

<style lang="scss" scoped>
    .try-now {
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
        .el-pagination {
            padding: 0 15px;
            margin: 10px 0 15px;
            display: flex;
            justify-content: center;
        }
    }
</style>