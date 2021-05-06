<template>
  <table class="styled-table">
  <thead><tr><th></th><th>Name</th><th>Age</th><th>Email</th></tr></thead>
  <tbody>
  <tr :key="person.id" v-for="person in people">
    <Person
      @delete-person="$emit('delete-person', person.id)"
      @toggle-update="$emit('toggle-update', person)"
      :person="person"
    />
  </tr>
  </tbody>
  </table>
</template>

<script>
import Person from './Person'

export default {
  name: 'People',
  props: {
    people: Array,
  },
  components: {
    Person,
  },
  emits: ['delete-person', 'toggle-update'],
}
</script>

<style scope>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
    background-color: #285d99;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}
.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #285d99;
}
.styled-table tbody tr:hover {
    background-color: #f3f3f3;
}
</style>
