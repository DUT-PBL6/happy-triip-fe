import { Component } from "@angular/core";

@Component({
  selector: "app-service-quality",
  templateUrl: "./service-quality.component.html",
  styleUrls: ["./service-quality.component.scss"],
})
export class ServiceQualityComponent {
  public serviceQuality = [
    {
      id: "1",
      image: "wifi",
      description: "With complimentary 4G Wi-Fi on board, you won't feel bored during your journey as you can browse the internet, chat with friends, or enjoy entertainment on YouTube.",
    },
    {
      id:"2",
      image:"business",
      description:"TravelBus buses are equipped with spacious luggage compartments, ensuring that passengers can securely store their belongings. Our friendly team of drivers will assist you in handling your luggage and ensuring a smooth boarding process."
    },
    {
      id:"3",
      image:"food-service",
      description:"You will always be well taken care of with TravelBus: on our buses, you will be provided with complimentary filtered water. If you need any assistance or have any concerns, feel free to approach our friendly driver."
    },
    {
      id:"4",
      image:"plug-in",
      description:"With spacious and clean seats, reclining up to 120 degrees, and modern massage features, you will experience complete comfort on our buses. You can work on your laptop during long journeys without worrying about back strain."
    },
    {
      id:"5",
      image:"seat",
      description:"TravelBus ensures you a safe seating experience with sturdy seats and adjustable and comfortable seat belts for your protection."
    },
    {
      id:"6",
      image:"phone-callback",
      description:"We are ready to assist you 24/7 through various contact channels, including Facebook, hotline 1900252565, or +84 812995715 (for international customers), and the Whatsapp of our general operations representative: +84812995715."
    },

   
   
  ];
}
