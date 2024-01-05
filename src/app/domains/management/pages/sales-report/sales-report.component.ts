import { Component, OnInit } from "@angular/core";
import { Select, Store } from "@ngxs/store";
import { Booking } from "_api";
import { ChartData, ChartOptions } from "chart.js";
import moment from "moment";
import { Observable, takeUntil } from "rxjs";
import { BaseDestroyable } from "src/app/core/directives/base-destroyable/base-destroyable";
import { GetBookingRecentOrders } from "src/app/core/service/booking/booking.action";
import { BookingService } from "src/app/core/service/booking/booking.service";
import { BookingState } from "src/app/core/service/booking/booking.state";
import { SaleReport } from "../../types/sale-report.type";
import dayjs from "dayjs";
import { CalendarMonthChangeEvent } from "primeng/calendar";

@Component({
  selector: "app-sales-report",
  templateUrl: "./sales-report.component.html",
  styleUrls: ["./sales-report.component.scss"],
})
export class SalesReportComponent extends BaseDestroyable implements OnInit {
  @Select(BookingState.getBookingRecentOrders) public bookingRecent$: Observable<Booking[]>;
  public monthlySalesData: SaleReport[] = [];
  public yearlySalesData: SaleReport[] = [];
  public monthlyChartData: ChartData;
  public yearlyChartData: ChartData;
  public chartOptions: any;
  public year = new Date().getFullYear();
  public month = new Date().getMonth() + 1;
  public selectedMonth: Date | undefined = new Date();
  public selectedYear: Date | undefined = new Date();
  public documentStyle = getComputedStyle(document.documentElement);
  public textColor: string;
  public textColorSecondary: string;
  public surfaceBorder: string;
  public lastDt = new Date(this.year, this.month, 0).getDate();

  constructor(
    private bookingService: BookingService,
    private store: Store
  ) {
    super();
  }

  ngOnInit() {
    if (this.store.selectSnapshot(BookingState.getBookingRecentOrders).length === 0)
      this.store.dispatch(new GetBookingRecentOrders());

    this.textColor = this.documentStyle.getPropertyValue("--text-color");
    this.textColorSecondary = this.documentStyle.getPropertyValue("--text-color-secondary");
    this.surfaceBorder = this.documentStyle.getPropertyValue("--surface-border");
    this.initChartOptions();

    this.updateMonthlySalesReport(1, this.lastDt);
    this.updateYearlySalesReport(this.year);
  }

  private updateMonthlySalesReport(firstDt: number, lastDt: number): void {
    this.bookingService
      .getMonthlySalesReport$(this.month)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.monthlySalesData = this.getSalesData(response, firstDt, lastDt, "month");
          this.monthlyChartData = this.updateChartData("month");
        },
      });
  }

  private updateYearlySalesReport(year: number): void {
    this.bookingService
      .getYearlySalesReport$(year)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.yearlySalesData = this.getSalesData(response, 1, this.lastDt, "year");
          this.yearlyChartData = this.updateChartData("year");
        },
      });
  }

  private initChartOptions(): void {
    this.chartOptions = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            color: this.textColor,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "$",
            font: {
              size: 16,
            },
          },
          beginAtZero: true,
          ticks: {
            color: this.textColorSecondary,
          },
          grid: {
            color: this.surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          stack: false,
          ticks: {
            color: this.textColorSecondary,
          },
          grid: {
            color: this.surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  private updateChartData(type: string = "month" || "year"): ChartData {
    return {
      labels:
        type === "month"
          ? this.monthlySalesData.map((item) => item.date + `/${this.month}`)
          : this.yearlySalesData.map((yearSaleData) =>
              dayjs()
                .month(yearSaleData.month - 1)
                .format("MMMM")
            ),
      datasets: [
        {
          label: type === "month" ? "Revenue" : `Revenue (${this.year})`,
          data:
            type === "month"
              ? this.monthlySalesData.map((item) => item.totalAmount)
              : this.yearlySalesData.map((item) => item.totalAmount),
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(128, 128, 128, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(255, 205, 86)",
            "rgb(128, 128, 128)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }

  public getSalesData(data, firstDt: number, lastDt: number, type: string = "month" || "year"): SaleReport[] {
    const result: SaleReport[] = [];

    if (type === "month") {
      for (let date = firstDt; date <= lastDt; date++) {
        const dt = data.find((item) => item.date === date);
        result.push(dt || { date, totalAmount: 0 });
      }
      return result;
    }

    Array(12)
      .fill(0)
      .map((_, index) => {
        const currentMonth = data.find((item) => item.month === index + 1);
        result.push(currentMonth || { month: index + 1, totalAmount: 0 });
      });

    return result;
  }

  public handleSelectedMonthChange(_: string): void {
    const date = dayjs(this.selectedMonth);
    this.month = date.month() + 1;
    const firstDate = 1;
    const lastDate = date.endOf("month").date();

    this.updateMonthlySalesReport(firstDate, lastDate);
  }

  public handleSelectedYearChange(_: string): void {
    const year = dayjs(this.selectedYear).year();
    this.updateYearlySalesReport(year);
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
