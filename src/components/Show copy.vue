<template>
  <div>show</div>
</template>

<script>
import rows from "./Fire"

// var row = [];

const printAddress = async () => {
  const a = await rows.rows;
//   return a;
  console.log(a);
};

printAddress()

// const a = await rows.rows;
// console.log(row)

// console.log(printAddress());

// console.log(rows.rows[PromiseResult])
// console.log()

// rows.then(function(result) {
//     console.log(result)
// });


export default {

}
</script>

<style>

</style>