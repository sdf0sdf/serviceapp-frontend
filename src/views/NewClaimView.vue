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

      const id = await res.json()
      res.status === 200
        ? this.$router.push(`${id}`) 
        : alert('Error creating claim! Please try again')
    },
  },
}
</script>