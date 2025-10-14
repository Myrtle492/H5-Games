<template>
    <div class="gptslot" data-adunitid="0" style="min-width: 300px; min-height: 250px; margin:10px auto">
        <!-- <ins class="gptslot" 
            style="display:inline-block;width:100%;height:100%;" 
            data-adunitid="1"
        > 
        </ins> -->
    </div>
    <NewGames></NewGames>
    <HotGames></HotGames>
    <div class="gptslot" data-adunitid="1" style="min-width: 300px; min-height: 250px; margin:10px auto">
        <!-- <ins class="gptslot" 
            style="display:inline-block;width:100%;height:100%;" 
            data-adunitid="0"
        > 
        </ins> -->
    </div>
    <TopPicks></TopPicks>
    <TryNow></TryNow>
    <Tips></Tips>
</template>

<script setup>

import { onMounted } from 'vue';
import NewGames from './NewGames.vue';
import HotGames from './HotGames.vue';
import TopPicks from './TopPicks.vue';
import TryNow from './TryNow.vue';
import Tips from './Tips.vue';

onMounted(() => {
    // (adsbygoogle = window.adsbygoogle || []).push({});
})

</script>