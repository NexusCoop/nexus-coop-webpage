<script setup lang="ts">
import ParentLayout from '../layouts/Layout.vue';
import PageMeta from '@vuepress/theme-default/lib/client/components/PageMeta.vue';
import PageNav from '@vuepress/theme-default/lib/client/components/PageNav.vue';
import { useScrollPromise } from '@vuepress/theme-default/lib/client/composables';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { NH1, NImage, NText, NBlockquote, NTabs, NTabPane, NDivider, NSpace, NCard } from 'naive-ui';
import CommanderUpgrades from '../components/CommanderUpgrades.vue';
import CommanderMastery from '../components/CommanderMastery.vue';
import CommanderPrestige from '../components/CommanderPrestige.vue';

const page = usePageData();
const frontmatter = usePageFrontmatter();

const scrollPromise = useScrollPromise();
const onBeforeEnter = scrollPromise.resolve;
const onBeforeLeave = scrollPromise.pending;

page.value.title = frontmatter.value.commanderName as string;

const perkConstantText = {
  unkownPerkName: '未知升级',
  unkownPerkLevel: '未知升级等级',
  unkownPerkDescription: '未知升级描述',
  unkownPerkIcon: '',
};

const masteryConstantText = {
  unkownMasteryName: '未知精通',
  unkownMasteryDescription: '未知精通描述',
};

function getCommanderUpgradesData() {
  const commanderIdx = frontmatter.value.commanderIdx as string;
  const commanderUpgradesData = [];
  for (let i = 0; i < 15; i++) {
    const upgrade = {
      id: 'perk' + (i + 1),
      name: frontmatter.value['perk' + (i + 1) + 'Name'] as string || perkConstantText.unkownPerkName,
      level: (frontmatter.value['perk' + (i + 1) + 'Name'] as string) ? (frontmatter.value['commanderName'] as string) + '升级 ' + (i + 1) : perkConstantText.unkownPerkLevel,
      description: frontmatter.value['perk' + (i + 1) + 'Description'] || perkConstantText.unkownPerkDescription,
      icon:
        frontmatter.value['perk' + (i + 1) + 'Icon']
        || (commanderIdx
          ? ('/assets/commander/' + commanderIdx + '/upgrades_icons/' + commanderIdx + '_upgrade_perk' + (i + 1) + '.png')
          : perkConstantText.unkownPerkIcon),
    };
    commanderUpgradesData.push(upgrade);
  }
  return commanderUpgradesData;
}

function getCommanderMasteryData() {
  const commanderMasteryData = [];
  for (let i = 0; i < 6; i++) {
    const id = 'C' + (Math.floor(i / 2) + 1) + 'M' + (i % 2 + 1);
    const mastery = {
      id: id,
      name: frontmatter.value['mastery' + id + 'Name'] as string || masteryConstantText.unkownMasteryName,
      description: frontmatter.value['mastery' + id + 'Description'] || masteryConstantText.unkownMasteryDescription,
      format: frontmatter.value['mastery' + id + 'Format'] as [] || [],
      increment: frontmatter.value['mastery' + id + 'Increment'] as [] || [],
    };
    commanderMasteryData.push(mastery);
  }
  return commanderMasteryData;
}

</script>

<template>
  <ParentLayout>
    <template #page-content>
      <div class="page-commander">
        <main class="page">
          <slot name="page-top" />

          <div class="theme-default-content theme-nexus-content">

            <slot name="content-top" />

            <n-image :style="{ margin: '20px 10px 10px 10px' }" :width="800"
              :src="(frontmatter.commanderImage as string)" preview-disabled></n-image>
            <n-divider></n-divider>
            <n-space justify="center">
              <n-h1 strong :style="{ marginBottom: 0 }">
                {{ frontmatter['commanderName'] }}
              </n-h1>
            </n-space>
            <n-space justify="center">
              <n-text type="info"> {{ frontmatter.commanderDescription }} </n-text>
            </n-space>

            <n-divider :style="{ marginBottom: 0 }"></n-divider>

            <n-tabs type="line" justify-content="space-around" animated>
              <n-tab-pane name="CommanderStory" tab="指挥官故事">
                <n-blockquote v-html="frontmatter['commanderStory']"></n-blockquote>
              </n-tab-pane>
              <!-- <n-tab-pane name="CommanderUpgrades" tab="指挥官升级">
                <CommanderUpgrades :data="getCommanderUpgradesData()" />
              </n-tab-pane> -->
            </n-tabs>

            <n-divider :style="{ marginBottom: 0 }"></n-divider>
            <n-tabs type="line" justify-content="space-around" animated>
              <!-- <n-tab-pane name="CommanderStory" tab="指挥官故事">
                <n-blockquote v-html="frontmatter['commanderStory']"></n-blockquote>
              </n-tab-pane> -->
              <n-tab-pane name="CommanderUpgrades" tab="指挥官升级">
                <CommanderUpgrades :data="getCommanderUpgradesData()" />
              </n-tab-pane>
            </n-tabs>

            <n-divider></n-divider>

            <n-card>
              <template #header>
                <n-space justify="center">
                  <n-text> 指挥官精通 </n-text>
                </n-space>
              </template>
              <n-divider></n-divider>
              <CommanderMastery :data="getCommanderMasteryData()" />
            </n-card>

            <n-divider></n-divider>

            <n-card>
              <template #header>
                <n-space justify="center">
                  <n-text> 指挥官威望 </n-text>
                </n-space>
              </template>
              <CommanderPrestige />
            </n-card>

            <n-divider></n-divider>

            <Content v-if="frontmatter['moreContent']" />

            <slot name="content-bottom" />

          </div>

          <PageMeta />

          <PageNav />

          <slot name="page-bottom" />

        </main>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
</style>