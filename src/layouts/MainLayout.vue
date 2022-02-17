<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn icon="keyboard_backspace" round  size="sm" onclick="window.history.go(-1); return false;" />

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="q-mx-md lt-md" />

        <q-toolbar-title class="text-weight-bold">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          <span class="route-name gt-sm">{{$route.name}}</span>
          <q-icon name="fas fa-dove" size="sm" color="primary" class="header-icon q-pa-md lt-md" />
        </q-toolbar-title>

         <q-btn dense flat round icon="menu" @click="toggleRightDrawer" class="q-mx-md lt-md" />

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="300">
      <q-item-section class="q-py-md">
        <a href="/">
          <img src="/icons/twitter.svg" alt="twitter_icon" width="40" class="q-ml-lg" />
        </a>
      </q-item-section>
      <!-- <img src="/icons/twitter.svg" alt="twitter_icon" /> -->

      <q-list bordered class="nav-left">
        <q-item to="/" clickable v-ripple exact>
          <q-item-section avatar>
            <q-icon name="home" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>

        <q-item to="/explore" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="tag" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Explore</q-item-section>
        </q-item>

        <q-item to="/notifications" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="notifications_none" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Notifications</q-item-section>
        </q-item>

        <q-item to="/messages" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="mail_outline" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Messages</q-item-section>
        </q-item>

        <q-item to="/bookmarks" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="bookmark_border" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Bookmarks</q-item-section>
        </q-item>

        <q-item to="/lists" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="list_alt" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Lists</q-item-section>
        </q-item>

        <q-item to="/profile" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" size="sm"/>
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold">Profile</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="more_horiz" size="sm"/>
          </q-item-section>
          <q-item-section class="text-weight-bold text-capitalize text-h6">
            More
            <q-menu>
              <q-list>
                <q-item v-for="(item, i) in moreList" :key="i" v-close-popup clickable class="flex items-center">
                  <q-icon :name="item.icon" class="q-mr-sm" />
                  <q-item-section>{{ item.lable }}</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-item-section>
        </q-item>
    </q-list>
    <div class="flex justify-center q-my-md">
        <q-btn no-caps :ripple="{ color: 'yellow' }" rounded color="blue-7" label="Post new tweet" class="no-shadow" padding="sm lg" to="/" />
    </div>
    <q-list class="absolute-bottom">
      <q-item class="cursor-pointer flex justify-between items-center q-px-lg">
        <q-icon name="account_circle" size="lg" />
        <q-item-section>
          <q-item-label class="text-weight-medium">Thuong Truong</q-item-label>
          <q-item-label caption>@thuongtruong1009</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption><q-btn flat round :color="isMore ? 'primary' : 'grey-5'" icon="more_horiz" @mouseover="hoverMore(true)"
    @mouseout="hoverMore(false)" /></q-item-label>
        </q-item-section>

        <q-menu>
          <q-list>
            <q-item class="cursor-pointer flex justify-between items-center q-px-sm" to="/profile">
              <q-icon name="account_circle" size="lg" />
              <q-item-section>
                <q-item-label class="text-weight-medium">Thuong Truong</q-item-label>
                <q-item-label caption>@thuongtruong1009</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption><q-btn flat round color="primary" icon="done" @mouseover="hoverMore(true)"
          @mouseout="hoverMore(false)" /></q-item-label>
              </q-item-section>
            </q-item>
            <q-separator color="grey-2" />
            <q-item v-close-popup clickable>
              <q-item-section>Add an existing account</q-item-section>
            </q-item>
            <q-item v-close-popup clickable>
              <q-item-section>Logout @thuongtruong1009</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered :width="500" class="row">
      <div class="col-9 q-gutter-md q-pa-md">
        <q-input outlined rounded dense class="bg-grey-1" placeholder="Search twitter...">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-list padding separator class="you-might-like-container bg-grey-2">
            <q-item class="q-pa-md">
              <q-item-section>
                <q-item-label overline class="text-grey">Education</q-item-label>
                <q-item-label class="text-weight-bold">Somethings amazing happend</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>

            <q-item class="q-pa-md">
              <q-item-section>
                <q-item-label overline class="text-grey">Education</q-item-label>
                <q-item-label class="text-weight-bold">Somethings amazing happend</q-item-label>
                <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
              </q-item-section>
            </q-item>
            <p class="text-blue q-px-md cursor-pointer">Show more</p>
          </q-list>
          <Trend />
        </div>
      <div class="col-3 q-gutter-md q-py-sm">
          <div>
            <q-toggle
              v-model="first"
              icon="wb_sunny"
              label="light"
            />
            <q-toggle
              v-model="second"
              color="pink"
              icon="notifications_active"
              label="notify"
            />
            </div>
          <div class="flex justify-around items-center">
            <a href="mailto:ititiu19228@student.hcmiu.edu.vn"><q-btn round color="secondary" glossy icon="email" /></a>
            <a href="https://github.com/thuongtruong1009/twitter-meta"><q-btn round color="purple" glossy icon="fab fa-github" /></a>
          </div>
          <div class="custom-link">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Privacy</p>
            <p>Accessibility</p>
            <p>Ads info</p>
            <p>More...</p>
          </div>
          <p class="company">@2022 Twitter, Inc</p>
      </div>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import Trend from "../components/Trend.vue"

const leftDrawerOpen = ref(false)
const rightDrawerOpen = ref(false)
const toggleLeftDrawer = () => {
    leftDrawerOpen.value = !leftDrawerOpen.value
  };
const toggleRightDrawer = () => {
    rightDrawerOpen.value = !rightDrawerOpen.value
};
const moreList = reactive([{
      lable: "Topics",
      icon: "assistant_photo",
},
{
      lable: "Moments",
      icon: "timeline",
},
{
      lable: "Newsletters",
      icon: "description",
},
{
      lable: "Twitter for Professionals",
      icon: "rocket_launch",
},
{
      lable: "Twitter Ads",
      icon: "open_in_new",
},
{
      lable: "Analytics",
      icon: "equalizer",
},
{
      lable: "Settings and privacy",
      icon: "verified_user",
},
{
      lable: "Help Center",
      icon: "help_outline",
},
{
      lable: "Display",
      icon: "brush",
},
{
      lable: "Keyboard shortcuts",
      icon: "accessibility_new",
}]);

const first = ref(true);
const second = ref(true);
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Supermercado+One&display=swap');
.route-name{
  font-family: 'Supermercado One', cursive;
  color: #2c3591;
  font-weight: 400;
  text-shadow: #ab6f79 0px 3px 3px;
  font-size: 1.7rem;
}
.header-icon{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-505);
}
.nav-left{
  padding: 1rem;
  .q-item{
    border-radius: 2rem;
  }
}
.you-might-like-container{
  border-radius: 1rem;
}
.custom-link > p, .company{
  cursor: pointer;
  font-size: 0.75rem;
}
.custom-link > p:hover, .company:hover{
  color: $primary;
}
</style>
