import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  output,
  Output,
  viewChild,
  ViewChild,
} from "@angular/core";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from "@angular/forms";
import { Ticket, TicketInput } from "../ticket.model";

@Component({
  selector: "app-new-ticket",
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: "./new-ticket.component.html",
  styleUrl: "./new-ticket.component.css",
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild("form") private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");

  // @Output() add = new EventEmitter<TicketInput>();
  add = output<TicketInput>();

  // onSubmit(titleElement: HTMLInputElement) {
  // console.dir(titleElement);
  // const enteredTitle = titleElement.value;
  // console.log("EnteredTitle", enteredTitle);
  // }
  // ngOnInit(): void {
  //   console.log("On Init", this.form().nativeElement);
  //   // console.log("On Init", this.form?.nativeElement);
  // }

  ngAfterViewInit(): void {
    console.log("After View Init", this.form().nativeElement);
    // console.log("After View Init", this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    console.log("EnteredTitle", title, "Ticket", ticketText);
    // this.form?.nativeElement.reset();
    this.add.emit({ title, request: ticketText });
    this.form().nativeElement.reset();
  }
}
