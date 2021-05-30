<template>
  <table class="styled-table">
  <thead><tr><th></th><th>Claim Number</th><th>SN</th><th>Service Center</th><th>Product Type</th><th>Status</th><th>Comment</th><th>Date</th></tr></thead>
  <tbody>
  <tr :key="claim.id" v-for="claim in claims">
    <Claim
      @delete-claim="$emit('delete-claim', claim.id)"
      :claim="claim"
    />
  </tr>
  </tbody>
  </table>
</template>

<script>
import Claim from './Claim'

export default {
  name: 'Claims',
  props: {
    claims: Array,
  },
  components: {
    Claim,
  },
  emits: ['delete-claim'],
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
