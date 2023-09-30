import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  public showError(title: string, content: string): void {
    this.messageService.add({
      severity: "error",
      summary: title,
      detail: `${content}`,
    });
  }

  public showInfo(title: string, content: string): void {
    this.messageService.add({
      severity: "info",
      summary: title,
      detail: `${content}`,
    });
  }

  public showWarning(title: string, content: string): void {
    this.messageService.add({
      severity: "warn",
      summary: title,
      detail: `${content}`,
    });
  }

  public showSuccess(title: string, content: string): void {
    this.messageService.add({
      severity: "success",
      summary: title,
      detail: `${content}`,
    });
  }
}
