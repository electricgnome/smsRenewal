<template>
<div>
    <v-toolbar flat color="white">
        <v-toolbar-title>Customers</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
            <v-btn slot="activator" color="primary" dark class="mb-2">New Customer</v-btn>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.firstName" label="First name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                            </v-flex>

                            <v-flex xs12 sm6 md4>
                              <v-menu ref="date" :close-on-content-click="false" v-model="date" :nudge-right="40" :return-value.sync="editedItem.payDay" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                <v-text-field slot="activator" v-model="editedItem.payDay" label="Pay Date" prepend-icon="event" readonly requiered></v-text-field>
                                <v-date-picker v-model="editedItem.payDay" @input="$refs.date.save(editedItem.payDay)"></v-date-picker>
                            </v-menu>
                             </v-flex>

                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>
                            </v-flex>
                        
                            <v-flex xs12 sm6 md4>
                                <v-text-field v-model="editedItem.notes" label="notes"></v-text-field>
                            </v-flex>

                        </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>
    <v-data-table :headers="headers" :items="customers" hide-actions class="elevation-1">
        <template slot="items" slot-scope="props">
            <td>{{ props.item.firstName }}</td>
            <td class="text-xs-left">{{ props.item.lastName }}</td>
            <td class="text-xs-left">{{ props.item.phone }}</td>
            <td class="text-xs-left">{{ props.item.payDay }}</td>
            <td class="text-xs-left">{{ props.item.amount }}</td>
            <td class="text-xs-left">{{ props.item.notes }}</td>
            <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">
                    edit
                </v-icon>
                <v-icon small @click="deleteItem(props.item)">
                    delete
                </v-icon>
            </td>
        </template>
       
    </v-data-table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  
  data: () => ({
    date:false,
    dialog: false,
    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: true,
        value: "firstName" + "lastName"
      },
      {
        text: "last Name",
        value: "lastName"
      },
      {
        text: "phone",
        value: "phone"
      },
      {
        text: "payDay",
        value: "payDay"
      },
      {
        text: "Amount",
        value: "amount"
      },
      {
        text: "notes",
        value: "notes"
      },
      {
        text: "Actions",
        value: "Action",
        sortable: false
      }
    ],
    customerData: [], //kill this
    customers: [],
    editedIndex: -1,
    editedItem: {
      firstName: "",
      lastName: "",
      phone: 0,
      payDay: null,
      amount: "",
      notes: [],
    },
    defaultItem: {
      firstName: "",
      lastName: "",
      phone: 0,
      payDay: null,
      amount: "",
      notes: [],
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Customer" : "Edit Customer";
    }

  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {

    editItem(item) {
      this.editedIndex = this.customers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      console.log(item)
      const index = this.customers.indexOf(item);
      confirm("Are you sure you want to delete this customer?") &&
        this.customers.splice(index, 1);
        axios.delete(`/api/${item._id}`)
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {

        axios.put(`/api/${this.editedItem._id}`, this.editedItem)
        console.log(this.editedItem)

        Object.assign(this.customers[this.editedIndex], this.editedItem);
      } else {
        axios.post("/api", { firstName: this.editedItem.firstName, lastName:this.editedItem.lastName, phone: this.editedItem.phone, payDay: this.editedItem.payDay, amount: this.editedItem.amount, notes:this.editedItem.notes })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        this.customers.push(this.editedItem);
      }
      this.close();
    },

   
  },

  created() {
    let self = this;
    axios
      .get("/api")
      .then(function(res) {
        let customers =res.data;
        self.customers = customers;
        console.log(self.customers)
      })
      .catch(function(err) {
        console.log(err);
      });

  
  },
  
   
};
</script>
