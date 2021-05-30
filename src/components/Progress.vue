<template>
  <td>
    {{ progress.claimstatus.name }}
  </td>
  <td>
    {{ progress.comment }}
  </td>
  <td>
    {{ progress.claimprogressdate }}
  </td>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    progress: Object,
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

.claim {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.claim td {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
