<template>
  <h4 v-show="!newClaimView"> Claim Number: {{ claim.claimno }}</h4>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Serial Number*:</label>
      <input type="text" v-model="claim.sn" name="sn" />
      <label>Service Center*:</label>
      <select v-model="claim.servicecenter.id" name="servicecenter">
        <option v-for="servicecenter in servicecenters" :key="servicecenter.id" :value="servicecenter.id">{{ servicecenter.name }}</option>
      </select>
      <label>Product Type*:</label>
      <select v-model="claim.producttype.id" name="producttype">
        <option :key="producttype.id" v-for="producttype in producttypes" v-bind:value="producttype.id">{{ producttype.name }}</option>
      </select>
      <label v-show="newClaimView">Comment*:</label>
      <input v-show="newClaimView" type="text" v-model="claim.claimprogress.comment" name="comment"  />
    </div>

    <input type="submit" value="Save Claim" class="btn btn-block" />
  </form>
</template>

<script>

export default {
  name: 'AddClaim',
  computed: {
    newClaimView() {
      if (this.$route.path === '/claims/new') {
        return true
      } else {
        return false
      }
    },
  },
  data() {
    return {
      claim: {
        sn: this.sn,
        servicecenter:
          {
            id: this.servicecenter
          },
        producttype:
          {
            id: this.producttype
          },
        claimprogress:
          {
            claimstatus:{
              id: 1,
              comment: this.comment,
            },
          },
      },
      producttypes: [],
      servicecenters: [],
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.claim.sn) {
        alert('Please add Serial Number')
        return
      }else if (this.claim.sn.length > 10) {
        alert('Serial Number must not exceed 10 characters')
        return
      }
      else if (!this.claim.servicecenter.id) {
        alert('Please add Service Center')
        return
      }
      else if (!this.claim.producttype.id) {
        alert('Please add Product Type')
        return
      }
      else if (!this.claim.claimprogress.comment) {
        alert('Please add Comment')
        return
      }

      if (this.newClaimView){
        this.$emit('add-claim', this.claim)

        this.claim.sn = ''
        this.claim.servicecenter.id = ''
        this.claim.producttype.id = ''
        this.claim.claimprogress.id = ''
        this.claim.claimprogress.comment = ''
      }
      else{
        this.$emit('edit-claim', this.claim)
      }

    },

    async fetchProductTypes() {
      const res = await fetch(this.url + `/producttypes`)

      const producttypes = await res.json()

      return producttypes
    },

    async fetchServiceCenters() {
      const res = await fetch(this.url + `/servicecenters`)

      const servicecenters = await res.json()

      return servicecenters
    },

  },
  async created() {
    this.producttypes = await this.fetchProductTypes()
    this.servicecenters = await this.fetchServiceCenters()
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
