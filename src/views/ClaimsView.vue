<template>
  <Claims
    @delete-claim="deleteClaim"
    :claims="claims"
  />
</template>

<script>
import Claims from '../components/Claims'

export default {
  name: 'ClaimsView',
  components: {
    Claims,
  },
  data() {
    return {
      claims: [],
    }
  },
  methods: {
    async deleteClaim(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(this.url + `/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.claims = this.claims.filter((claim) => claim.id !== id))
          : alert('Error deleting claim')
      }
    },
    async fetchClaims() {
      const res = await fetch(this.url)

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.claims = await this.fetchClaims()
  },
}
</script>