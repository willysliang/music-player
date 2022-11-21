<!--
 * @ Author: willysliang
 * @ Create Time: 2022-11-21 15:38:28
 * @ Modified by: willysliang
 * @ Modified time: 2022-11-21 17:37:45
 * @ Description: 多数据拼接复制场景
 -->

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'

const tableData = reactive([
  {
    province: '上海市',
    city: '浦东新区',
    name: '王小虎1',
    address: '上海市普陀区金沙江路 1518 弄',
    edit: false,
  },
  {
    province: '上海市',
    city: '浦东新区',
    name: '王小虎2',
    address: '上海市普陀区金沙江路 1517 弄',
    edit: false,
  },
  {
    province: '上海市',
    city: '浦东新区',
    name: '王小虎3',
    address: '上海市普陀区金沙江路 1519 弄',
    edit: false,
  },
  {
    province: '上海市',
    city: '浦东新区',
    name: '王小虎4',
    address: '上海市普陀区金沙江路 1516 弄',
    edit: true,
  },
])

/**
 * @description  useXXX写法,代替mixin有待改进的地方
 * */
const checkEmpty = (row: any) => {
  const result = Object.keys(row).some((key) => row[key] === '')
  return result
}
const handleSave = (index: any, row: any): boolean => {
  if (checkEmpty(row)) {
    ElMessage.warning('保存前请完善信息！')
    return false
  }
  tableData[index].edit = false
  tableData[index] = row
  return true
}
/**
 * @description 新增一条记录
 * */
const handleAddRecord = () => {
  tableData.push({
    province: '',
    city: '',
    name: '',
    address: '',
    edit: true,
  })
}
</script>

<template>
  <!-- 多数据拼接复制场景 -->
  <el-row>
    <el-col :offset="1" :span="22">
      <el-card>
        <template #header>
          <div class="flex flex-row items-center justify-between">
            <span class="text-base">多数据拼接复制场景</span>
          </div>
        </template>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column label="姓名" width="180">
            <template #default="scope">
              <el-popover effect="light" trigger="hover" placement="top">
                <template #default>
                  <p>姓名: {{ scope.row.name }}</p>
                  <p>住址: {{ scope.row.address }}</p>
                </template>
                <template #reference>
                  <el-input
                    v-if="scope.row.edit"
                    v-model="scope.row.name"
                  ></el-input>
                  <div v-else class="name-wrapper">
                    <el-tag>{{ scope.row.name }}</el-tag>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
            <template #default="scope">
              <el-input
                v-if="scope.row.edit"
                v-model="scope.row.province"
              ></el-input>
              <span v-else>{{ scope.row.province }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
            <template #default="scope">
              <el-input
                v-if="scope.row.edit"
                v-model="scope.row.city"
              ></el-input>
              <span v-else>{{ scope.row.city }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="详细地址">
            <template #default="scope">
              <el-input
                v-if="scope.row.edit"
                v-model="scope.row.address"
              ></el-input>
              <span v-else>{{ scope.row.address }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="scope">
              <el-button
                v-if="scope.row.edit"
                type="success"
                plain
                @click="handleSave(scope.$index, scope.row)"
              >
                <el-icon><check /></el-icon>
                保存</el-button
              >

              <el-button v-else type="info" plain>
                <el-icon><copy-document /></el-icon>
                复制</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="margin: 5px">
          <el-button @click="handleAddRecord">+ 新增记录</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
