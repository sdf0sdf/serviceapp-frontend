<template>
  <AddPerson ref="AddPerson" v-show="showAdd" @add-person="addPerson" @update-person="updatePerson" @toggle-add="toggleAdd" :showAdd="showAdd"/>
  <People
    @delete-person="deletePerson"
    @toggle-update="toggleUpdate"
    :people="people"
  />
</template>

<script>
import People from '../components/People'
import AddPerson from '../components/AddPerson'
export default {
  name: 'Persons',
  components: {
    People,
    AddPerson,
  },
  data() {
    return {
      people: [],
      url: 'http://127.0.0.1:8080/ServiceApp/people',
      showAdd: false,
    }
  },
  methods: {
    toggleUpdate(person){
      this.$refs.AddPerson.id = person.id
      this.$refs.AddPerson.name = person.name
      this.$refs.AddPerson.age = person.age
      this.$refs.AddPerson.email = person.email
      this.showAdd = true

    },
    toggleAdd() {
      this.$refs.AddPerson.id = ''
      this.$refs.AddPerson.name = ''
      this.$refs.AddPerson.age = ''
      this.$refs.AddPerson.email = ''
      this.showAdd = !this.showAdd
    },
    async addPerson(person) {
      const res = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(person),
      })

      this.people = [...this.people, person]
    },
    async deletePerson(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(this.url + `/${id}`, {
          method: 'DELETE',
        })

        res.status === 200
          ? (this.people = this.people.filter((person) => person.id !== id))
          : alert('Error deleting person')
      }
    },
    async updatePerson(person) {
      const res = await fetch(this.url + `/${person.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(person),
      })

      this.people.filter(function(elem){
        if(elem.id == person.id) {
          elem.name = person.name
          elem.age = person.age
          elem.email = person.email
        }
      })

      this.showAdd = false
    },
    async fetchPeople() {
      const res = await fetch(this.url)

      const data = await res.json()

      return data
    },
    async fetchPerson(id) {
      const res = await fetch(this.url + `/${id}`)

      const data = await res.json()

      return data
    },
  },
  async created() {
    this.people = await this.fetchPeople()
  },
}
</script>