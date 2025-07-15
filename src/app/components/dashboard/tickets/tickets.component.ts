import { Component } from "@angular/core";
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket, TicketInput } from "./ticket.model";

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketInput: TicketInput) {
    const ticket: Ticket = {
      title: ticketInput.title,
      request: ticketInput.request,
      id: Math.random().toString(),
      status: "open",
    };
    this.tickets.push(ticket);
  }
}
