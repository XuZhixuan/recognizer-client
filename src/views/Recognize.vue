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
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Recognize',
  data () {
    return {
      image: null,
      base64: '',
      result: null,
      message: '就绪'
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
    calculate () {
      const vm = this

      this.uploadImg().then(res => {
        vm.message = '正在计算！'
      }).catch(e => {
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
