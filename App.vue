<template>
  <div id="app">
    <header>
      <h1>Pomodoro Timer</h1>
    </header>
    <main>
      <section class="timer-section">
        <PomodoroTimer ref="timer" />
        <div class="timer-controls">
          <button class="btn start-btn" @click="$refs.timer.startTimer">
            <i class="fas fa-play"></i> Iniciar
          </button>
          <button class="btn pause-btn" @click="$refs.timer.pauseTimer">
            <i class="fas fa-pause"></i> Pausar
          </button>
          <button class="btn reset-btn" @click="$refs.timer.resetTimer">
            <i class="fas fa-redo"></i> Resetar
          </button>
        </div>
      </section>

      <!-- Linha divisória entre o Timer e Minhas Tarefas -->
      <hr class="divider" />

      <!-- Seção de Minhas Tarefas -->
      <section class="tasks-section">
        <h2>Minhas Tarefas</h2>
        <TaskList />
      </section>

      <!-- Linha divisória entre as seções -->
      <hr class="divider" />

      <!-- Seção de Configurações -->
      <section class="settings-section">
        <PomodoroSettings @update-settings="updateSettings" />
      </section>
    </main>
  </div>
</template>

<script>
import PomodoroTimer from "./components/PomodoroTimer.vue";
import TaskList from "./components/TaskList.vue";
import PomodoroSettings from "./components/PomodoroSettings.vue";

export default {
  name: "App",
  components: {
    PomodoroTimer,
    TaskList,
    PomodoroSettings,
  },
  methods: {
    updateSettings(settings) {
      this.$refs.timer.updateSettings(settings);
    },
  },
};
</script>

<style>
/* Estilo Global */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* Cabeçalho */
header {
  background-color: #ff6347;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
}

header h1 {
  margin: 0;
}

/* Seções */
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Timer */
.timer-section {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.timer-controls {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

/* Botões */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-btn {
  background-color: #28a745;
  color: white;
}

.start-btn:hover {
  background-color: #218838;
}

.pause-btn {
  background-color: #ffc107;
  color: white;
}

.pause-btn:hover {
  background-color: #e0a800;
}

.reset-btn {
  background-color: #dc3545;
  color: white;
}

.reset-btn:hover {
  background-color: #c82333;
}

/* Tarefas */
.tasks-section {
  background-color: #f9f9f9; /* Mesmo background do timer */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-list ul {
  list-style: none;
  padding: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Distância entre as tarefas */
}

.task-list li.done {
  text-decoration: line-through;
  color: gray;
}

/* Configurações */
.settings-section {
  background-color: #f9f9f9; /* Mesmo background do timer */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.settings label {
  display: block;
  margin-bottom: 10px;
}

.settings input {
  padding: 5px;
  margin-left: 10px;
  width: 80px; /* Reduzir a largura */
}

.settings button {
  margin-top: 10px;
}

/* Estilo para alinhar horizontalmente os botões */
.settings-section .btn {
  margin-right: 10px;
  display: inline-block;
}

/* Linha divisória entre as seções */
.divider {
  border: 0;
  height: 1px;
  background-color: #ddd;
  margin: 20px 0;
}
</style>
