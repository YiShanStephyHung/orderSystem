<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import coffeeCard from "@/components/coffeeCard";
import menuText from "@/shared/menuText.json";

const getQuantity = (name, val) => {
  console.log(name, val);
};

const columns = [
  {
    name: "name",
    required: true,
    label: "品項",
    align: "left",
    field: "name",
  },
  {
    name: "price",
    required: true,
    label: "價格",
    align: "left",
    field: "price",
  },
];

const rows = [
  {
    name: "Frozen Yogurt",
    price: 100,
  },
];

const totalPrice = ref(0);
</script>

<template>
  <div class="row col-12 text-bold fz-xl justify-center q-my-md">
    Coffee Menu
  </div>
  <div class="row col-12">
    <div class="row col-9">
      <coffee-card
        class="q-ma-sm"
        style="flex: 0 1 250px"
        v-for="menuItem in menuText"
        :key="menuItem.name"
        :itemInfo="menuItem"
        @updateQuantity="getQuantity"
      ></coffee-card>
    </div>
    <q-separator vertical />
    <div class="col-2 q-pa-sm column justify-between">
      <q-table
        title="Cart"
        :rows="rows"
        :columns="columns"
        row-key="name"
        flat
        hide-pagination
      />
      <div class="q-ml-md q-my-md">
        <q-separator class="q-mb-md" />
        <label>TOTAL: {{ totalPrice }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
