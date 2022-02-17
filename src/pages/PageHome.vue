<template>
  <q-page class="relative-position">
    <q-scroll-area :thumb-style="thumbStyle" :content-style="contentStyle" :content-active-style="contentActiveStyle" ref="scrollAreaRef" class="absolute full-width full-height">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input bottom-slots v-model="newTweetContext" placeholder="What's happening?" counter maxlength="280" autogrow class="new-tweet">
            <div class="row justify-end"></div>
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://avatars.githubusercontent.com/u/71834167?v=4&s=80">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
            <q-btn rounded no-caps :disable="!newTweetContext" color="primary" label="Tweet" class="q-mb-lg" @click="addNewTweet" :loading="submitting">
              <template v-slot:loading>
                <q-spinner-facebook />
              </template>
            </q-btn>
        </div>
      </div>
      <q-separator size="0.75rem" color="grey-2" />
      <!-- tweet flow -->
      <q-list separator>
        <transition-group appear enter-active-class="animated fadeIn slower" leave-active-class="animated backOutRight">
          <q-item class="tweet q-py-md" v-for="tweet in tweets" :key="tweet.id">
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://avatars.githubusercontent.com/u/71834167?v=4&s=80">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1 flex justify-between items-start">
                <div>
                  <strong>Thuong Truong</strong>
                  <span class="text-grey-7 text-caption q-ml-sm">@thuongtruong1009</span>
                  <q-item-label caption>
                    <span class="text-grey-7">&bull; {{ relativeDate(tweet.date) }}</span>
                  </q-item-label>
                </div>
                <q-btn flat round color="grey-5" icon="more_horiz"/>
              </q-item-label>
              <q-item-label class="tweet-content text-body1 q-py-sm">{{ tweet.content }}</q-item-label>
              <div class="tweet-icon row justify-between q-mt-sm">
                  <q-btn flat round color="grey" icon="far fa-comment" size="sm" />
                  <q-btn flat round color="grey" icon="fas fa-retweet" size="sm" />
                  <q-btn flat round :color="tweet.liked ? 'red' : 'grey'" :icon="tweet.liked ? 'fas fa-heart':'far fa-heart'" size="sm" @click="onLiked(tweet)" />
                  <q-btn flat round color="grey" icon="fas fa-trash" size="sm" @click="deleteTweet(tweet)" />
              </div>
            </q-item-section>
          </q-item>
        </transition-group>
      </q-list>
    </q-scroll-area>
    <q-btn icon="arrow_upward" round color="primary" @click="animateScroll" class="absolute-bottom-right q-mb-xs q-mr-xs" />
  </q-page>
</template>

<script>
import { collection, addDoc, onSnapshot, query, where, orderBy, doc, deleteDoc, updateDoc, getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { formatDistance } from 'date-fns'
import { defineComponent } from 'vue';
import { ref } from 'vue'

export default defineComponent({
  name: 'PageHome',
  data(){
    return{
      newTweetContext: '',
      tweets:[
      // {
      //   id: 'ID1',
      //   content:'Hi friends! I am Tran Nguyen Thuong Truong - third years Information Technology student at International University.\nNice to meet you!',
      //   date: 1644406430927,
      //   liked: false
      // },
      // {
      //   id:'ID2',
      //   content:'Welcome to VietNam!',
      //   date: 1644406457118,
      //   liked: true
      // }
      ],
      thumbStyle: {
        right: '0px',
        borderRadius: '9px',
        backgroundColor: '#1DA1F2',
        width: '5px',
        opacity: 0.75
      },
      position: 0,
      scrollAreaRef: null,
      submitting: false
    }
  },
  methods:{
    relativeDate(value){
      return formatDistance(value, new Date())
    },
    addNewTweet(){
      //method add when not connect database
      // let newTweet = {
      //   content: this.newTweetContext,
      //   date: Date.now(),
      //   liked: false,
      // };
      // this.tweets.unshift(newTweet);
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
      }, 1000);
      const db = getFirestore();
      const docRef = addDoc(collection(db, "tweets"), {
        content: this.newTweetContext,
        date: Date.now(),
        liked: false,
      });
      console.log("Document written with ID: ", docRef.id);
      this.newTweetContext = '';
    },
    deleteTweet(tweet){
      //delete method when not connect database
      // let dateToDelete = tweet.date;
      // let index = this.tweets.findIndex(tweet => tweet.date === dateToDelete);
      // this.tweets.splice(index, 1);
      const db = getFirestore();
      deleteDoc(doc(db, "tweets", tweet.id));
    },
    onLiked(tweet){
      console.log('tagTweet: ' + tweet);
      const db = getFirestore();
      const washingtonRef = doc(db, "tweets", tweet.id);
      // Set the "capital" field of the city 'DC'
      updateDoc(washingtonRef, {
        liked: !tweet.liked
      });
    },
    animateScroll() {
      this.scrollAreaRef.setScrollPosition('vertical', this.position, 0);
      this.position = 0 + 'px';
    }
  },
  mounted(){
    const db = getFirestore();
    const q = query(collection(db, "tweets"), orderBy("date"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        let tweetChange = change.doc.data();
        tweetChange.id = change.doc.id;
        if (change.type === "added") {
            console.log("New tweet: ", tweetChange);
            this.tweets.unshift(tweetChange);
        }
        if (change.type === "modified") {
            console.log("Modified tweet: ", tweetChange);
            let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id);
            Object.assign(this.tweets[index], tweetChange); //get copy value from source to target (database to client)
        }
        if (change.type === "removed") {
            console.log("Removed tweet: ", tweetChange);
            let index = this.tweets.findIndex(tweet => tweet.id === tweetChange.id);
            this.tweets.splice(index, 1);
        }
      });
    });
  },
})
</script>

<style lang="scss" scoped>
.new-tweet{
    & textarea{
        line-height: 1.4 !important;
        font-size: 1.2rem;
    }
}
.tweet-content{
  white-space: pre-line;
}
.tweet-icon{
  margin-left: -5px;
}
.tweet:not(:first-child){
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
