import Navigation from '../../navigation/Navigation.vue'

export default {
  name: 'Detail',
  components: {Navigation},
  data () {
    return {
      apiCustomer: this.$apiUrl + 'customer/',
      customer: {}
    }
  },
  methods: {
    fetchCustomer(id) {
      this.$http.get(this.apiCustomer + id)
        .then((response) => {
          this.customer = response.body;
          console.log(this.customer);
        })
    },
    deleteCustomer(id) {
      this.$http.delete(this.apiCustomer + 'delete/' + id)
        .then((response) => {
          this.$router.push({path: '/', query: {message: "Customer deleted"}})
        })
    }
  },
  created() {
    this.fetchCustomer(this.$route.params.id);
  }
}
