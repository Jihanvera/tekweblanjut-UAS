import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  data:any={};
  masuk(data)
  {
    if(data.username == 'jihanverapramayda3@gmail.com',data.password == '123')
    {
      this.router.navigate(['/buku-alamat']);
    }
     if(data.username == 'jordanbramada@gmail.com',data.password == '123')
    {
      this.router.navigate(['/buku-alamat']);
    }
    {
      if(data.username == null,data.password== null){
        alert("Email Wajib Di Isi !")
      }
    
  }
 
{
  if(data.password == null){
    alert("password Wajib Di Isi !")
  }

}

}
}