<template>
  <div class="wrap_table_component">
    <div class="wrap_search">
      <input type="search" class="input px:width-25" placeholder="Пошук" v-model="searchInput"
             @keyup="searchEvent">
    </div>

    <div class="wrap_table">
      <div class="table table_event">
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
          <div class="td">{{ td.date }}</div>
          <div class="td">{{ td.office }}</div>
          <div class="td">
          <router-link to="/lc-updateevents" class="icon_svg_table icon_svg_table_edit">
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
          </router-link>
            <span class="icon_svg_table icon_svg_table_remove">
            <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
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
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>
              </a>
            </span>
            <span :class="['nav-item', { 'disabled': currentPage === allPages }]">
              <a href="#" class="nav-link"
                 @click.prevent="(currentPage > allPages) ? currentPage = allPages : currentPage += 1, paginateEntries()">
                <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
              </a>
            </span>
          </div>
        </div>
        </div>
      </div>
<!--      <div class="between:flex y:margin-3">-->

<!--        <div class="end:flex center:items">-->
<!--          <ul class="pagination:nav">-->
<!--            <li :class="['nav-item', { 'disabled': currentPage === 1 }]">-->
<!--              <a href="#" class="nav-link" @click.prevent="currentPage = 1, paginateEntries()">First</a>-->
<!--            </li>-->
<!--            <li :class="['nav-item', { 'disabled': currentPage === 1 }]">-->
<!--              <a href="#" class="nav-link"-->
<!--                 @click.prevent="(currentPage < 1) ? currentPage = 1 : currentPage -= 1, paginateEntries()">Prev</a>-->
<!--            </li>-->
<!--            <li v-for="pagi in showPagination" :key="pagi"-->
<!--                :class="['nav-item', {'ellipsis': pagi === '...', 'active': pagi === currentPage}]">-->
<!--              <a href="#" class="nav-link" @click.prevent="paginateEvent(pagi)">{{ pagi }}</a>-->
<!--            </li>-->
<!--            <li :class="['nav-item', { 'disabled': currentPage === allPages }]">-->
<!--              <a href="#" class="nav-link"-->
<!--                 @click.prevent="(currentPage > allPages) ? currentPage = allPages : currentPage += 1, paginateEntries()">Next</a>-->
<!--            </li>-->
<!--            <li :class="['nav-item', { 'disabled': currentPage === allPages }]">-->
<!--              <a href="#" class="nav-link" @click.prevent="currentPage = allPages, paginateEntries()">Last</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->
    </div>
</template>
<script>
import { $array } from 'alga-js'

export default {
  name: 'DataTable',
  data () {
    return {
      columns: [
        {
          name: 'id',
          text: 'ID'
        },
        {
          name: 'name',
          text: 'Назва'
        },
        {
          name: 'date',
          text: 'Дата'
        },
        {
          name: 'office',
          text: 'Місце'
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
        date: '',
        office: '',
        action: '',
      },
      sortcol: {
        id: '',
        name: '',
        date: '',
        office: '',
        action: '',
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
        name: 'Семінар «Клінічні рекомендації в загальній практиці сімейного лікаря, терапевта»',
        date: '07.10.2020, 0:00',
        office: ''
      },
      {
        id: 2,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 3,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '23.04.2015, 0:00',
        office: ''
      },
      {
        id: 4,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 5,
        name: 'Семінар «Клінічні рекомендації в загальній практиці сімейного лікаря, терапевта»',
        date: '07.10.2020, 0:00',
        office: ''
      },
      {
        id: 6,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 7,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '23.04.2015, 0:00',
        office: ''
      },
      {
        id: 8,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 9,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 10,
        name: 'Семінар «Клінічні рекомендації в загальній практиці сімейного лікаря, терапевта»',
        date: '07.10.2020, 0:00',
        office: ''
      },
      {
        id: 11,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
      },
      {
        id: 12,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '23.04.2015, 0:00',
        office: ''
      },
      {
        id: 13,
        name: 'Семінар «АКТУАЛЬНІ ПИТАННЯ СІМЕЙНОЇ МЕДИЦИНИ В УКРАЇНІ»',
        date: '04.11.2015, 0:00',
        office: ''
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
