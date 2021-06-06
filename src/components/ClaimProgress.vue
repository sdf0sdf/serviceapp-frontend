<template>
  <form @submit="onSubmit">
    <table class="styled-table">
    <thead><tr><th>Status</th><th>Comment</th><th>Date</th></tr></thead>
    <tbody>
    <tr :key="progress.id" v-for="progress in claimprogress">
      <Progress :progress="progress" />
    </tr>
    <tr><td>
      <select v-model="newprogress.claimstatus.id" name="status">
        <option v-for="claimstatus in claimstatuses" :key="claimstatus.id" :value="claimstatus.id">{{ claimstatus.name }}</option>
      </select>
    </td>
    <td><input type="text" v-model="newprogress.comment " name="comment" /></td>
    <td>&nbsp;</td></tr>
    </tbody>
    </table>
    <input type="submit" value="Add Progress" class="btn btn-block" />
  </form>
</template>

<script>
import Progress from './Progress'

export default {
  name: 'ClaimProgress',
  props: {
    claimprogress: Array,
  },
  components: {
    Progress,
  },
  data() {
    return {
      newprogress:
        {
          id: this.id,
          claim:{id: -1},
          claimprogressdate:'',
          claimstatus:{
            id: 'this.id',
          },
          comment: this.comment,
      },
      claimstatuses: [],
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.newprogress.claimstatus) {
        alert('Please add Status')
        return
      }
      else if (!this.newprogress.comment) {
        alert('Please add Comment')
        return
      }

      this.$emit('add-progress', this.newprogress)

      this.newprogress.id = ''
      this.newprogress.claimstatus.id = ''
      this.newprogress.comment = ''
      
    },
    async fetchClaimStatuses() {
      const res = await fetch(this.claimprogressUrl + `/claimstatuses`)

      const claimstatuses = await res.json()

      return claimstatuses
    },
  },
  async created() {
    this.claimstatuses = await this.fetchClaimStatuses()
  },
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
