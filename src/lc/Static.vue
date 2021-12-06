<template>
  <div class="lc_content">
    <div class="import-excel">
      <h2 class="main_title">Статистика по курсам</h2>
      <button class="import_btn">ЕКСПОРТ В EXCEL</button>
    </div>
    <TableStatisticCurses />
    <div class="import-excel" style="margin-top: 40px">
      <h2 class="main_title">Статистика по вебінарам</h2>
      <button class="import_btn">ЕКСПОРТ В EXCEL</button>
    </div>
    <TableVebinar />
<!--    <div class="table_static_wrapper">-->
<!--      <div class="import-excel">-->
<!--        <h2 class="main_title">Статистика по подіях</h2>-->
<!--        <button class="import_btn">ЕКСПОРТ В EXCEL</button>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script>
import TableStatisticCurses from '@/components/TableStatisticCurses.vue'
import TableVebinar from '@/components/TableVebinar'

export default {
  components: {
    TableStatisticCurses,
    TableVebinar
  }
}
</script>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
