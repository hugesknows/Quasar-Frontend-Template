<template>
  <q-layout view="hHh lpR fff">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Quasar Frontend Template
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered>
        <q-item clickable v-ripple to="/home" exact active-class="active-route-class">
          <q-item-section avatar>
            <q-icon color="primary" name="dashboard"/>
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar class="text-center">
        <q-toolbar-title> © 2021
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
  setup()
  {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer()
      {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
