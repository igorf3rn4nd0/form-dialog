<template>
  <main class="active responsive">
    <header class="fixed surface">
      <nav>
        <button class="large circle transparent" @click="$router.push('/ClienteList')">
          <i>arrow_back</i>
        </button>
        <h5 class="m l">Novo Cliente</h5>
        <div class="max"></div>
        <button class="m l surface">
          <i class="primary-text">save</i>
          <label class="primary-text">Salvar</label>
        </button>
        <button class="s transparent circle">
          <i class="primary-text">save</i>
        </button>
      </nav>
    </header>
    <main class="padding">
      <h5 class="s">Novo Cliente</h5>
      <div class="medium-space s"></div>
      <div class="grid">
        <div class="s12 m6">
          <form-field v-model="nome" label="Nome" class="border" />
        </div>
        <div class="s12 m6">
          <form-field
            v-model="dataNascimento"
            label="Data de Nascimento"
            type="date"
            class="border"
          />
        </div>
        <div class="s12 m6">
          <form-field
            v-model="horaNascimento"
            label="Hora do Nascimento"
            type="time"
            class="border"
          />
        </div>
        <div class="s12 m6">
          <form-field
            v-model="valorProduto"
            label="Valor do produto"
            type="currency"
            class="border"
          />
        </div>
        <div class="s12 m6">
          <form-field
            v-model="sexo"
            label="Sexo"
            type="select"
            class="border"
            :options="[
              { label: 'Masculino', value: 1 },
              { label: 'Feminino', value: 0 }
            ]"
          />
        </div>
      </div>
    </main>
  </main>
</template>
<script setup>
import FormField from '../components/form/FormField.vue'
import { ref } from 'vue'

const dataNascimento = ref()
const horaNascimento = ref()
const valorProduto = ref()
const sexo = ref()
const nome = ref()
</script>
