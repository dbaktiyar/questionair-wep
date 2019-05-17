<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <MainHeader></MainHeader>
    <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
        <div>
          <v-layout justify-space-around>
            <span class="group pa-2">
              <v-icon x-large>people</v-icon>
            </span>
          </v-layout>
        </div>
        <div>
          <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
          <v-toolbar-title>Applications</v-toolbar-title>
        </div>

      </v-toolbar>
      <v-content>
        <div>
          <v-data-table
            :headers="headers"
            :items="info"
            :search="search"
            hide-actions
            :pagination.sync="pagination"
            class="elevation-1"
          >
            <template v-slot:items="props" :click="goToApplication(props)">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.calories }}</td>
              <td class="text-xs-right">{{ props.item.fat }}</td>
              <td class="text-xs-right">{{ props.item.carbs }}</td>
              <td class="text-xs-right">{{ props.item.protein }}</td>
              <td class="text-xs-right">{{ props.item.iron }}</td>
            </template>
          </v-data-table>
          <div class="text-xs-center pt-3">
            <v-pagination v-model="pagination.page" :total-visible="7" :length="pages"></v-pagination>
          </div>
        </div>
      </v-content>
    </v-app>
  </div>

</template>

<script>

import MainHeader from '../components/header/MainHeader'
import axios from 'axios'

export default {
  components: {
    MainHeader
  },

  methods: {
    goToApplication (event) {
      console.log('event', event)
    },

    getApplications () {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
    }
  },

  data () {
    return {

      info: [],
      items: [
        {
          text: 'Login',
          disabled: false,
          href: 'applications'
        },
        {
          text: 'Applications',
          disabled: false,
          href: 'applications'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ],

      search: '',
      pagination: {
        rowsPerPage: 18
      },
      selected: [],
      headers: [
        {
          text: 'Profile',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ]

      // desserts: [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //     iron: '1%'
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //     iron: '1%'
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //     iron: '7%'
      //   }
      // ]
    }
  },

  getApplications () {
    axios.get('http://localhost:8080/appraisals/all')
      .then(response => (this.info = response))
  },

  computed: {
    pages () {
      if (this.pagination.rowsPerPage == null ||
        this.pagination.totalItems == null
      ) return 0

      return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
    }
  }
}
</script>

<style>
  .v-breadcrumbs {
    padding: 0 18px;
  }

  .application a {
    color: #fff;
  }

  .theme--dark.v-toolbar {
    background-color: #0288d1 !important;
    border-color: #0288d1 !important;
  }

  .v-toolbar {
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 1px 1px 0px rgba(0,0,0,0.12);
  }

  .text-xs-right {
    text-align: left !important;
  }

  table.v-table tbody td {
    height: 41px;
  }
</style>
