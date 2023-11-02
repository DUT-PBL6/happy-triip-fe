import { Component } from "@angular/core";

@Component({
  selector: "app-door-to-door-bus",
  templateUrl: "./door-to-door-bus.component.html",
  styleUrls: ["./door-to-door-bus.component.scss"],
})
export class DoorToDoorBusComponent {
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
  public listRegulations = [
    {
      id: "1",
      image: "seat",
      title:"Seats",
      description: "Comfortable seats, air conditioning, and on-board amenities like free Wi-Fi and charging ports, so you can stay connected and entertained throughout your journey."   },
    {
      id: "2",
      image: "business",
      title:"Luggage",
      description: "Our Da Nang airport transfer vehicles provide ample space for your luggage. Our attentive, friendly, and professional drivers will assist you in arranging your carry-on luggage after a long flight."   },
    {
      id: "3",
      image: "circle-checked",
      title:"Attentive Service",
      description: "You will receive excellent care during your journey, and our friendly drivers are always ready to assist you with any requests you may have. Our experienced and enthusiastic drivers ensure a pleasant and hassle-free experience for our customers. (If you encounter any unpleasant behavior from our drivers, please make a complaint by calling the hotline: 1900.25.25.65)."   },
    {
      id: "4",
      image: "phone-callback",
      title:"24/7 Support Hotline",
      description: "We are ready to assist you 24/7 through various contact channels, including Facebook, hotline 1900252565, or +84 812995715 (for international customers), and the Whatsapp of our general operations representative: +84812995715."   },
  ]
}
