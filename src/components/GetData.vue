<template>
  <div>
    <v-container>
      <v-row>
        <!-- <v-col></v-col> -->
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>日期</th>  
                  <th>項目</th>
                  <th>金額</th>
                  <th>備註</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row,idx) in rows" :key="idx">
                  <td>{{ row.date.toDate().toLocaleDateString() }}</td>
                  <td>{{ row.title }}</td>
                  <td>{{ row.amt }}</td>
                  <td>{{ row.note }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
         <!-- <v-col></v-col> -->
      </v-row>
    </v-container>

    <!-- <div v-for="(row,idx) in rows" :key="idx">{{ row.date }}{{ row.note }}</div> -->
  </div>
</template>
<script>
import base from "./ShowData.vue";

export default {
  data() {
    return {
      rows: []
    };
  },
  mounted() {
    this.getCities();
  },
  methods: {
    async getCities() {
      const a = await base;
      this.rows = a;
    }
  }
};
</script>