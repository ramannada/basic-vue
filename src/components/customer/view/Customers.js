import Navigation from '../../navigation/Navigation.vue'
import Alert from '../../alert/Alert.vue'

export default {
  name: 'Customers',
  components: {Navigation, Alert},
  data () {
    return {
      apiCustomer: this.$apiUrl + 'customers',
      customers: [],
      alert: '',
      filter: ''
    }
  },
  methods: {
    fetchCustomers() {
      this.$http.get(this.apiCustomer)
        .then((response) => {
          this.customers = response.body;
          console.log(this.customers);
        });
    },
    filterBy(list, value) {
      return list.filter((customer) => {
        return customer.last_name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
    }
  },
  created() {
    const {message} = this.$route.query;

    if (message) {
      this.alert = message;
    }

    this.fetchCustomers()
  }
}
