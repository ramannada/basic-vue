import Navigation from '../../navigation/Navigation.vue'
import Alert from '../../alert/Alert.vue'

export default {
  name: 'Customer',
  components: {Navigation, Alert},
  data () {
    return {
      apiAdd: this.$apiUrl + 'customer/add',
      customer: {},
      message: ''
      
    }
  },
  methods: {
      addCustomer(e) {
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

          this.$http.post(this.apiAdd, this.customer)
            .then((response) => {
                console.log(response);
                this.$router.push({path: '/', query: {message: 'Customer Added'}});
            })

          e.preventDefault(); 
      },
      scrollTop() {
        window.scrollTo(0,0);
      }
  }
}
