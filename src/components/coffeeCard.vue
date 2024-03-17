<script setup>
import { ref, reactive, onMounted } from "vue";

const props = defineProps({ itemInfo: Object });
const emit = defineEmits(["updateQuantity"]);

let quantity = ref(null);
</script>

<template>
  <q-card class="my-card" flat bordered>
    <q-card-section class="q-pb-xs">
      <div class="column items-start">
        <div class="row">
          <div class="text-h6">
            {{ props.itemInfo.originState }}&nbsp;
            {{ props.itemInfo.originCountry }}
          </div>
        </div>
        <div class="col text-h4 ellipsis">{{ props.itemInfo.name }}</div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div style="margin-left: -5px">
        <q-chip
          v-for="taste in props.itemInfo.taste"
          :key="taste"
          outline
          color="orange"
          text-color="white"
          size="sm"
        >
          {{ taste }}
        </q-chip>
      </div>
      <div class="text-grey">價格：${{ props.itemInfo.price }}</div>
      <div class="text-grey">焙度：{{ props.itemInfo.roastRatio }}%</div>
    </q-card-section>

    <q-separator />

    <q-card-actions class="row justify-around items-center">
      <div class="row">
        <q-btn flat round icon="bi-dash-circle" />
        <q-input
          v-model="quantity"
          dense
          outlined
          type="number"
          min="0"
          style="width: 100px"
          debounce="500"
          @update:model-value="
            emit('updateQuantity', props.itemInfo.name, quantity)
          "
        />
        <q-btn flat round icon="bi-plus-circle" />
      </div>
      <q-btn round icon="bi-cart-plus" color="primary" size="sm" glossy />
    </q-card-actions>
  </q-card>
</template>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 300px;
}
</style>
