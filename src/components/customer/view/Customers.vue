 <template>
  <div class="customers">
    <navigation/>
    <alert v-if="alert">{{alert}}</alert>
    <div class="customer-content container-fluid" role="main">
      <h1>Customer</h1>
      <input class="form-control" placeholder="Enter last name" v-model="filter"/>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Index</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(customer, index) in filterBy(customers, filter)" :key="index">
            <th>{{index}}</th>
            <td>{{customer.first_name}}</td>
            <td>{{customer.last_name}}</td>
            <td>{{customer.email}}</td>
            <td><router-link class="btn btn-default" :to="'/customer/' + customer.id">View</router-link></td>
            <td><router-link class="btn btn-default" :to="'/customer/' + customer.id + '/update'">Update</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="./Customers.js"></script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
