<template>
  <div class="detail-page">
    <div class="detail">
      <div class="content">
        <!-- 头部信息 -->
        <div class="icon">
          <img :src="obj.thumb" :alt="obj.title" />
        </div>

        <div class="info">
          <div class="name">{{ obj.title }}</div>
          <div class="category" v-if="obj?.category">
            <span class="category">{{ obj.category }}</span>
            <el-rate v-model="obj.star" disabled />
          </div>
        </div>

        <!-- 简要描述 -->
        <div class="desc">{{ obj.description }}</div>

        <!-- 立即游玩 -->
        <div class="play" @click="toPlay">Play Now</div>

        <!-- ★ 新增：原创内容区块（提升页面价值） -->
        <ContentInfo />

        <!-- （保留）广告位 -->
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
import data from '@/data/games.js'               // ← 改为 .js
import SimilarGames from './SimilarGames.vue'
import ContentInfo from './ContentInfo.vue'      // ← 新增内容组件

const show = ref(false)
const obj = ref({})

/** 初始化：根据路径或默认项加载一个游戏对象 */
onMounted(() => {
  // 常见两种：/detail/12 或 /detail?id=12；这里做最稳妥的兼容
  let id = 0
  if (typeof window !== 'undefined') {
    const pathLast = window.location.pathname.split('/').pop()
    const searchId = new URLSearchParams(window.location.search).get('id')
    id = searchId || pathLast || 0
  }

  // 兼容数组下标与通过 id 查找两种结构
  const item =
    data[id] ||
    (Array.isArray(data) ? data.find(g => String(g.id) === String(id)) : null) ||
    (Array.isArray(data) ? data[0] : {})

  obj.value = item || {}
})

/** 打开播放弹层 */
const toPlay = () => {
  show.value = true
}

/** 相似游戏点击回调 */
const handleChildEvent = (item) => {
  if (!item) return
  obj.value = item
  show.value = false
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.detail-page { width: 100%; }
.detail .content { max-width: 900px; margin: 0 auto; padding: 16px; }

.icon img {
  width: 140px; height: 140px; object-fit: cover;
  border-radius: 12px; display: block;
}

.info .name { font-size: 20px; font-weight: 600; margin: 10px 0 6px; }
.info .category { font-size: 13px; color: #64748b; }

.desc { margin: 14px 0; line-height: 1.7; color: #334155; }

.play {
  display: inline-block; padding: 10px 16px; background: #25b3e5;
  color: #fff; border-radius: 8px; cursor: pointer; user-select: none;
  margin-bottom: 12px;
}
.play:hover { opacity: .95; }
</style>
