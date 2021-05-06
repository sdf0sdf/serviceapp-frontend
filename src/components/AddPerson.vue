<template>
  <Button
      @btn-click="$emit('toggle-add')"
      :text="showAdd ? 'Close' : 'Add'"
      :color="showAdd ? 'red' : 'black'"
    />
  <form v-show="showAdd" @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Name</label>
      <input type="text" v-model="name" name="name" placeholder="Add Name" />
    </div>
    <div class="form-control">
      <label>Age</label>
      <input
        type="text"
        v-model="age"
        name="age"
        placeholder="Add Age"
      /></div>
    <div class="form-control">
      <label>Email</label>
      <input
        type="text"
        v-model="email"
        name="email"
        placeholder="Add Email"
      /></div>

    <input type="submit" value="Save Person" class="btn btn-block" />
  </form>
</template>

<script>
import Button from './Button'

export default {
  name: 'AddPerson',
  props: {
    showAdd: Boolean,
  },
  components: {
    Button,
  },
  data() {
    return {
      id: '',
      name: '',
      age: '',
      email: '',
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.name) {
        alert('Please add a person')
        return
      }

      const newPerson = {
        id: this.id,
        name: this.name,
        age: this.age,
        email: this.email,
      }

      if (this.id == ''){
        this.$emit('add-person', newPerson)
      }
      else{
        this.$emit('update-person', newPerson)
      }

      this.name = ''
      this.age = ''
      this.email = ''
    },
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
