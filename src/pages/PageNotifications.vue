<template>
  <q-page>
    <q-item-label class="text-subtitle1 flex justify-around">
      <strong @click="onActive('all')" :style="[isActive === 'all' ? {borderBottom : '3px solid #1da1f2'} : {borderBottom : '2px solid transparent'}]" class="q-pb-sm q-pt-xl cursor-pointer"><q-btn flat round color="grey" icon="dialpad" size="sm" />All</strong>
      <strong @click="onActive('mentions')" :style="[isActive === 'mentions' ? {borderBottom : '3px solid #1da1f2'} : {borderBottom : '2px solid transparent'}]" class="q-pb-sm q-pt-xl cursor-pointer"><q-btn flat round color="grey" icon="question_answer" size="sm" />Mentions</strong>
    </q-item-label>
    <q-separator />
    <div>
      <All v-if="isActive === 'all'" />
      <Mentions v-if="isActive === 'mentions'" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import All from "../components/notifications/all.vue"
import Mentions from "../components/notifications/mentions.vue"

const isActive = ref('all');

const onActive = (nameLink)=>{
  isActive.value = nameLink;
};

</script>
