<template>
  <div class="detail container-fluid">
    <navigation/>
    <router-link to="/">Back</router-link>
    <h1>{{customer.first_name}} {{customer.last_name }}
      <router-link class="btn btn-default" :to="'/customer/' + customer.id +'/update/'">Update</router-link>
      <span class="pull-right"><button class="btn btn-danger" v-on:click="deleteCustomer(customer.id)">Delete</button></span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item"><i class="fa fa-mobile" aria-hidden="true"></i>  {{customer.phone}}</li>
      <li class="list-group-item"><i class="fa fa-address-book-o" aria-hidden="true"></i>  {{customer.email}}</li>
    </ul>

    <ul class="list-group">
      <li class="list-group-item">{{customer.address}}</li>
      <li class="list-group-item">{{customer.city}}</li>
      <li class="list-group-item">{{customer.state}}</li>
    </ul>
  </div>
</template>

<script src="./Detail.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
