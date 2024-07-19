<template>
  <div class="page active">
    <header class="fixed surface">
      <nav>
        <button class="s large circle transparent" @click="toggleDialogNavigationDrawer">
          <i>menu</i>
        </button>
        <h5>Home</h5>
      </nav>
    </header>
  </div>
</template>
<script setup>
function toggleDialogNavigationDrawer() {
  ui('#dialog-navigation-drawer')
}
</script>
