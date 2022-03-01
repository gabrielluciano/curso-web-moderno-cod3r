<template>
  <!-- Sintaxe :class
        :class="{ nomeClasse: variaveBooleana , nomeClasse2: variavelBooleana2}"
          OU, caso a variavel e a classe tenham o mesmo nome:
        :class="{ classe1, classe2 }"
  -->
  <button class="button"
    @click="$emit('onClick', label)"
    :class="{ double, triple, operation }">
    {{ label }}
  </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
      label: {},
      operation: { type: Boolean },
      double: { type: Boolean },
      triple: { type: Boolean }
    }
}
</script>

<style>
:root {
  --bg-button: #f0f0f0;
  --border-button: solid 1px #888;
}

.button {
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;
}

.button:active {
  background-color: #ccc;
}

.button.triple {
  grid-column: span 3;
}

.button.double {
  grid-column: span 2;
}

.button.operation {
  background-color: #fa8231;
  color: #fff;
}

.button.operation:active {
  background-color: #fa8231cc;
}
</style>