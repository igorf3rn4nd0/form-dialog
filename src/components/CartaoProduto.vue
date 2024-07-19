<template>
  <article class="no-padding round">
    <div class="grid no-space">
      <div class="s12 m4">
        <img
          :class="
            $breakpoints.greater('s').value
              ? 'responsive large left-round'
              : 'responsive large top-round'
          "
          :src="props.image"
        />
      </div>
      <div class="s12 m8 padding">
        <div class="row top-align">
          <div class="max">
            <h6 class="no-margin">{{ props.name }}</h6>
            <span>{{ props.description }}</span>
          </div>
          <h6>{{ formatarParaReal(props.price) }}</h6>
        </div>
        <div class="large-divider"></div>
        <nav>
          <button class="small-round">
            <i>shopping_cart</i>
            <span class="l">Buy now</span>
          </button>
          <button class="border small-round">
            <i>add_shopping_cart</i>
            <span class="l">Add to bag</span>
          </button>
          <button class="border small-round"><i>favorite</i></button>
        </nav>
      </div>
    </div>
  </article>
</template>
<script setup>
import { formatarParaReal } from '@/utils/FormatterUtils'
const props = defineProps({
  image: String,
  name: String,
  description: String,
  price: Number
})
</script>
