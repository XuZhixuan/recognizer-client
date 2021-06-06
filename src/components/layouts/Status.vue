<template>
  <div class="status-bar text-center">
    <b-card :border-variant="connection.status">
      <b-row>
        <b-col cols="3">
          <label for="recon">连接状态：</label>
          <b-badge :variant="connection.status" @click="conn()" id="recon" href="#">
            {{ connection.info }}
          </b-badge>
        </b-col>
        <b-col cols="2">
          连接地址： {{ addr }}
        </b-col>
        <b-col>
          信息：{{ message }}
        </b-col>
      </b-row>
    </b-card>
    <b-tooltip target="recon" triggers="hover"> 点击以重新连接 </b-tooltip>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Status',
  methods: {
    conn () {
      this.$socket.disconnect()
      this.update(4, 'Connection closed.')
      this.update(0, 'Reconnecting.')
      this.$socket.connect()
    },
    update (status, message) {
      this.$store.commit('conn_status', {
        addr: '/',
        status: status,
        message: message
      })
    }
  },
  sockets: {
    connect: function () {
      this.update(1, 'Successfully connected. socket id=' + this.$socket.id)
    },
    error: function () {
      this.update(2, 'Connection error.')
    }
  },
  computed: {
    connection () {
      const ref = {
        0: { status: 'primary', info: 'Connecting' },
        1: { status: 'success', info: 'Connected' },
        2: { status: 'danger', info: 'Failed' },
        3: { status: 'warning', info: 'Time out' },
        4: { status: 'dark', info: 'Closed' }
      }

      return ref[this.status]
    },

    ...mapState({
      status: state => state.connection.status,
      addr: state => state.connection.addr,
      message: state => state.connection.message
    })
  }
}
</script>

<style lang="scss">
.status-bar {
  margin-bottom: 20px;
  font-family: 'Consolas', 'Microsoft YaHei';
}
</style>
