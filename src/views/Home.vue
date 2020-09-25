<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { getParams } from "@/assets/ts/common/utils";
import decodeUriComponent from "decode-uri-component";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  created() {
    const url =
      "https://easypay.travelsky.com/easypay/airlinepay.servlet?OrderAmount=50418.0&AppType=B2C&BankId=XMUNIFIEDOVERSEAS&BillNo=200120200924023647&Ext1=SP_BANK_M2&Ext2=&Lan=zh_CN&Msg=SuperPNR_ID%3D202009241022007615%7CPH&OrderCurtype=PHP&OrderNo=202009241023236368&OrderType=1|0|&OrgId=MFVOERSEA&OrderDate=20200924&OrderTime=102206&ordername=Xiamen+Airlines+e-ticket&Orderinfo=%3CpriskParam%3E%7B%22agentCode%22%3A%2210048001%22%2C%22agentName%22%3A%22Xiamen+Airlines%22%2C%22serviceInfoUrl%22%3A%22www.xiamenair.com%2F%22%2C%22ticketAmountInfoUrl%22%3A%22www.xiamenair.com%2F%22%2C%22orderInfoUrl%22%3A%22www.xiamenair.com%2F%22%2C%22agreement%22%3A%22www.xiamenair.com%2F%22%2C%22taxAmount%22%3A%22358%22%2C%22taxCurrencyCode%22%3A%22PHP%22%2C%22taxExponent%22%3A%222%22%2C%22purchaseTotals_grandTotalAmount%22%3A%2250418%22%2C%22decisionManager_travelData_completeRoute%22%3A%22XMN-PKX%22%2C%22issuerAddr1%22%3A%2222+Dailiao+Road%2C+Xiamen%2C+China%22%2C%22issuerPostalCode%22%3A%22361006%22%2C%22issuerCity%22%3A%22Xiamen%22%2C%22countryCode%22%3A%22PH%22%2C%22airlineCode%22%3A%22MF%22%2C%22airlineName%22%3A%22Xiamen+Airlines%22%2C%22webSite%22%3A%22PH%22%2C%22channelOfBooking%22%3A%22WEB%22%2C%22productType%22%3A%22%22%2C%22air_Passenger%22%3A%5B%7B%22passengerFirstName%22%3A%22TESTAMM%22%2C%22passengerLastName%22%3A%22TESTB%22%2C%22flightCarrierCode%22%3A%22MF%22%2C%22passengerName%22%3A%22TESTB+TESTAMM%22%2C%22passengerCode%22%3A%22MF98765556%22%2C%22dateOfBirth%22%3A%221995-09-24%22%2C%22passengerCountryCode%22%3A%22CN%22%2C%22passengerID%22%3A%221%22%2C%22passengerType%22%3A%22ADT%22%2C%22passengerEmail%22%3A%22kkk%40qq.com%22%2C%22ticketCode%22%3A%22JQ3BN3%22%2C%22ticketPNR%22%3A%22JQ3BN3%22%2C%22ticketRestricted%22%3A%220%22%2C%22unitPrice%22%3A%2250418%22%7D%5D%2C%22air_Flight%22%3A%5B%7B%22flightCarrierCode%22%3A%22MF%22%2C%22departureAirport%22%3A%22XMN%22%2C%22arrivalAirport%22%3A%22PKX%22%2C%22departureCity%22%3A%22XMN%22%2C%22arrivalCity%22%3A%22BJS%22%2C%22departureDate%22%3A%222020-12-09+11%3A00+CST%22%2C%22arrivalDate%22%3A%222020-12-09+14%3A00+CST%22%2C%22departureDayOfMonth%22%3A%2209%22%2C%22departureMonth%22%3A%2212%22%2C%22departureYear%22%3A%222020%22%2C%22airCabin%22%3A%22Y%22%2C%22airClass%22%3A%22Y%22%7D%5D%7D%3C%2FpriskParam%3E%3CreturnUrl%3Ehttp%3A%2F%2Fuat.xiamenair.com%2FTrpOpenJawServerMF%2FTRPFlightMF%2Findex.html%23%2FpaymentResult%3FSpnrId%3D202009241022007615%3C%2FreturnUrl%3E&usrid=&username=&gateid=XMUNIFIEDOVERSEAS&Version=1.0&ReturnId=id_mfos_uat_pay&SIGNATURE=5d3641ea36688ccae260700af08241b8";
    console.log(getParams(decodeUriComponent(url)));
  }
}
</script>
