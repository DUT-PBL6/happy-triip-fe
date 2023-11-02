import { Component } from "@angular/core";

@Component({
  selector: "app-rent-car",
  templateUrl: "./rent-car.component.html",
  styleUrls: ["./rent-car.component.scss"],
})
export class RentCarComponent {
  public listTags=[
    {id:"1","name":"airport"},
    {id:"2","name":"tourguide"},
    {id:"3","name":"Hoi An"},
    {id:"4","name":"Ha Noi"},
    {id:"5","name":"Da Nang"},
    {id:"6","name":"Travelbus"},
    {id:"7","name":"Hue"},
    {id:"8","name":"Vietnam"},
  ]

}
