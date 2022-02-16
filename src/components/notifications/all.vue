<template>
  <div class="all-notification-contatiner ">
    <div v-for="i in 5" :key="i">
        <div class="row q-pa-sm">
          <div class="col-auto q-px-sm">
            <q-icon name="star" color="accent" size="md" />
          </div>
          <div class="col-11 q-gutter-xs">
            <div class="flex justify-between items-center">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              <q-btn flat round color="grey" icon="more_horiz" size="md" />
            </div>
            <p>In case you missed <b>XuXu's</b> Tweet.</p>
            <p class="text-grey-8">LET'S DO IT TOGETHER</p>
            <p class="text-grey-6 text-caption">#arcane #vi #pic.twitter.com/sHYs7JOtK2</p>
          </div>
      </div>
      <q-separator />
    </div>
  </div>
</template>
