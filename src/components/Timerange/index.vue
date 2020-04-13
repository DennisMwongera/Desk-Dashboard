  <template>
  <el-form-item label="Activity zone">
        <el-select v-model="form.time" placeholder="please select Time">
          <el-option label="Jan-Feb" value="shanghai" />
          <el-option label="March-April" value="beijing" />
          <el-option label="May-June" value="beijing" />
          <el-option label="July-August" value="beijing" />
          <el-option label="Sep-October" value="beijing" />
          <el-option label="November-December" value="beijing" />
        </el-select>
      </el-form-item>
</template>

<script>
export default {
    data () {
        return{
            form:{
            time: ''
            }
        }
    }
}
</script>

    