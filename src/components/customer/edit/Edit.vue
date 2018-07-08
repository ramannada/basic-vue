<template>
  <div class="edit container-fluid">
    <navigation/>
    <div class="about-content container-fluid">
      <alert v-if="message">{{message}}</alert>
      <h1>Customer Form</h1>
      <form v-on:submit="updateCustomer(customer.id)">
          <div class="well">
            <h4>Customer Info</h4>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" id="first-name" v-model="customer.first_name">
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" id="last-name" v-model="customer.last_name">
            </div>
          </div>

          <div class="well">
            <h4>Customer Contact</h4>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" v-model="customer.email">
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="customer.phone">
            </div>
          </div>

          <div class="well">
            <h4>Customer Location</h4>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" v-model="customer.address">
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" v-model="customer.city">
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" id="state" v-model="customer.state">
            </div>
          </div>

          <button type="submit" class="btn btn-primary btn-block">Submit</button>
      </form>
    </div>
  </div>
</template>

<script src="./Edit.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        text-align: center
    }
</style>
