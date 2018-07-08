import Navigation from '../../navigation/Navigation.vue'
import Alert from '../../alert/Alert.vue'

export default {
  name: 'Edit',
  components: {Navigation, Alert},
  data () {
    return {
      api: this.$apiUrl + 'customer/',
      customer: {},
      message: ''
      
    }
  },
  methods: {
      fetchCustomer(id) {
        this.$http.get(this.api + id)
          .then((response) => {
            this.customer = response.body;
            console.log(this.customer);
          })
      },
      updateCustomer(e) {
          if (!this.customer.first_name) {
            this.message = 'Please fill first name';
            this.scrollTop();
            return;
          }

          if (!this.customer.last_name) {
            this.message = 'Please fill last name';
            this.scrollTop;
            return;
          }

          if (!this.customer.email) {
            this.message = "Please fill email";
            this.scrollTop();
            return;
          }

          this.$http.put(this.api + 'update/' + this.$route.params.id, this.customer)
            .then((response) => {
                console.log(response);
                this.$router.push({path: '/', query: {message: 'Customer Updated'}});
            })
      },
      scrollTop() {
        window.scrollTo(0,0);
      }
  },
  created() {
    this.fetchCustomer(this.$route.params.id)
  }
}
