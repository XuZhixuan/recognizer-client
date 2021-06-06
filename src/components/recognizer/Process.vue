<template>
  <div>
    <b-row>
      <b-col cols="1" class="text-center">
        <img v-if="showPadding" src="@/assets/icons/info-circle.svg" class="status-icon" />
        <img v-if="showDone" src="@/assets/icons/check-circle.svg" class="status-icon" />
        <img v-if="showError" src="@/assets/icons/close-circle.svg" class="status-icon" />
        <b-spinner v-if="showSpinner" variant="success" class="status-icon"></b-spinner>
      </b-col>
      <b-col>
        {{ message }}
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Process',
  props: {
    status: String,
    message: String
  },
  computed: {
    showSpinner () {
      return this.status === 'running'
    },
    showPadding () {
      return this.status === 'padding'
    },
    showDone () {
      return this.status === 'done'
    },
    showError () {
      return this.status === 'error'
    }
  }
}
</script>

<style lang="scss">
.status-icon {
  height: 1.2rem;
  width: 1.2rem;
}
</style>
