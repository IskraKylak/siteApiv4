<template>
  <div class="wrap_table_component">
    <div class="wrap_search">
      <input type="search" class="input px:width-25" placeholder="Пошук" v-model="searchInput"
             @keyup="searchEvent">
    </div>

    <div class="wrap_table">
      <div class="table table_vebinar">
        <div class="thead">
          <div class="tr">
            <div class="th" v-for="th in columns" :key="th">
              <div>
                <span @click.prevent="sortByColumn(th.name)">{{ th.text }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="tbody">
          <div class="tr" v-for="td in filteredEntries" :key="td">
            <div class="td">{{ td.id }}</div>
            <div class="td">{{ td.name }}</div>
            <div class="td">{{ td.testing }}</div>
            <div class="td">{{ td.sertuficat }}</div>
            <div class="td">{{ td.register }}</div>
            <div class="td">{{ td.online }}</div>
            <div class="td">{{ td.anonim }}</div>
            <div class="td">{{ td.avtorizate }}</div>
            <div class="td">
            <span class="icon_svg_table icon_svg_table_edit">
              <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
                d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
            </span>
            </div>
          </div>
        </div>
      </div>
      <div class="table_foot">
        <div class="table_length">
          Total Rows: {{ entries.length }}
        </div>
        <div class="table_visible_page">
          <div>
            <span>Rows per page:</span>
            <select v-model="currentEntries" class="select" @change="paginateEntries">
              <option v-for="se in showEntries" :key="se" :value="se">{{ se }}</option>
            </select>
          </div>
          <div>
            <div class="start:flex-items">{{ showInfo.from }} - {{ showInfo.to }} of {{ showInfo.of }} entries</div>
          </div>
          <div class="pagination_arr">
            <span :class="['nav-item', { 'disabled': currentPage === 1 }]">
              <a href="#" class="nav-link"
                 @click.prevent="(currentPage < 1) ? currentPage = 1 : currentPage -= 1, paginateEntries()">
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
                  d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>
              </a>
            </span>
            <span :class="['nav-item', { 'disabled': currentPage === allPages }]">
              <a href="#" class="nav-link"
                 @click.prevent="(currentPage > allPages) ? currentPage = allPages : currentPage += 1, paginateEntries()">
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
                  d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { $array } from 'alga-js'

export default {
  name: 'TableVebinar',
  data () {
    return {
      columns: [
        {
          name: 'id',
          text: 'ID'
        },
        {
          name: 'name',
          text: 'Назва курсу'
        },
        {
          name: 'testing',
          text: 'Тестувань'
        },
        {
          name: 'sertuficat',
          text: 'Отримано сертифікатів'
        },
        {
          name: 'register',
          text: 'Зареєстровано'
        },
        {
          name: 'online',
          text: 'Онлайн'
        },
        {
          name: 'anonim',
          text: 'Онлайн анонімно'
        },
        {
          name: 'avtorizate',
          text: 'Онлайн авторизованих'
        },
        {
          name: 'action',
          text: 'Дії'
        }
      ],
      entries: [],
      showEntries: [5, 10, 25, 50, 100],
      currentEntries: 10,
      filteredEntries: [],
      currentPage: 1,
      allPages: 1,
      searchInput: '',
      searchEntries: [],
      col: {
        id: '',
        name: '',
        testing: '',
        sertuficat: '',
        register: '',
        online: '',
        anonim: '',
        avtorizate: '',
        action: ''
      },
      sortcol: {
        id: '',
        name: '',
        testing: '',
        sertuficat: '',
        register: '',
        online: '',
        anonim: '',
        avtorizate: '',
        action: ''
      }
    }
  },
  computed: {
    showInfo () {
      const getCurrentEntries = (this.searchEntries.length <= 0) ? this.entries : this.searchEntries
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      // this.allPages = $array.pages(this.entries, this.currentEntries)
      return $array.show(getCurrentEntries, this.currentPage, this.currentEntries)
    },
    showPagination () {
      return $array.pagination(this.allPages, this.currentPage, 3)
    }
  },
  created () {
    const res = [
      {
        id: 1,
        name: 'Менеджемент хронічних кольпітів',
        testing: '41',
        sertuficat: '29',
        register: '13',
        online: '0',
        anonim: '0',
        avtorizate: '0'
      }
    ]
    this.entries = res
    // this.paginateData(this.entries)
    this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
    this.allPages = $array.pages(this.entries, this.currentEntries)
  },
  methods: {
    paginateEntries () {
      if (this.searchInput.length >= 3) {
        this.searchEntries = $array.search(this.entries, this.searchInput)
        this.paginateData(this.searchEntries)
        // this.filteredEntries = $array.paginate(this.searchEntries, this.currentPage, this.currentEntries)
        // this.allPages = $array.pages(this.searchEntries, this.currentEntries)
      } else {
        this.searchEntries = []
        // this.filteredEntries = $array.paginate(this.entries, this.currentPage, this.currentEntries)
        // this.allPages = $array.pages(this.entries, this.currentEntries)
        this.searchEntries = []
        this.paginateData(this.entries)
        this.col = {
          name: '',
          position: '',
          office: '',
          extension: '',
          startdate: '',
          salary: ''
        }
      }
    },
    paginateData (data) {
      this.filteredEntries = $array.paginate(data, this.currentPage, this.currentEntries)
      this.allPages = $array.pages(data, this.currentEntries)
    },
    paginateEvent (page) {
      this.currentPage = page
      this.paginateEntries()
    },
    searchEvent () {
      this.currentPage = 1
      this.paginateEntries()
    },
    getCurrentEntries () {
      return (this.searchEntries.length <= 0) ? this.entries : this.searchEntries
    },
    sortByColumn (column) {
      this.col = {
        name: '',
        position: '',
        office: '',
        extension: '',
        startdate: '',
        salary: ''
      }
      let sortedEntries = this.getCurrentEntries()
      const sortedColumn = this.sortcol[column]
      if (sortedColumn === '') {
        this.sortcol[column] = 'asc'
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, 'asc')
      } else if (sortedColumn === 'asc') {
        this.sortcol[column] = 'desc'
        sortedEntries = $array.sorted(this.getCurrentEntries(), column, 'desc')
      } else if (sortedColumn === 'desc') {
        this.sortcol[column] = ''
      }
      this.paginateData(sortedEntries)
    }
  }
}
</script>
<style scoped src="@/assets/lc/css/table.css">
</style>
