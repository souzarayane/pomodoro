<template>
  <div class="settings">
    <label>
      Tempo de foco (min):
      <input type="number" v-model.number="focusTime" />
    </label>
    <label>
      Tempo de descanso (min):
      <input type="number" v-model.number="breakTime" />
    </label>
    <button class="btn save-btn" @click="saveSettings">Salvar</button>
  </div>
</template>

<script>
export default {
  name: "PomodoroSettings",
  data() {
    return {
      focusTime: 25,
      breakTime: 5,
    };
  },
  methods: {
    saveSettings() {
      this.$emit("update-settings", {
        focusTime: this.focusTime * 60,
        breakTime: this.breakTime * 60,
      });
    },
  },
};
</script>

<style scoped>
.settings {
  display: flex;
  justify-content: space-between; /* Alinha os itens na mesma linha */
  gap: 10px; /* Espaçamento entre os itens */
  align-items: center; /* Alinha verticalmente os itens */
  flex-wrap: wrap; /* Permite que os itens se movam para a linha de baixo em telas menores */
}

.settings label {
  display: flex;
  flex-direction: column; /* Coloca o texto e o input em uma coluna */
  gap: 5px; /* Espaço entre o texto e o input */
}

.settings input {
  width: 60px;
  padding: 5px;
}

.settings button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 50px;
}

.save-btn:hover {
  background-color: #218838;
}
</style>
