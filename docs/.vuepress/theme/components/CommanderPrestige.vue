<script setup lang="ts">
import { NResult, NWatermark } from 'naive-ui';
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Object as any,
    required: false,
  },
});

</script>

<template>
  <n-watermark content="机密" cross selectable :font-size="16" :line-height="16" :width="192" :height="128"
    :x-offset="12" :y-offset="28" :rotate="-15">
    <n-result status="warning" title="尚未揭露" description="机密在揭露前永远是机密">
    </n-result>
  </n-watermark>

</template>

<style lang="css">
</style>