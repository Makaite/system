<template>
  <div>
    <t-button>确定</t-button>
    <t-space direction="vertical">
    <t-space>
      <t-button variant="outline" ghost>幽灵按钮</t-button>
      <t-button variant="dashed" ghost>幽灵按钮</t-button>
      <t-button variant="text" ghost>幽灵按钮</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="primary" ghost>幽灵按钮</t-button>
      <t-button variant="dashed" theme="primary" ghost>幽灵按钮</t-button>
      <t-button variant="text" theme="primary" ghost>幽灵按钮</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="success" ghost>幽灵按钮</t-button>
      <t-button variant="dashed" theme="success" ghost>幽灵按钮</t-button>
      <t-button variant="text" theme="success" ghost>幽灵按钮</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="warning" ghost>幽灵按钮</t-button>
      <t-button variant="dashed" theme="warning" ghost>幽灵按钮</t-button>
      <t-button variant="text" theme="warning" ghost>幽灵按钮</t-button>
    </t-space>
    <t-space>
      <t-button variant="outline" theme="danger" ghost>幽灵按钮</t-button>
      <t-button variant="dashed" theme="danger" ghost>幽灵按钮</t-button>
      <t-button variant="text" theme="danger" ghost>幽灵按钮</t-button>
    </t-space>
  </t-space>
  </div>
</template>

<script setup>
import { logoutApi } from '@/api/login';
import { userStore } from '../../pinia';

const user = userStore()
const logout = () => {
  logoutApi({id: user.userId}).then((res) => {
    console.log('退出的res',user, res);
  })
}
</script>

<style lang="scss" scoped>

</style>