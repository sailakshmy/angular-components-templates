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

  enteredTitle = "";
  enteredText = "";

  // @Output() add = new EventEmitter<TicketInput>();
  add = output<TicketInput>();

  ngAfterViewInit(): void {
    console.log("After View Init", this.form().nativeElement);
    // console.log("After View Init", this.form?.nativeElement);
  }

  onSubmit() {
    // console.log("EnteredTitle", title, "Ticket", ticketText);
    // this.form?.nativeElement.reset();
    this.add.emit({ title: this.enteredTitle, request: this.enteredText });
    // this.form().nativeElement.reset();
    this.enteredTitle = "";
    this.enteredText = "";
  }
}
