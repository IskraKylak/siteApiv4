<template>
  <div class="container">

    <div class="profile_success">
      <router-link to="/lc-events" class="back_btn" >Назад</router-link>
    </div>
    <h1 class="title_event">Редагування події</h1>

    <div class="draft">
      <input type="checkbox" class="checkbox" id="checkbox"/>
      <label for="checkbox">Чернетка</label>
    </div>

    <p class="dropzone_title">Мова</p>
    <div class="radio_block radio_block1_update_evenets">
      <div class="radio radio_item">
        <input class="custom-radio" type="radio" id="color-1" name="color" value="indigo">
        <label for="color-1">Український</label>
      </div>

      <div class="radio radio_item">
        <input class="custom-radio" type="radio" id="color-2" name="color" value="red">
        <label for="color-2">Русский</label>
      </div>

      <div class="radio radio_item">
        <input class="custom-radio" type="radio" id="color-3" name="color" value="brown">
        <label for="color-3">English</label>
      </div>
    </div>

    <div class="radio_block">
      <input type="checkbox" class="custom-checkbox" id="happy" name="happy" value="yes">
      <label for="happy">Закрита подія</label>
    </div>


    <fieldset>
      <legend>Назва події *</legend>
      <input type="text" class="profile_input" required>
    </fieldset>
    <p class="dropzone_title">Подія</p>
    <div class="radio_block radio_block1_update_evenets">
      <div class="radio radio_item">
        <input class="custom-radio" type="radio" id="nofree" name="color" value="indigo">
        <label for="nofree">Платное</label>
      </div>

      <div class="radio radio_item">
        <input class="custom-radio" type="radio" id="free" name="color" value="red">
        <label for="free">Бесплатное</label>
      </div>
    </div>
    <fieldset>
      <legend>Вартість події *</legend>
      <input type="text" class="profile_input" required>
    </fieldset>

    <textarea class="event_desc events_textarea">Next, use our Get Started docs to setup Tiny!</textarea>

    <fieldset>
      <legend>Дати проведення події (Початок)</legend>
      <input type="date" class="profile_input">
    </fieldset>

    <fieldset>
      <legend>Дати проведення події (Кінець)</legend>
      <input type="date" class="profile_input">
    </fieldset>

    <fieldset>
      <legend>Дата закриття доступу до тестування</legend>
      <input type="date" class="profile_input">
    </fieldset>

    <p class="dropzone_title">Файл для події</p>
    <form class="dropzone dz-clickable dropzone_event" action="upload.php" enctype='multipart/form-data'>
      <div class="cloud_dropzone">
        <i class="fa fa-cloud-upload element"></i>
      </div>
      <input type="hidden" name="filenameEmail" class="filenameEmail" value="">
      <input type="hidden" name="side" value="front">
    </form>
    <p class="dropzone_title">Зображення для сторінки події</p>
    <form class="dropzone dz-clickable dropzone_event" action="upload.php" enctype='multipart/form-data'>
      <div class="cloud_dropzone">
        <i class="fa fa-cloud-upload element"></i>
      </div>
      <input type="hidden" name="filenameEmail" class="filenameEmail" value="">
      <input type="hidden" name="side" value="front">
    </form>


    <fieldset>
      <legend>Холл А</legend>
      <input type="text" class="profile_input">
    </fieldset>
    <fieldset>
      <legend>Холл Б</legend>
      <input type="text" class="profile_input">
    </fieldset>
    <fieldset>
      <legend>Балів за подію</legend>
      <input type="text" class="profile_input">
    </fieldset>

    <fieldset>
      <legend>Процент правильних відповідей для проходження тесту</legend>
      <input type="text" class="profile_input">
    </fieldset>

    <fieldset>
      <legend>Кількість спроб пройти тестування (0 - безліч)</legend>
      <input type="text" class="profile_input">
    </fieldset>

    <textarea class="event_desc events_textarea">Next, use our Get Started docs to setup Tiny!</textarea>

    <fieldset>
      <legend>Кількість спроб пройти тестування (0 - безліч)</legend>
      <input type="text" class="profile_input">
    </fieldset>
    <fieldset>
      <legend>Максимальна кількість глядачів</legend>
      <input type="number" class="profile_input">
    </fieldset>
    <form class="dropzone dz-clickable dropzone_event" action="upload.php" enctype='multipart/form-data'>
      <div class="cloud_dropzone">
        <i class="fa fa-cloud-upload element"></i>
      </div>
      <input type="hidden" name="filenameEmail" class="filenameEmail" value="">
      <input type="hidden" name="side" value="front">
    </form>

    <div class="profile_success success_file">
      <button class="profile_btn" type="submit">Зберегти</button>
    </div>

    <div class="update_block">
      <button class="back_btn">Редагування тесту до події</button>
      <button class="back_btn">Редагувати опитування</button>
    </div>

    <h1 class="title_update_table_events">Список партнеров</h1>
    <table id="table_id1" class="display ">
      <thead>
      <tr>
        <th>ID</th>
        <th>Назва</th>
        <th>Порядок</th>
        <th>Дії</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>МІЖНАРОДНИЙ САМІТ СУЧАСНИХ ПІДХОДІВ ЛІКУВАННЯ ВНУТРШ</td>
        <td></td>
        <td>
          <div class="events_item-block"><a class="events_item" href=""><i
            class="fas fa-trash-restore-alt"></i></a><a class="events_item"
                                                        href="update_events.html"><i class="fas fa-pencil-alt"></i></a>
          </div>
        </td>
      </tr>
      <tr>
        <td>1</td>
        <td>МІЖНАРОДНИЙ САМІТ СУЧАСНИХ ПІДХОДІВ ЛІКУВАННЯ ВНУТРШ</td>
        <td>sadasd</td>
        <td>
          <div class="events_item-block"><a class="events_item" href=""><i
            class="fas fa-trash-restore-alt"></i></a><a class="events_item"
                                                        href="update_events.html"><i class="fas fa-pencil-alt"></i></a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <button class="back_btn t" onclick="$('#exampleModal1').arcticmodal();">Добавить нового партнера</button>
  </div>
</template>
<style scoped src="@/assets/lc/css/style.min.css">
</style>
