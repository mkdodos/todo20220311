<template>
  <div>
    <!-- <ul>
      <li v-for="(row, index) in rows" :key="index">{{ row.note }}</li>
    </ul>-->

    <v-app>
      <v-container>
        

        <!-- <v-row><v-btn @click="create">create</v-btn></v-row> -->
        <v-row justify="center">
          <!-- <v-col md="12" class="d-flex justify-center"> -->
          <!-- <v-col md="2"></v-col> -->
          <v-col md="8" >
            <v-card color="grey lighten-4">
              <v-toolbar dense class="mb-0">
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>支出</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-toolbar>

              <v-simple-table>
                <thead>
                  <tr>
                    <th class="primary white--text">日期</th>
                    <th class="primary white--text">項目</th>
                    <th class="primary white--text">金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(obj,index) in rows" :key="index">
                    <td>{{obj.date.toDate().toLocaleDateString() }}</td>
                    <!-- <td>{{obj.date.toDate() }}</td> -->
                    <td>{{obj.title}}</td>
                    <td>{{obj.amt}}</td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>
<style scoped>
.v-data-table {
  /* width: 50%; */
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 18px;
}
</style>
<script>
import db from "../db/Money.vue";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";

const collection_name = "spends";

export default {
  data() {
    return {
      rows: []
    };
  },
  mounted() {
    this.getMoney();
  },
  methods: {
    async getMoney() {
      const citiesCol = collection(db.db, collection_name);
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      this.rows = cityList;
      console.log(cityList);
    },
    async create() {
      await addDoc(collection(db.db, collection_name), {
        date: new Date(),
        title: "Tokyo",
        amt: 200
      });
      this.getMoney();
    }
  }
};
</script>