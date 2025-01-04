<template>
  <div class="timer">
    <h2>{{ formatTime }}</h2>
  </div>
</template>

<script>
export default {
  name: "PomodoroTimer",
  data() {
    return {
      time: 1500, // Tempo inicial: 25 minutos em segundos
      timer: null,
    };
  },
  computed: {
    formatTime() {
      const minutes = Math.floor(this.time / 60);
      const seconds = this.time % 60;
      return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },
  },
  methods: {
    startTimer() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          if (this.time > 0) {
            this.time--;
          } else {
            this.resetTimer();
            alert("Pomodoro finalizado!");
          }
        }, 1000);
      }
    },
    pauseTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.time = 1500; // Reinicia para 25 minutos
    },
    updateSettings(settings) {
      this.time = settings.focusTime;
    },
  },
};
</script>

<style scoped>
.timer {
  font-size: 48px;
  font-weight: bold;
  color: #ff6347;
  margin: 20px 0;
}
</style>
