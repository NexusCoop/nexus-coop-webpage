<script setup lang="ts">
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue';
import Home from '@vuepress/theme-default/lib/client/components/Home.vue'
import Page from '@vuepress/theme-default/lib/client/components/Page.vue'
import { useScrollPromise } from '@vuepress/theme-default/lib/client/composables';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { Transition } from 'vue';

const page = usePageData();
const frontmatter = usePageFrontmatter();

const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

page.value.title = frontmatter.value.commanderName as string;

</script>

<template>
  <ParentLayout>
    <template #page>

      <Home v-if="frontmatter.home" />

      <Transition v-else name="fade-slide-y" mode="out-in" @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
        <slot name="page-content" :key="page.path">
          <Page :key="page.path">
            <template #top>
              <slot name="page-top" />
            </template>
            <template #content-top>
              <slot name="page-content-top" />
            </template>
            <template #content-bottom>
              <slot name="page-content-bottom" />
            </template>
            <template #bottom>
              <slot name="page-bottom" />
            </template>
          </Page>
        </slot>
      </Transition>
    </template>
  </ParentLayout>
</template>

<style lang="css">
</style>