import { Component, input, Input } from "@angular/core";
import { ImageInput } from "../dashboard.model";

@Component({
  selector: "app-dashboard-item",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-item.component.html",
  styleUrl: "./dashboard-item.component.css",
})
export class DashboardItemComponent {
  // @Input({ required: true }) image!: ImageInput;
  // @Input({ required: true }) title!: string;
  image = input.required<ImageInput>();
  title = input.required<string>();
}
