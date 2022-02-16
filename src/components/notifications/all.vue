<template>
  <div class="all-notification-contatiner ">
    <q-scroll-area
      :thumb-style="thumbStyleNotification"
      :content-style="contentStyleNotification"
      :content-active-style="contentActiveStyleNotification"
      style="height: 35rem; max-width: 100%;">
    <div v-for="(notification, i) in notificationAllList" :key="i">
      <div class="row q-pa-sm">
        <div class="col-auto q-px-md">
          <q-icon name="star" color="accent" size="sm" />
        </div>
        <div class="col-11 q-gutter-xs">
          <div class="flex justify-between items-center">
            <q-avatar>
              <img :src="notification.avatar">
            </q-avatar>
            <q-btn flat round color="grey" icon="more_horiz" size="md" />
          </div>
          <p>In case you missed <b>{{ notification.name }}'s</b> Tweet.</p>
          <p class="text-grey-8">{{ notification.title }}</p>
          <p class="text-grey-6 text-caption cursor-pointer">{{ tagToString(notification.tag) }}</p>
          <!-- <p class="text-grey-6 text-caption">#arcane #vi #pic.twitter.com/sHYs7JOtK2</p> -->
        </div>
      </div>
      <q-separator />
    </div>
    </q-scroll-area>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const notificationAllList = reactive([{
    name: "Usaint Bolt",
    avatar: "/img/notification/usaint_bolt.jpg",
    title: "When speed bigger than limitation",
    tag: ["sport", "running", "flash", "jamaica"]
},
{
    name: "Donal Trump",
    avatar: "/img/notification/donal_trump.jpeg",
    title: "When speed bigger than limitation",
    tag: ["unitedstate", "whitehouse"]
},
{
    name: "Vladimir Putin",
    avatar: "/img/notification/putin.jpg",
    title: "When speed bigger than limitation",
    tag: ["president", "russia", "happy"]
},
{
    name: "Lionel Messi",
    avatar: "/img/notification/messi.jpg",
    title: "When speed bigger than limitation",
    tag: ["football", "m30", "psg"]
},
{
    name: "EAsport",
    avatar: "/img/notification/easport.jpg",
    title: "When speed bigger than limitation",
    tag: ["easport", "game", "leagueoflegends", "donate"]
}]);

const tagToString = (array) =>{
  let string = array.toString();
  const result = [];
  array.forEach(element => {
    result.push(" #" + element);
  });
  return result.toString();
}
const contentStyleNotification = {
  color: '#555'
};

const contentActiveStyleNotification = {
  color: 'black'
};

const thumbStyleNotification = {
  right: '0px',
  borderRadius: '5px',
  backgroundColor: '#027be3',
  width: '3px',
  opacity: 0.7
};
</script>

