import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Booking } from "_api";
import moment from "moment";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetBookingRecentOrders } from "src/app/core/service/booking/booking.action";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { BookingState } from "src/app/core/service/booking/booking.state";

@Component({
  selector: "app-sales-report",
  templateUrl: "./sales-report.component.html",
  styleUrls: ["./sales-report.component.scss"],
})
export class SalesReportComponent extends BaseDestroyable implements OnInit {
  salesData: any[] = [];
  basicData: any;
  basicOptions: any;

  year = new Date().getFullYear();
  month = new Date().getMonth() + 1;

  @Select(BookingState.getBookingRecentOrders) public bookingRecent$: Observable<Booking[]>;
  constructor(
    private bookingService: BookingService,
    private store: Store
  ) {
    super();
  }

  ngOnInit() {
    if (this.store.selectSnapshot(BookingState.getBookingRecentOrders).length === 0)
      this.store.dispatch(new GetBookingRecentOrders());

    console.log(this.year, this.month);
    const firstDt = new Date(this.year, this.month - 1, 1).getDate();
    const lastDt = new Date(this.year, this.month, 0).getDate();
    this.bookingService
      .getMonthlySalesReport$(this.month)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.salesData = this.dataSalesMonth(response, firstDt, lastDt);
          this.updateChart();
        },
      });
    // this.bookingService.getYearlySalesReport$(this.year)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (response) => {
    //       this.yearData = this.fillDataMonths(response)
    //       this.updateChartYear()
    //     },
    //   });
  }

  private updateChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    this.basicData = {
      labels: this.salesData.map((item) => item.date),
      datasets: [
        {
          label: "Sales-Report-Month-" + this.month,
          data: this.salesData.map((item) => item.totalAmount),
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: ["rgb(255, 159, 64)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)"],
          borderWidth: 1,
        },
      ],
    };

    this.basicOptions = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          stack: false,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  public dataSalesMonth(data, firstDt, lastDt) {
    const result: any[] = [];
    for (let date = firstDt; date <= lastDt; date++) {
      const dt = data.find((item) => item.date === date);
      result.push(dt || { date, totalAmount: 0 });
    }
    return result;
  }

  public convertSoldOnDate(date) {
    const soldOnDt = moment(date);
    return soldOnDt.fromNow();
  }

  public getSeverity(status: string): string {
    switch (status) {
      case "FAILED":
        return "danger";
      case "SUCCESS":
        return "success";
      case "MONEYPENDING":
        return "info";
      case "PENDING":
        return "warning";
    }
  }
}
