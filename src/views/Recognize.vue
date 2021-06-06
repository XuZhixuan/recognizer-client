<template>
  <div>
    <b-card>
      <b-img center :src="base64" class="image-show"></b-img>
      <b-form>
        <b-form-group label="选择图片：" label-for="cover">
          <b-form-file
            v-model="image"
            :state="Boolean(image)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            accept=".png, .jpg, .jpeg"
          >
          </b-form-file>
        </b-form-group>
      </b-form>
      <b-row align-v="center">
        <b-col cols="2">
          <b-button variant="primary" @click="calculate()">计算</b-button>
        </b-col>
        <b-col cols="2">
          计算状态： {{ message }}
        </b-col>
        <b-col v-if="result != null">
          预测热导率：{{ result }} W·m<sup>-1</sup>·K<sup>-1</sup>
        </b-col>
      </b-row>
      <b-modal cancel-disabled ref="run-modal" title="计算">
        <Process v-for="process in processes" :key="process.id" :status="process.status" :message="process.message"></Process>
      </b-modal>
    </b-card>
  </div>
</template>

<script>
import Process from '@/components/recognizer/Process.vue'

export default {
  name: 'Recognize',
  components: {
    Process
  },
  data () {
    return {
      image: null,
      base64: '',
      result: null,
      message: '就绪',
      processes: [
        { id: 0, status: 'padding', message: '上传图片' },
        { id: 1, status: 'padding', message: '计算' },
        { id: 2, status: 'padding', message: '预测热导率：' }
      ]
    }
  },
  watch: {
    image () {
      if (this.image != null) {
        const vm = this
        this.toBase64(this.image).then(
          res => { vm.base64 = res }
        )
      }
    }
  },
  methods: {
    toBase64: file => new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    }),
    updateProcess (id, status = '', message = '') {
      if (status) this.processes[id].status = status
      if (message) this.processes[id].message = message
    },
    calculate () {
      const vm = this
      this.updateProcess(0, 'running')

      if (!this.$socket.connected) {
        this.message = '未连接！'
        vm.updateProcess(0, 'error', '未连接')
        this.$refs['run-modal'].show()
        return
      }

      this.$refs['run-modal'].show()

      this.uploadImg().then(res => {
        vm.updateProcess(0, 'done')
        vm.updateProcess(1, 'running')
        vm.message = '正在计算！'
      }).catch(e => {
        vm.updateProcess(0, 'error', '上传失败：' + e)
        vm.message = '上传出错！'
      })
    },
    async uploadImg () {
      await this.$socket.emit('image', this.base64)
    }
  },
  mounted () {
    const vm = this
    this.sockets.subscribe('result', data => {
      vm.updateProcess(1, 'done')
      vm.updateProcess(2, 'done', '热导率：' + data)
      vm.message = '计算完成'
      vm.result = data
    })
  }
}
</script>

<style lang="scss">
.image-show {
  max-width: 512px;
  max-height: 512px;
}
</style>
