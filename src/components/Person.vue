<template>
  <td>
    <i @click="$emit('delete-person', person.id)" class="fas delete fa-times"></i>
    &nbsp;
    <i @click="$emit('toggle-update', person.id)" class="fas fa-link"></i>
    </td>
  <td>
    {{ person.name }}
  </td>
  <td>{{ person.age }}</td>
  <td>{{ person.email }}</td>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: Object,
  },
}
</script>

<style scope>
.fas {
  color: black;
}
.fas.delete {
  color: red;
}

.person {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.person td {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
