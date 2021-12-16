<template>
  <q-layout view="hHh lpR fff">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          Quasar Frontend Template
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
