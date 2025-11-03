<template>
  <div class="detail-page">
    <div class="detail">
      <div class="content">
        <!-- 封面与标题信息 -->
        <div class="icon">
          <img :src="obj.thumb" :alt="obj.title" />
        </div>

        <div class="info">
          <div class="name">{{ obj.title }}</div>
          <div class="category" v-if="obj?.category">
            <span class="category">{{ obj.category }}</span>
            <!-- 评分（Element Plus 全局注册） -->
            <el-rate v-model="obj.star" disabled />
          </div>
        </div>

        <!-- 简要描述 -->
        <div class="desc">{{ obj.description }}</div>

        <!-- 立即游玩按钮 -->
        <div class="play" @click="toPlay">Play Now</div>

        <!-- ★★★ 这里是新增的“原创内容区块”，提升页面价值 ★★★ -->
        <ContentInfo />

        <!-- （保留）广告位 / 相关模块 -->
        <div
          class="gptslot"
          data-adunitid="2"
          style="min-width:300px; min-height:250px; margin:10px auto"
        ></div>

        <!-- 相似游戏 -->
        <SimilarGames @childEvent="handleChildEvent" />
      </div>
    </div>

    <!-- （保留）底部广告位 -->
    <div
      class="gptslot"
      data-adunitid="3"
      style="min-width:300px; min-height:250px; margin:10px auto"
    ></div>

    <!-- 弹层播放区域 -->
    <Teleport to="body">
      <div class="fixed left-0 top-0 z-20 h-full w-full flex-col bg-white" v-if="show">
        <div class="flex-1">
          <iframe class="w-full h-full" :src="obj.url" frameborder="0"></iframe>
        </div>
        <div class="h-[50px] w-full"></div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import data from '@/data/games.json'

import SimilarGames from './SimilarGames.vue'
import ContentInfo from './ContentInfo.vue'   // ← 新增导入

const show = ref(false)
const obj = ref({})

/** 初始化加载：根据路由或默认项装载一个游戏对象 */
onMounted(() => {
  // 你原项目里一般是通过路由参数取 id；这里做兼容处理
  const id =
    (typeof window !== 'undefined' &&
      window?.location?.pathname?.split('/').pop()) || 0

  // 兼容两种数据结构：通过下标或通过 id 匹配
  const item =
    data[id] ||
    data.find((g) => String(g.id) === String(id)) ||
    data[0]

  obj.value = item || {}
})

/** 打开播放弹层 */
const toPlay = () => {
  show.value = true
}

/** 相似游戏点击回调：直接切换详情对象（不跳路由也能用） */
const handleChildEvent = (item) => {
  if (item) {
    obj.value = item
    show.value = false
    // 回到顶部，避免用户错过内容块
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.detail-page {
  width: 100%;
}

.detail .content {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}

.icon img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

.info .name {
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0 6px;
}

.info .category {
  font-size: 13px;
  color: #64748b; /* slate-500 */
}

.desc {
  margin: 14px 0;
  line-height: 1.7;
  color: #334155; /* slate-700 */
}

.play {
  display: inline-block;
  padding: 10px 16px;
  background: #25b3e5;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 12px;
}

.play:hover {
  opacity: 0.95;
}
</style>
