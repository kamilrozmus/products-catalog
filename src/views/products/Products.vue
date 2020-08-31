<template>
  <div class="proucts">
    <h1>This is products page</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script src="./Products.js"></script>
