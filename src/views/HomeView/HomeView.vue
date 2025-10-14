<template>
  <div class="container mx-auto grid justify-center gap-4 p-4"
       style="grid-template-columns: repeat(auto-fill, 94px); grid-auto-rows: 94px">
    <HeaderWidget />
    <div v-for="(app, index) in apps" :key="app.id">
      <GameItem :game="app" />
      <div v-if="(index + 1) % 3 === 0 && (index + 1) / 3 === 2">
        <div class="gptslot" data-adunitid="1" style="min-width: 300px; min-height: 250px;">
          
        <!-- <div id="div-gpt-ad-2383602858776570-0" style="min-width: 300px; min-height: 250px;">
          <script>
            googletag.cmd.push(function() {
              googletag.display('div-gpt-ad-2383602858776570-0');
            });
          </script> -->
        </div>
      </div>
      <div v-if="(index + 1) % 3 === 0 && (index + 1) / 3 === 5">
        <div class="gptslot" data-adunitid="0" style="min-width: 300px; min-height: 250px;">

        <!-- <div id="div-gpt-ad-2383602858776570-1" style="min-width: 300px; min-height: 250px;">
          <script>
            googletag.cmd.push(function() {
              googletag.display('div-gpt-ad-2383602858776570-1');
            });
          </script> -->
        </div>
      </div>
    </div>
  </div>
  <FooterWidget />
</template>

<script setup>
import { onMounted } from 'vue';
import HeaderWidget from '@/components/HeaderWidget.vue';
import FooterWidget from '@/components/FooterWidget.vue';
import GameItem from '@/components/GameItem.vue';
import games from '@/data/games.js';

const apps = games;

onMounted(() => {
  const adScript = document.createElement('script');
  adScript.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  adScript.async = true;
  document.head.appendChild(adScript);

  // window.googletag = window.googletag || { cmd: [] };
  // googletag.cmd.push(function() {
  //   // 定义第一个广告位
  //   googletag.defineSlot('/23127830827/3699871192224800tag/3699871192224800_1', [300, 250], 'div-gpt-ad-2383602858776570-0').addService(googletag.pubads());
    
  //   // 定义第二个广告位
  //   googletag.defineSlot('/23127830827/3699871192224800tag/3699871192224800_2', [300, 250], 'div-gpt-ad-2383602858776570-1').addService(googletag.pubads());

  //   googletag.pubads().set("page_url", "https://xcydjnutadx.com");
  //   googletag.enableServices();
  // });
});
</script>

<style scoped>
/* 可以添加一些组件的局部样式 */
</style>
