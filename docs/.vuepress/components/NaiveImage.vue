<script setup lang="ts">
import { NH1, NImage, NText, NBlockquote, NTabs, NTabPane, NDivider, NSpace, NCard } from 'naive-ui';

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  imageWidth: {
    type: Number,
    required: false,
    default: 800,
  },
  previewDisabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

</script>

<template>
  <n-image 
  :width="props.imageWidth" 
  :src="props.src"
  :preview-disabled="props.previewDisabled"
  ></n-image>
</template>

<style lang="css">
</style>

