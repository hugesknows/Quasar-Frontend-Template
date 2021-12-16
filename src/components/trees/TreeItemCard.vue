<template>
  <q-card class="bg-green-1">
    <q-card-section class="row">
      <div class="col">
        <div>
          <strong>Tree Name: </strong> {{ ' ' + tree.name }}
        </div>
        <div>
          <strong>Species: </strong>{{ ' ' + tree.treeSpecies.commonName + ', ' + tree.treeSpecies.scientificName }}
        </div>
        <div>
          <strong>Location:</strong>{{ ' ' + tree.latitude + ', ' + tree.longitude }}
        </div>
        <div>
          <q-badge v-if="tree.userId != null" color="green">
            Assigned to a user
          </q-badge>
          <q-badge v-else color="red">
            Unassigned
          </q-badge>
        </div>

      </div>
      <div class="col">
        <div class="row">
          <q-space/>
          <q-btn @click="()=>viewTree(tree.id)" label="View" unelevated color="green-5"/>
        </div>

      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'TreeItemCard',
  props: {
    tree: {
      type: Object,
      default: null
    }
  },
  methods: {
    viewTree(evt)
    {
      console.log(evt)
    }
  },
  setup()
  {
    return {}
  }
}
</script>
