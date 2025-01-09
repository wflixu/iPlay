<template>
    <div>
        <video id="player" playsinline controls data-poster="/path/to/poster.jpg">

            <source v-for="sur in sources" :src="sur.url" :type="sur.type" />
          

            <!-- Captions are optional -->
            <!-- <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default /> -->
        </video>
    </div>
</template>

<script setup lang="ts">
import Plyr from 'plyr';
import { reactive, onMounted } from 'vue'



const sources = reactive([
    {
        url: '/data/ghostty.mp4',
        type: 'video/mp4'
    },
    {
        url: '/data/nblog.mp4',
        type: 'video/mp4'
    },
])

onMounted(()=>{
    const player = new Plyr('#player');
})

</script>

<style scoped></style>