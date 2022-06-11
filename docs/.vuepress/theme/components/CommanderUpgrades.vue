<script setup lang="ts">
import { NGrid, NGridItem, NPopover, NButton, NThing, NAvatar, NSpace, NText, NBadge } from 'naive-ui';

const props = defineProps({
  data: {
    type: Object as any,
    required: true,
  },
});

</script>

<template>
  <n-space justify="center">
    <n-grid :style="{ margin: '12px 10px 0px 10px' }" :x-gap="24" :y-gap="24" :cols="5">
      <n-grid-item v-for="(item, index) in props.data">
        <n-space justify="center">
          <n-popover trigger="hover" :show-arrow="false">
            <template #trigger>
              <n-badge :value="(index + 1)" type="info">
                <n-button class="no-image-preview" text>
                  <n-avatar class="no-image-preview" :size="64" :src="item.icon" fallback-src=""></n-avatar>
                </n-button>
              </n-badge>

            </template>
            <n-thing :style="{ maxWidth: '400px' }">
              <template #avatar>
                <n-avatar :size="48" :src="item.icon" fallback-src=""></n-avatar>
              </template>
              <template #header> {{ item.name }} </template>
              <template #description> {{ item.level }} </template>
              <n-text v-html="item.description"></n-text>
            </n-thing>
          </n-popover>
        </n-space>
      </n-grid-item>
    </n-grid>
  </n-space>

</template>

<style lang="css">
</style>