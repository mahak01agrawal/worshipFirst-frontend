import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { PaymentService } from '../payment.service';
declare let Razorpay:any;

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  cartData:any;
  totalPrice:any=0;
  constructor(private cartService:CartService,private paymentService:PaymentService) {
    cartService.viewCart().subscribe(data=>{
      console.log(data);
      this.cartData = data.productList;
      let i=0;
      for(let element of this.cartData){
        this.totalPrice += element.price;
      }
    })
   }
   mobile?:string;
   address?:string;

   payment(){
     let producList=[];
     for(let element of this.cartData){
       producList.push({product:element._id,totalPrice:element.price,qty:1});
     }
     let order = {
       userId : JSON.parse(localStorage.getItem("user") || "{}")._id,
       productList : producList,
       amount:this.totalPrice,
       address : this.address,
       mobile:this.mobile
     }
    this.paymentService.createOrder(order).subscribe(data=>{
      console.log(data);
      console.log(data.id);

      var options = {
        "key": "rzp_test_NPr7p2g2REFz6n", // Enter the Key ID generated from the Dashboard
        "amount": this.totalPrice+'00', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "https://worship-first-by-tech-priest.herokuapp.com/order/order-status",
        "prefill": {
            "name": "Mahak Agrawal",
            "email": "mahak01agrawal@gmail.com",
            "contact": "9754993047"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
    });
   }

  ngOnInit(): void {

  }
}
