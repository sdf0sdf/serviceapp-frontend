<template>
  <AddClaim ref="AddClaim" @add-claim="addClaim"/>
</template>

<script>
import AddClaim from '../components/AddClaim'
export default {
  name: 'NewClaimView',
  components: {
    AddClaim,
  },
  methods: {
    async addClaim(claim) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(claim),
      })

      res.status === 200
        ? alert('Claim created!')
        : alert('Error creating claim! Please try again')
    },
  },
}
</script>