<template>
  <q-card>
    <q-card-title>
      {{data.title}}
      <span slot="subtitle">Subtitle</span>
    </q-card-title>
    <q-card-main class="text-faded">
      {{data.body}}
    </q-card-main>
  </q-card>
</template>

<script>
  export default {
    name: 'Detail',
    props: {
      data: {
        default: () => ({}),
      },
    },
  }
</script>

<style scoped>

</style>
