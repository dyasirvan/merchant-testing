import {Component, OnInit} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {MerchantService} from "./service/merchant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  result: string = "";

  constructor(private merchantService: MerchantService) { }

  ngOnInit(): void {
  }

  onClick(){
    let headers = new HttpHeaders({
      'content-type': 'application/json',
      'x-partner-id': 'c18ec35f-57d6-4f69-b97e-b2ef2ce78abb',
      // 'x-user-id': '10002159',
      'x-external-id': 'external12123',
      'channel-id': '301',
      'x-signature': '4qVfQi+7QlB/NNdywfS5CEKZcB8pOUf5tS2I0lSjpITaapvhpH0JrII1tLfXD7Mgo/z4J0f7vrZ+vka2wDrjxw==',
      'x-timestamp': '2020-01-01T00:00:00+07:00',
      'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI1QjhXRGtYSzVBMWpyeFVrckMyWnB4NFN4XzVBRUlhMVpjM1NsOVZobUtJIn0.eyJleHAiOjE2NjYxOTU1MjQsImlhdCI6MTY2NjE5MTkyNCwianRpIjoiM2Q0MzhhZjUtMjViOS00M2ZhLWI1YTctN2Y4OTc5NGI5NmExIiwiaXNzIjoiaHR0cDovLzEwLjIwLjcuNjo4NDQzL2F1dGgvcmVhbG1zL2FzdHJhcGF5LWJ1c2luZXNzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjNkMDUyMzg3LWZiYTItNDIyMy04M2EyLWM1ZmE4N2U4N2Y1MSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImY5MWZhYmZkLTMyMzEtNDU4ZS04MzIwLWFlOTliN2RjYWJkMiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hc3RyYXBheS1idXNpbmVzcyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJjbGllbnRJZCI6ImY5MWZhYmZkLTMyMzEtNDU4ZS04MzIwLWFlOTliN2RjYWJkMiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4yMC41LjIxIiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWY5MWZhYmZkLTMyMzEtNDU4ZS04MzIwLWFlOTliN2RjYWJkMiIsImNsaWVudEFkZHJlc3MiOiIxNzIuMjAuNS4yMSJ9.hmKNKP759BRiojmkoiHWqwOz9IwmQTx-aEoNT25eqkzU2FDEOfr7IjHdssm0bjTaQ2d1I3aBTW7WktFzgBw4_L43HHzbQEzsb5EKXCjZhyYaiRx6mQ7Lj9dGJrNSoAA-3B-xA3Jap45z_G-ahSXv99jJaYZfIcUw2i-H4KczKIY52zdkiC3WApbwhojPBLIlDSbnmWTmKlTl0jXtctBWQdDSgBwcMfXmdlr_tPaapJcZ0VT7-IaW0LyrzHEE-KhKZFENBANIcaFzCdDnk-k1VFYpij9dNJvtMMajO-36GJBJaksYBEUfhAp46EkJQChJojBUIg0vtFEfv3ml9Qk0vw'
    })
    const url = 'https://sandbox.astrapay.com/merchant-service/transaction-status'; // Replace it with your own API path

    let payload = {
      merchantTransactionId: "GOSOK BERHADIAH ke-228",
      // accountNo: "7fd4bf40920e537f1a0c5a2ea5a0b72e1b9e5284d003af5caebe6e15f25b5e58faedf8f3c8ccbff27251564f7ad7115de458473f63be3a248ba56e2c084d18bd",
      // balanceTypes: ["CASH"]
    }

    this.merchantService.debitStatus(url, payload, headers).subscribe(() => {
      this.result = "success"
    },()=> {
      this.result = "error"
    });
  }
}
