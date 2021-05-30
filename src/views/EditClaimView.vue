<template>
  <AddClaim ref="AddClaim" @edit-claim="editClaim"/>
  <ClaimProgress ref="ClaimProgress" :claimprogress="claimprogress" :claimId="claimId" @add-progress="addProgress"/>
</template>

<script>
import AddClaim from '../components/AddClaim'
import ClaimProgress from '../components/ClaimProgress'
export default {
  name: 'EditClaimView',
  components: {
    AddClaim,
    ClaimProgress
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      claimprogressUrl: 'http://127.0.0.1:8080/ServiceApp/claimprogress',
      claimId: -1,
      claimprogress: [],
    }
  },
  methods: {
    async editClaim(claim) {
      const res = await fetch(this.url + `/${claim.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(claim),
      })

      res.status === 200
        ? alert('Changes saved!')
        : alert('Error! Please try again')
    },
    async fetchClaim(id) {
        const res = await fetch(this.url + `/${id}`)
  
        const data = await res.json()
  
        return data
      },
    async fetchClaimProgress(id) {
      const res = await fetch(this.claimprogressUrl + `/claim/${id}`)

      const data = await res.json()

      return data
    },
    async addProgress(progress) {
      progress.claim.id = this.claimId
      const res = await fetch(this.claimprogressUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(progress),
      })

      this.claimprogress = [...this.claimprogress, progress]
    },
  },
  async created() {
    this.claimId = this.$route.params.id;
    this.claimprogress = await this.fetchClaimProgress(this.claimId)
  },
  async mounted() {
    const claim = await this.fetchClaim(this.claimId)
    this.$refs.AddClaim.claim = claim
  },
}
</script>