<script setup lang="ts">
import { NTable, NInputNumber, NDivider, NGrid, NGridItem, NPopover, NButton, NThing, NAvatar, NSpace, NText, NBadge } from 'naive-ui';
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Object as any,
    required: true,
  },
});

const totalMastryPoint = ref(90);

const catePoint = ref({ 1: 30, 2: 30, 3: 30 });
const catePointLeft = ref({ 1: 0, 2: 0, 3: 0 });
const usingPoint = ref({ 1: 15, 2: 15, 3: 15, 4: 15, 5: 15, 6: 15 });

function countMastryPoint() {

  const floorPoint = Math.floor(totalMastryPoint.value / 3);
  const uncountPoint = totalMastryPoint.value % 3;
  catePoint.value[1] = Math.floor(floorPoint) + (uncountPoint > 0 ? 1 : 0);
  catePoint.value[2] = Math.floor(floorPoint) + (uncountPoint > 1 ? 1 : 0);
  catePoint.value[3] = Math.floor(floorPoint) + (uncountPoint > 2 ? 1 : 0);

  if (usingPoint.value[1] + usingPoint.value[2] > catePoint.value[1]) {
    if (usingPoint.value[1] > usingPoint.value[2]) {
      usingPoint.value[1] -= 1;
    } else {
      usingPoint.value[2] -= 1;
    }
  } else {
    catePointLeft.value[1] = catePoint.value[1] - (usingPoint.value[1] + usingPoint.value[2]);
  }

  if (usingPoint.value[3] + usingPoint.value[4] > catePoint.value[2]) {
    if (usingPoint.value[3] > usingPoint.value[4]) {
      usingPoint.value[3] -= 1;
    } else {
      usingPoint.value[4] -= 1;
    }
  } else {
    catePointLeft.value[2] = catePoint.value[2] - (usingPoint.value[3] + usingPoint.value[4]);
  }

  if (usingPoint.value[5] + usingPoint.value[6] > catePoint.value[3]) {
    if (usingPoint.value[5] > usingPoint.value[6]) {
      usingPoint.value[5] -= 1;
    } else {
      usingPoint.value[6] -= 1;
    }
  } else {
    catePointLeft.value[3] = catePoint.value[3] - (usingPoint.value[5] + usingPoint.value[6]);
  }
}

function getMasteryText(index: number): string {
  let text = '';
  for (let i = 0; i < 2; i++) {
    if (props.data[index].format[i] != null) {
      if (text.length > 0) {
        text += '<br />';
      }
      text += (props.data[index].format[i] as string)
        .split(`|num${i + 1}|`)
        .join(((props.data[index].increment[i] as number) * usingPoint.value[index + 1]).toString());
    }
  }
  return text;
}


</script>

<template>
  <n-space justify="space-between">
    <n-text> 精通等级： {{ totalMastryPoint }}</n-text>
    <n-input-number :on-update="countMastryPoint()" v-model:value="totalMastryPoint" placeholder="最小值" :min="0"
      :max="90" />
  </n-space>
  <n-divider></n-divider>
  <div v-for="(item, index) in data">
    <n-divider v-if="(index % 2) === 0 && index != 0"></n-divider>
    <n-space v-if="(index % 2) === 0" justify="end">
      <n-text>
        {{ usingPoint[index + 1] + usingPoint[index + 2] }}/{{ catePoint[(Math.floor(index / 2) + 1)] }}
      </n-text>
    </n-space>
    <n-table>
      <tbody>
        <tr>
          <td width="30%">
            <n-popover trigger="hover" :show-arrow="false">
              <template #trigger>
                <n-button text>
                  <n-text> {{ item.name }} </n-text>
                </n-button>
              </template>
              <n-text>{{ item.description }}</n-text>
            </n-popover>
          </td>
          <td width="40%">
            <n-space justify="center">
              <n-text v-html="getMasteryText(index)"></n-text>
            </n-space>
          </td>
          <td width="30%">
            <n-input-number v-model:value="usingPoint[index + 1]" :min="0" :max="30" />
          </td>
        </tr>
      </tbody>
    </n-table>
  </div>
</template>

<style lang="css">
</style>