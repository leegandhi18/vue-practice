<template>
  <div>
    <h1>부서 관리</h1>
    <div style="margin-bottom: 5px">
      <b-row>
        <b-col style="text-align: left"
          ><b-button variant="primary" size="sm" @click="searchDepartmentList">검색</b-button></b-col
        >
        <b-col style="text-align: right"><b-button variant="success" size="sm">신규등록</b-button></b-col>
      </b-row>
    </div>
    <div>
      <b-table small hover striped :items="departmentList" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: 'id', label: 'id' },
        { key: 'name', label: '부서명' },
        { key: 'code', label: '부서코드' },
        { key: 'createdAt', label: '생성일' }
      ]
    }
  },
  computed: {
    departmentList() {
      return this.$store.getters.DepartmentList
    }
  },
  created() {
    this.searchDepartmentList()
  },
  methods: {
    searchDepartmentList() {
      this.$store.dispatch('actDepartmentList')
    }
  }
}
</script>
