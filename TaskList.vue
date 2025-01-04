<template>
  <div class="task-list">
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ done: task.completed }">
        <input type="checkbox" v-model="task.completed" />
        {{ task.text }}
      </li>
    </ul>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Adicionar nova tarefa" />
      <button class="btn add-task-btn" type="submit">
        <i class="fas fa-plus"></i> Adicionar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
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

.add-task-btn {
  background-color: #28a745;
  color: white;
}
</style>
