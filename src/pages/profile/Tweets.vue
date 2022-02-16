<template>
  <q-list class="q-gutter-sm">
    <div class="text-h6 text-weight-bold q-px-md">
      <p>Who to follow</p>
    </div>
    <q-item class="bg-grey-1" v-for="(account, i) in accountList" :key="i">
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
  </q-list>
</template>

<script setup>
import { reactive } from 'vue'
const accountList = reactive([{
      name: "Mark Zuckerberg",
      username: "@metamark",
      avatar: "/img/follow/mark_zuckerberg.jpg",
      desc: "programmer, entrepreneur, tech billionaire, facebook co-founder and CEO",
      isFollowing: true,
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
      isFollowing: true,
}]);
</script>

