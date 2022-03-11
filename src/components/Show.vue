<template>
  <div>
    <!-- `greet` is the name of the method defined above -->
    <button @click="getCities">Greet</button>
    <div v-for="(row,idx) in rows" :key=idx >
        {{ row.date }}
    </div>
  </div>
</template>

<script>
// import db from "./Fire";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyClLeHQJMt3BzbrK_AHpWeq0nlqzY2r5ik",
  authDomain: "money-39797.firebaseapp.com",
  projectId: "money-39797",
  storageBucket: "money-39797.appspot.com",
  messagingSenderId: "142963352306",
  appId: "1:142963352306:web:ac3c09e593009a5175666b",
  measurementId: "G-012VKYDZ07"
};

const app = initializeApp(firebaseConfig);

import { getFirestore } from "firebase/firestore/lite";
const db = getFirestore(app);
import { collection,getDocs } from "firebase/firestore/lite"

export default {
  data() {
    return {
      name: "Vue.js",
      rows:[],   
    };
  },
  methods: {    
      async getCities() {
        const citiesCol = collection(db, "spends");
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => doc.data());
        this.rows = cityList
      }
   
  }
};
</script>

<style>
</style>