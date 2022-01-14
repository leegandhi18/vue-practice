<template>
  <div>
    <h1>binding test {{ title }}</h1>
    <div>
      <input v-model="title" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
