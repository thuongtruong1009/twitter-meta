<template>
  <q-page>
    <q-scroll-area
      :thumb-style="thumbStyleList"
      :content-style="contentStyleList"
      :content-active-style="contentActiveStyleList"
      style="height: 40rem; max-width: 100%;">
    <div>
      <p class="q-mt-none text-weight-bold text-h6 q-pa-lg">Pinned Lists</p>
      <p class="q-pa-md text-grey">Nothing to see here yet — pin your favorite Lists to access them quickly.</p>
    </div>
    <q-separator />
    <div class="q-pa-lg">
      <p class="q-mt-none text-weight-bold text-h6">Discover new Lists</p>
      <q-item v-for="(account, i) in accountList" :key="i">
        <q-item-section top avatar>
          <q-avatar>
            <img :src="account.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">{{ account.name }}</q-item-label>
          <q-item-label caption>{{ account.username }}</q-item-label>
          <q-item-label class="text-grey-8">{{ account.desc }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn outline rounded color="black" label="Following" class="text-weight-medium text-sm text-capitalize" v-if="account.isFollowing === true" />
          <q-btn unelevated rounded color="black" label="Follow" class="text-capitalize" v-if="account.isFollowing === false" />
        </q-item-section>
      </q-item>
      <p class="text-blue q-px-md cursor-pointer">Show more</p>
    </div>
    <q-separator />
    <div class="q-pa-lg">
      <p class="q-mt-none text-weight-bold text-h6">Your Lists</p>
      <q-item v-for="(account, i) in accountList" :key="i">
        <q-item-section top avatar>
          <q-avatar>
            <img :src="account.avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-bold">{{ account.name }}</q-item-label>
          <q-item-label caption>{{ account.username }}</q-item-label>
          <q-item-label class="text-grey-8">{{ account.desc }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-btn outline rounded color="black" label="Following" class="text-weight-medium text-sm text-capitalize" v-if="account.isFollowing === true" />
          <q-btn unelevated rounded color="black" label="Follow" class="text-capitalize" v-if="account.isFollowing === false" />
        </q-item-section>
      </q-item>
      <p class="text-blue q-px-md cursor-pointer">Show more</p>
    </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup>
import { reactive } from 'vue'
const accountList = reactive([{
      name: "Mark Zuckerberg",
      username: "@metamark",
      avatar: "/img/follow/mark_zuckerberg.jpg",
      desc: "programmer, entrepreneur, tech billionaire, facebook co-founder and CEO",
      isFollowing: false,
},
{
      name: "Manchester United",
      username: "@muchampion",
      avatar: "/img/follow/manchester_united.jpg",
      desc: "Red Devils in London in the English Premier League, eager to conquer the title",
      isFollowing: false,
},
{
      name: "Critiano Ronaldo",
      username: "@cristiano7",
      avatar: "/img/follow/cristiano_ronaldo.jpg",
      desc: "professional athlete, Portuguese football superstar",
      isFollowing: false,
}]);
const contentStyleList = {
  color: '#555'
};

const contentActiveStyleList = {
  color: 'black'
};

const thumbStyleList = {
  right: '0px',
  borderRadius: '5px',
  backgroundColor: '#027be3',
  width: '3px',
  opacity: 0.7
};
</script>
