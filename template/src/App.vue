<template>
  <q-layout view="hHr LpR lFf" class="layout ignore">
    <q-layout-header>
      <q-toolbar>
        <q-btn flat round dense icon="arrow_back_ios" @click="back" aria-label="返回" />
        <q-toolbar-title>
          {{headerTitle}}
          <span slot="subtitle"></span>
        </q-toolbar-title>
        <q-btn flat round dense icon="mail" />
        <q-btn flat round dense icon="alarm" />
        <q-btn flat round dense icon="alarm" />
        <q-btn flat label="登出" />
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer side="left" :breakpoint="100" v-model="showLeft">
      <q-scroll-area class="fit">
        <q-list-header>Left Panel</q-list-header>
        <q-item to="/showcase/layout-demo/play-with-layout">
          <q-item-side icon="account circle" />
          <q-item-main label="Play with Layout" sublabel="Learn more about it" />
          <q-item-side right icon="thumb_up" />
        </q-item>
        <q-item to="/showcase/layout-demo/drawer-panels">
          <q-item-side icon="view_array" />
          <q-item-main label="Drawer Panels" sublabel="Layout left/right sides" />
        </q-item>
        <q-item to="/showcase/layout-demo/page-sticky">
          <q-item-side icon="pin_drop" />
          <q-item-main label="Page Sticky" sublabel="...on a Layout" />
        </q-item>
        <q-item to="/showcase/layout-demo/floating-action-button">
          <q-item-side icon="play_for_work" />
          <q-item-main label="Floating Action Button" sublabel="For Page actions" />
        </q-item>

        <div v-if="scrolling" style="padding: 25px 16px 16px;">
          <p class="caption" v-for="n in 50" :key="`left-${n}`">
            <em>Left Panel has intended scroll</em>
          </p>
        </div>
      </q-scroll-area>
    </q-layout-drawer>
    <q-page-container>
      <router-view class="child-view" />
    </q-page-container>
  </q-layout>
</template>
<script>
  export default {
    name: 'App',
    data() {
      return {
        headerTitle: '管理系统',
        scrolling: true,
        showLeft: true,
      }
    },
    methods: {
      back() {
        this.$router.back()
      },
    },
    watch: {
      $route(val) {
        this.headerTitle = val.meta.title
      },
    },
  }
</script>
