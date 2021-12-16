<template>
  <q-page padding>
    <div class="text-h1">VIEW A TREE</div>
  </q-page>
</template>

<script>
import {showErrorMessage} from 'src/functions/alert-message';

export default {
  name: 'ViewTreeView',
  mounted()
  {
    this.fetchTreeData(this.treeId);
  },
  computed: {
    treeId: function ()
    {
      return this.$route.params.treeId;
    }
  },
  watch: {
    treeId: function (e)
    {
      this.fetchTreeData(this.treeId);
    }
  },
  methods: {
    fetchTreeData(treeId)
    {
      if (isNaN(treeId))
      {
        showErrorMessage("Provided Tree ID is not a number!");
      }
    }
  }
}
</script>
