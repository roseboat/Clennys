<template>
  <section class="apartment-grid">
    <div class="container">
      <div class="grid">
        <h2>Info and Rates</h2>
        <p class="preamble"></p>
        <table>
          <tr>
            <th>Suite</th>
            <th>People</th>
            <th class="not-on-mobile">Kitchen/Living Room</th>
            <th class="not-on-mobile">Bath/Shower</th>
            <th>1 Night 1 Guest</th>
            <th>1 Night 2 Guests</th>
          </tr>
          <tr v-for="row in apartmentGrid.rows" :key="row.id">
            <td>{{ row.Apartment }}</td>
            <td>{{ row.Occupancy }}</td>
            <td class="not-on-mobile" v-html=row.KitchLive></td>
            <td class="not-on-mobile">{{ row.BathShower}}</td>
            <td>{{row.OneNightOneGuest}}</td>
            <td>{{row.OneNightTwoGuest}}</td>
          </tr>
        </table>
  </div>
   <p><b>*** Please note that these rates are subject to change. To find rates for your specific dates <a href="https://app.thebookingbutton.com/properties/bfs6371?" target="_blank">click here</a>.</b><br>
   <b>** Also note that the Eddie is a room with only an ensuite, no kitchen or living room.</b></p>
    
    </div>
  </section>
</template>

<script>
export default {
  name: "ApartmentGrid",
  props: ["apartmentGrid"]
};
</script>

<style scoped lang="scss">
.apartment-grid {
  padding: 30px 0px 30px;

.grid{
padding-bottom: 10px;

}

  table {
    border-collapse: collapse;
    width: 100%;

    .not-on-mobile {
      display: none;
    }

    th,
    td {
      padding: 3px;
              text-align: center;
    }
    th {
      text-align: center;
      font-weight: bold;
    }
    td {
      font-weight: normal;
    }



    tr:nth-child(even) {
      background-color: $c-lightcream;
    }
  }
}

@media (min-width: $screen-sm) {
  .apartment-grid {
     padding-top: 50px;
    table {
      .not-on-mobile {
        display: table-cell;
      }

      th,
      td {
        padding: 10px;
      }
    }
  }
}
</style>
