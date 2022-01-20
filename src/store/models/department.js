import api from '../apiUtil'

// 초기값 선언
const stateInit = {
  Department: {
    id: null,
    name: null,
    code: null,
    description: null,
    createdAt: null,
    updatedAt: null
  }
}

export default {
  state: {
    DepartmentList: [],
    Department: { ...stateInit.Department },
    InsertedResult: null // 입력처리 후 결과
  },
  getters: {
    DepartmentList: state => state.DepartmentList,
    Department: state => state.Department,
    DepartmentInsertedResult: state => state.InsertedResult
  },
  mutations: {
    setDepartmentList(state, data) {
      state.DepartmentList = data
    },
    setDepartment(state, data) {
      state.Department = data
    },
    setInsertedResult(state, data) {
      state.InsertedResult = data
    }
  },
  actions: {
    // 부서 리스트 조회
    actDepartmentList(context, payload) {
      /* 테스트 데이터 세팅 */
      const departmentList = [
        { id: 1, name: '개발팀', code: 'dev', createdAt: '2021-12-01T00:00:00.000Z' },
        { id: 2, name: '영업팀', code: 'sales', createdAt: '2021-12-01T00:00:00.000Z' }
      ]
      context.commit('setDepartmentList', departmentList)

      /* RestAPI 호출 */
      /*
      api.get('/serverApi/departments').then(response => {
        const departmentList = response && response.data
        context.commit('setDepartmentList', departmentList)
      })
      */
    },
    // 부서 입력
    actDepartmentInsert(context, payload) {
      // 상태값 초기화
      context.commit('setInsertedResult', null)

      /* 테스트 데이터 세팅 */
      setTimeout(() => {
        const insertedResult = 1
        context.commit('setInsertedResult', insertedResult)
      }, 300) // state값의 변화를 감지하기 위하여 일부러 지연 시켰다.

      /* RestAPI 호출 */
      /*
      api.post('/serverApi/departments').then(response => {
        const insertedResult = response && response.insertedId
        context.commit('setInsertedResult', insertedResult)
      })
      */
    }
  }
}
