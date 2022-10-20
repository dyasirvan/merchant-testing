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
      'x-signature': '5Ni7BngXS8RVGlLuVuiPYkc8SB+alSmh3zSHVtdUUdD/J240LPeU3YuQcjJB65RjnYHhbQJfdxxYMFIJ9ke2kA==',
      'x-timestamp': '2020-01-01T00:00:00+07:00',
      'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUZk50bGRXTzhvRGhibU95STd1R0g0dV9ZMzBmeTc4b1I1T2V6S3JIdVpzIn0.eyJleHAiOjE2NjYyNDkzNDEsImlhdCI6MTY2NjI0NTc0MSwianRpIjoiYzhiZTE4MmYtNWY2MC00OTM0LWIyOWQtMzcxMWRlNzgwOWFiIiwiaXNzIjoiaHR0cDovLzEwLjIwLjYuOTo4NDQzL2F1dGgvcmVhbG1zL2FzdHJhcGF5LWJ1c2luZXNzIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjQ2NDg1MTRhLTY3YjMtNGRhZi04YjYzLTJiNWIxZmNjNGMwYiIsInR5cCI6IkJlYXJlciIsImF6cCI6ImMxOGVjMzVmLTU3ZDYtNGY2OS1iOTdlLWIyZWYyY2U3OGFiYiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1hc3RyYXBheS1idXNpbmVzcyIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJjbGllbnRJZCI6ImMxOGVjMzVmLTU3ZDYtNGY2OS1iOTdlLWIyZWYyY2U3OGFiYiIsImNsaWVudEhvc3QiOiIxNzIuMjAuMTAuMzAiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6InNlcnZpY2UtYWNjb3VudC1jMThlYzM1Zi01N2Q2LTRmNjktYjk3ZS1iMmVmMmNlNzhhYmIiLCJjbGllbnRBZGRyZXNzIjoiMTcyLjIwLjEwLjMwIn0.ajJXNg4zJlPq2YsY_mmKDdTgCZuD4NP6d-8wDM6sWkPlLVIRaeSGp0hSQttUIllhPTRLWXtddIuy11l86PWDYv9GZrMpMtMJ1Z_AR3Z7Y6D52BRhoiNZ-rN2iDzpTLrOFrOUqIP_BZc7tWVyPvZ8Amj0FUZueTP8IeIhJfAPIYw0ewuDdqG_0mJ3RZ5KDFI4W8AIFolX-geVd3WLxSnJVZgfWnvwQmkzpYSffDw2JVab34hujoCknPGW6YbFXfXRwg0rXlTU3f_Xlyzj6rtqjPUlcA-GFx1wOceXsc5x4Jv1vvnrrXf1BbHHUA9dHlci_A8yILb-9yUZ27iwreNjjA'
    })
    const url = 'http://localhost:9191/merchant-service/snap/v1.0/balance-inquiry';

    let payload = {
      // merchantTransactionId: "GOSOK BERHADIAH ke-228",
      accountNo: "7fd4bf40920e537f1a0c5a2ea5a0b72e1b9e5284d003af5caebe6e15f25b5e58faedf8f3c8ccbff27251564f7ad7115de458473f63be3a248ba56e2c084d18bd",
      balanceTypes: ["CASH"]
    }

    this.merchantService.debitStatus(url, payload, headers).subscribe(() => {
      this.result = "success"
    },()=> {
      this.result = "error"
    });
  }
}
