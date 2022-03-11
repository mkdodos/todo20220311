<template>
  <div>
    <div v-for="(row,idx) in rows" :key="idx">{{ row.date }}{{ row.note }}</div>
  </div>
</template>

<script>
import db from "./Fire";
import { collection, getDocs } from "firebase/firestore/lite";




  async function getCities() {
      const citiesCol = collection(db.db, "spends");
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList;
    }


export default getCities()
// export default {
//     abc: getCities()
//     ,
//   data() {
//     return {     
//       rows:  []
//     };
//   },
// //   mounted() {
// //     this.getCities();
// //   },
//   methods: {
//     async getCities() {
//       const citiesCol = collection(db.db, "spends");
//       const citySnapshot = await getDocs(citiesCol);
//       const cityList = citySnapshot.docs.map(doc => doc.data());
//       this.rows = cityList;
//     }
//   }
// };
</script>

<style>
</style>