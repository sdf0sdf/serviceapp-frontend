<template>
  <td>
    <i @click="$emit('delete-claim', claim.id)" class="fas delete fa-times"></i>
    &nbsp;
    <a :href="this.$route.path + '/' + claim.id" class="fas fa-link"></a>
    </td>
  <td>
    {{ claim.claimno }}
  </td>
  <td>{{ claim.sn }}</td>
  <td>
    {{ claim.servicecenter.name }}
  </td>
  <td>
    {{ claim.producttype.name }}
  </td>
  <td>
    {{ claim.claimprogress.claimstatus.name }}
  </td>
  <td>
    {{ claim.claimprogress.comment }}
  </td>
  <td>
    {{ claim.claimprogress.claimprogressdate }}
  </td>
</template>

<script>
export default {
  name: 'Claim',
  props: {
    claim: Object,
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
