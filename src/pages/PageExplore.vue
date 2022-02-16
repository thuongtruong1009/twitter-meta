<template>
  <q-page>
    <q-scroll-area
      :thumb-style="thumbStyleExplore"
      :content-style="contentStyleExplore"
      :content-active-style="contentActiveStyleExplore"
      style="height: 40rem; max-width: 100%;">
    <p class="q-mt-none q-mb-md text-weight-bold text-h6 q-pa-lg">What's happening</p>
    <div v-for="(sports, i) in sportsList" :key="i" class="q-mb-sm q-px-lg">
      <div class="flex justify-between items-end">
        <p><b>Sport</b></p>
        <p><b>Final</b> &bull; {{ sports.won }} won</p>
      </div>
      <div class="flex justify-between items-center text-white text-weight-medium q-px-sm q-py-xs" :class="[`bg-${sports.color1}`]">
        <p class="flex items-end"><img :src="sports.flag1" alt="flag-team1" style="height: 2rem; max-width: 2rem; border-radius: 50%; margin-right: 0.5rem;">{{ sports.team1 }}</p>
        <p>{{ sports.score1 }}</p>
      </div>
      <div class="flex justify-between items-center text-white text-weight-medium q-px-sm q-py-xs rounded-xl" :class="[`bg-${sports.color2}`]">
        <p class="flex items-end"><img :src="sports.flag2" alt="flag-team2" style="height: 2rem; max-width: 2rem; border-radius: 50%; margin-right: 0.5rem;">{{ sports.team2 }}</p>
        <p>{{ sports.score2 }}</p>
      </div>
    </div>
    <div class="q-gutter-sm q-mt-sm q-px-lg">
      <q-field standout="bg-teal text-white" class="flex justify-between items-start cursor-pointer" :label="`${news.source} &bull; ${news.status}`" stack-label v-for="(news, i) in newsList" :key="i">
        <template v-slot:control>
          <div class="full-width no-outline text-weight-medium" tabindex="0">{{ news.title }}</div>
        </template>
        <q-img :src="news.url" style="height: 6rem; max-width: 6rem; border-radius: 0.5rem; margin-bottom: 1rem" />
      </q-field>
    </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
const sportsList = reactive([{
      team1: "Manchester United",
      score1: 3,
      color1: "red-13",
      flag1: "/img/explore/manchester_united.png",
      team2: "Paris Saint German",
      score2: 0,
      color2: "indigo-6",
      flag2: "/img/explore/paris-saint-germain.png",
      won: "MU",

},
{
      team1: "Real Madrid",
      score1: 2,
      color1: "deep-purple-11",
      flag1: "/img/explore/real_madrid.png",
      team2: "Barcelona",
      score2: 1,
      color2: "light-green-14",
      flag2: "/img/explore/barcelona.png",
      won: "RM",

}]);
const newsList = reactive([{
      source: "US national new",
      title: "Federal hate crimes trial begins for Ahmaud Arbery's convicted killers",
      url: "/img/explore/tenis.jpg",
      status: "4 hours ago"
},
{
      source: "Super Bowl LVI",
      title: "Rams WR Cooper Kupp wins Super Bowl LVI MVP award",
      url: "/img/explore/bowl_cup.jfif",
      status: "LIVE"
},
{
      source: "Beijing 2022",
      title: "Beijing 2022: Follow the action at the Winter Olympics",
      url: "/img/explore/winter_olympic.jpg",
      status: "2 hours ago"
}]);
const thumbStyleExplore = {
        right: '0px',
        borderRadius: '9px',
        backgroundColor: '#1DA1F2',
        width: '3px',
        opacity: 0.75
};
const contentStyleExplore = {
  color: '#555'
};

const contentActiveStyleExplore = {
  color: 'black'
};

const thumbStyle = {
  right: '0px',
  borderRadius: '5px',
  backgroundColor: '#027be3',
  width: '3px',
  opacity: 0.7
};
</script>
