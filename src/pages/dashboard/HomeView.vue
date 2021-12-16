<template>
  <q-page padding>
    <!-- content -->
    <summary-card title="Some info" :total="total" icon="help" backgroundColor="bg-green-6" textColor="text-black"/>
  </q-page>
</template>

<script>
import SummaryCard from 'src/components/dashboard/SummaryCard.vue'
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'HomeView',
  data()
  {
    return {
      total: 0
    }
  },
  mounted()
  {
    this.total = Math.floor(Math.random() * 420);
  },
  methods: {},
  components: {
    SummaryCard
  },
  computed: {}
}
</script>
