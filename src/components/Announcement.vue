<template>
  <section>
    <h2>اطلاعیه مسابقات</h2>

    <div class="events">
      <div class="event" v-for="e in events" :key="e.id">
        <h3 v-html="e.title"></h3>

        <div v-for="p in e.periods" :key="p.time">
          <strong>{{ p.time }}</strong>

          <ul>
            <li v-for="c in p.categories" :key="c.label">
              {{ c.label }} — ({{ c.years.join('، ') }})
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["events"]);
</script>

<style scoped>
.event {
  background: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
}
</style>
