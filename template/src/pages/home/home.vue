<template>
  <q-page class="home group">
    <div class="user-data">
      <div class="row">
        <div class="col-6">
          <q-field
            icon="cloud"
            label="Your Gmail"
            helper="Helper"
            :error="mailHasError"
            error-label="We need a valid email"
            :count="10"
          >
            <q-input suffix="@gmail.com" v-model="mail" />
          </q-field>
        </div>
        <div class="q-ml-md col-2 self-center">
          <q-btn color="primary" label="提交" @click="onSubmit"></q-btn>
        </div>
      </div>
    </div>
    <br>
    <hr>
    <br>
    <div class="row">
      <div class="col-6">
        <Detail :data="selectedItem"></Detail>
      </div>
    </div>
    <br>
    <hr>
    <br>
    <div class="row justify-center">
      <q-table
        class="table"
        title="Posts"
        :data="lists"
        :columns="columns"
        selection="single"
        :selected.sync="selectedRow"
        row-key="id">
      </q-table>
    </div>
  </q-page>
</template>

<script>
  import {mapState} from 'vuex'
  import Detail from './Detail'
  import homeService from '../../services/home'

  export default {
    name: 'home',
    components: {
      Detail,
    },
    data: () => ({
      pageNo: 1,
      pageSize: 20,
      lists: [],
      columns: [
        {
          name: 'userId',
          required: true,
          label: '用户 ID',
          align: 'left',
          field: 'userId',
          sortable: true,
          classes: 'my-class',
        },
        {
          name: 'id',
          label: 'ID',
          align: 'left',
          field: 'id',
        },
        {
          name: 'title',
          required: true,
          label: '名称',
          align: 'left',
          field: 'title',
        },
      ],
      mail: '',
      mailHasError: false,
      selectedRow: [],
    }),
    computed: {
      ...mapState({
        shopId: state => state.root.shopId,
      }),
      selectedItem() {
        if (this.selectedRow.length > 0) {
          return this.selectedRow[0]
        } else {
          return {}
        }
      },
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        this.getShopId()
        this.getList()
      },
      async getShopId() {
        try {
          // 请求 shopId

          // 拿到的 shopId 设置到全局 store 中
          this.$store.commit('root/setShopId', 3)
        } catch (e) {
          this.$q.dialog({ message: e })
        }
      },
      async getList() {
        try {
          const { data } = await homeService.getList(this.pageNo, this.pageSize)
          this.lists = data || []
        } catch (e) {
          this.$q.dialog({ message: e })
        }
      },
      onSubmit() {
        this.mailHasError = this.mail === ''
      },
    },
  }
</script>
<style scoped>
  .table {
    width: 500px;
  }
</style>
