import { Component } from "@angular/core";

@Component({
  selector: "app-airport-pick-up",
  templateUrl: "./airport-pick-up.component.html",
  styleUrls: ["./airport-pick-up.component.scss"],
})
export class AirportPickUpComponent {
  public getNumberRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => index + start);
  }
  public responsiveOptions: any[] = [ 
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 3,
    }
    ,
    {
      breakpoint: '770px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '751px',
      numVisible: 1,
      numScroll: 1,
    },
   
    {
      breakpoint: '1230px', 
      numVisible: 4,
      numScroll: 4,
    },
] 
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
      image: "headphone",
      title:"Reception and Booking Hotline",
      description: " Upon your arrival at the airport, our dedicated staff will be available at the baggage claim area and departure gate to assist you with booking a taxi. If you require airport drop-off service, you can call 1900.25.25.65.",
    },
    {
      id: "2",
      image: "business",
      title:"Luggage",
      description: "Our Da Nang airport transfer vehicles provide ample space for your luggage. Our attentive, friendly, and professional drivers will assist you in arranging your carry-on luggage after a long flight.",
    },
    {
      id: "3",
      image: "circle-checked",
      title:"Attentive Service",
      description: "You will receive excellent care during your journey, and our friendly drivers are always ready to assist you with any requests you may have. Our experienced and enthusiastic drivers ensure a pleasant and hassle-free experience for our customers. (If you encounter any unpleasant behavior from our drivers, please make a complaint by calling the hotline: 1900.25.25.65).",
    },
    {
      id: "4",
      image: "vehicle",
      title:"Vehicles",
      description: "We offer a variety of airport transfer vehicles ranging from 4-seaters to 45-seaters, catering to the needs and desired group sizes of our customers. Options include Limousine cars, private cars, and group transport.",
    },
    {
      id: "5",
      image: "star",
      title:"VIP Service",
      description: "We provide VIP airport transfer services for those with special requirements. Don't worry, we will expedite the VIP procedures to assist you promptly.",
    },
    {
      id: "6",
      image: "phone-callback",
      title:"24/7 Support Hotline",
      description: "We are ready to assist you 24/7 through various contact channels, including Facebook, hotline 1900252565, or +84 812995715 (for international customers), and the Whatsapp of our general operations representative: +84812995715.",
    },
  ]
}
