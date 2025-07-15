export interface TicketInput {
  title: string;
  request: string;
}

export interface Ticket extends TicketInput {
  id: string;
  status: "open" | "closed";
}
