<template>
  <div class="trend-container bg-grey-2" style="max-width: full">
    <div class="flex justify-between items-center q-px-md q-py-sm">
      <p class="text-weight-bold text-h6">Trends for you</p>
      <q-icon name="settings" size="xs" class="cursor-pointer" />
    </div>
    <q-list>
      <q-item v-for="(trend, i) in trendList" :key="i" class="cursor-pointer">
        <q-item-section>
          <q-item-label caption>Trending in {{ trend.country }}</q-item-label>
          <q-item-label class="text-weight-medium">{{ trend.tag }}</q-item-label>
          <q-item-label caption>{{ trend.tweet }} Tweets</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption><q-btn flat round :color="isMore ? 'primary' : 'grey-5'" icon="more_horiz" @mouseover="hoverMore(true)"
    @mouseout="hoverMore(false)" /></q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const isMore = ref(false)
const hoverMore = (tf) => {
  if (isMore.value != tf) {
    isMore.value = tf;
  }
}
const trendList = reactive([{
  country: "VietNam",
  tag: "#Learnontiktok",
  tweet: "114K"
},
{
  country: "VietNam",
  tag: "#SkyMTP",
  tweet: "4,121"
},
{
  country: "VietNam",
  tag: "#great giveaway",
  tweet: "12.6K"
},
{
  country: "US",
  tag: "#twitter",
  tweet: "1.6M"
},
{
  country: "JA",
  tag: "#osaka",
  tweet: "9260"
},
{
  country: "China",
  tag: "#douyun",
  tweet: "62k"
},
{
  country: "EN",
  tag: "#bell",
  tweet: "11k"
}])
</script>

<style lang="scss" scoped>
.trend-container{
  border-radius: 1rem;
}
</style>
