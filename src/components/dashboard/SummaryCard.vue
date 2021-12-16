<template>
  <q-card :class="backgroundColor" class="q-ma-md">
    <q-card-section :class="textColor">
      <div class="text-h6 text-bold"> {{ title }}</div>
      <div>{{ "Total (" + total + ")" }}</div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'SummaryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'bg-white'
    },
    textColor: {
      type: String,
      default: 'text-white'
    },
    to: {
      type: String,
      default: '#'
    }
  },
  setup()
  {
    return {}
  },
  methods: {
    goToRoute()
    {
      alert(this.to);
    }
  }
}
</script>
<style scoped>

</style>
