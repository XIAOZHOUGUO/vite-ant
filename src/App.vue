<template>
  <a-config-provider :locale="locale">
    <img alt="Vue logo" src="./assets/logo.png" />
    <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
    <a-empty />
    <a-date-picker v-model:value="date" />
    <section style="width: 60%; margin: 10px auto;">
      <a-table
        rowKey="test"
        bordered
        :columns="tableColumns"
        :dataSource="data"
        :loading="loading"
        :pagination="pagination"
        @change="tableChangeHandler"
      ></a-table>
    </section>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
// ant-design-vue 目前的默认文案是英文, 修改为中文
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment, { Moment } from 'moment';

import 'moment/dist/locale/zh-cn';
import { ColumnProps } from 'ant-design-vue/es/table/interface';
import { getTableData } from './apis/test';

import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup: () => {
    const locale = ref(zhCN);
    // TODO moment 替换成 dayjs 并使用中文
    const date = ref<Moment>(moment());
    const tableColumns: ColumnProps[] = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '中文名',
        dataIndex: 'cname',
        key: 'cname',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '邮箱📫',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    const aboutTable = reactive({
      loading: false,
      data: [],
    });
    const tableChangeHandler = (
      pagination: any,
      filters: any,
      sorter: any,
      { currentDataSource }: { currentDataSource: any }
    ) => {};
    /** 分页器 pagination 配置 */
    const pagination = reactive({
      current: 1,
      pageSize: 10,
      total: 0,
      showQuickJumper: true,
      showSizeChanger: true,
      hideOnSinglePage: true,
      showTotal: (total: number) => `共 ${total}条数据`,
      onChange: (page: number, pageSize: number) => {
        pagination.pageSize = pageSize;
        pagination.current = page;
        fetchTableData();
      },
      onShowSizeChange: (current: number, size: number) => {
        pagination.current = current;
        pagination.pageSize = size;
        fetchTableData();
      },
    });
    /** 获取表格数据 */
    const fetchTableData = () => {
      aboutTable.loading = true;
      const params = {
        page: pagination.current,
        size: pagination.pageSize,
      };
      getTableData(params)
        .then(res => {
          aboutTable.data = res.list || [];
          pagination.total = res.total || 0;
        })
        .finally(() => {
          aboutTable.loading = false;
        });
    };

    onMounted(() => {
      fetchTableData();
    });
    return {
      locale,
      date,
      ...toRefs(aboutTable),
      tableColumns,
      pagination,
      tableChangeHandler,
    };
  },
});
</script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
</style>
