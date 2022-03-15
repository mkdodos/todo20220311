<template>
  <div>
    <v-app>
      <v-container>
        <v-row justify="center">
          <v-col md="8">
            <v-toolbar class="mb-8">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>支出</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click="openForm" color="green darken-2">
                <v-icon>mdi-plus-circle-outline</v-icon>
              </v-btn>
              <v-btn icon color="orange darken-2">
                <v-icon>mdi-home-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>

            <!-- 輸入表單 -->
            <v-form v-show="isEdit">
              <v-text-field label="項目" v-model="editedItem.title" hide-details="auto"></v-text-field>
              <v-text-field label="金額" v-model="editedItem.amt" type="number"></v-text-field>
              <v-row class="mb-6">
                <v-col class="text-right">
                  <v-btn color="green" class="white--text" @click="save">儲存</v-btn>
                </v-col>
              </v-row>
            </v-form>

            <v-simple-table>
              <thead>
                <tr>
                  <!-- <th>日期</th> -->
                  
                  <th></th>
                  <th>項目</th>
                  <th>金額</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(obj,index) in rows" :key="index">
                  <!-- <td>{{obj.date.toDate().toLocaleDateString() }}</td> -->

<td @click="destory(obj.id,index)">
                    <v-icon small @click="deleteItem(obj.id,index)">mdi-delete</v-icon>
                  </td>
                 
                  <td>{{obj.title}}</td>
                  <td>{{obj.amt}}</td>
                  <td><v-icon small @click="editItem(obj)">mdi-pencil</v-icon></td> 
                  
                </tr>
              </tbody>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import db from "../db/Money.vue";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore/lite";

const collection_name = "spends";

export default {
  data() {
    return {
      rows: [],
      title: "",
      amt: "",
      isEdit: false,
      editedIndex: -1,
      editedItem: {
        title: "",
        amt: ""
      },
      defaultItem: {
        title: "",
        amt: ""
      }
    };
  },
  mounted() {
    this.getMoney();
  },
  methods: {
    editItem(item) {
      this.isEdit = true;
      this.editedIndex = this.rows.indexOf(item);
      this.editedItem = Object.assign({}, item);
    },

    async deleteItem(id, index) {
      await deleteDoc(doc(db, collection_name, id));
      this.rows.splice(index, 1);
    },

    openForm() {
      // this.editedIndex = -1;
      this.isEdit = !this.isEdit;
    },
    async getMoney() {
      const citiesCol = collection(db, collection_name);
      const citySnapshot = await getDocs(citiesCol);
      citySnapshot.forEach(doc => {
        let row = doc.data();
        row.id = doc.id;
        this.rows.push(row);
      });
    },
    async save() {
      //更新
      if (this.editedIndex > -1) {
        const washingtonRef = doc(db, collection_name, this.editedItem.id);

        // Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, this.editedItem);

        Object.assign(this.rows[this.editedIndex], this.editedItem);

        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem);
          this.editedIndex = -1;
        });
      } else {
        // 新增
        const docRef = await addDoc(collection(db, collection_name), {
          date: new Date(),
          title: this.editedItem.title,
          amt: this.editedItem.amt
        });
        this.editedItem.id = docRef.id;
        console.log(docRef.id);

        this.rows.push(this.editedItem);
        // 若直接將 editedItem 設定值, 會無法顯示該列資料
        // this.editedItem.title = "";
        // this.editedItem.amt = 0;
        // 使用此方法, 複製預設值給 editedItem
        this.editedItem = Object.assign({}, this.defaultItem);
      }

      console.log(this.editedItem);
      // 更新

      // console.log(this.editedItem)
      // this.getMoney();
    }
  }
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-size: 16px !important;
}
</style>