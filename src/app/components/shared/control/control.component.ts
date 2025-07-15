import {
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from "@angular/core";

@Component({
  selector: "app-control",
  standalone: true,
  imports: [],
  templateUrl: "./control.component.html",
  styleUrl: "./control.component.css",
  encapsulation: ViewEncapsulation.None,
  host: {
    class: "control",
    "(click)": "onClick()",
  },
})
export class ControlComponent {
  // @HostBinding("class") className = "control";
  private el = inject(ElementRef);
  label = input.required<string>();
  // @HostListener("click")

  // @ContentChild("input") private control?: ElementRef<
  //   HTMLTextAreaElement | HTMLInputElement
  // >;
  private control =
    contentChild<ElementRef<HTMLTextAreaElement | HTMLInputElement>>("input");

  onClick() {
    console.log("clicked!!!!");
    console.log("This.el", this.el);
    // console.log("this.control", this.control);
    console.log("this.control", this.control());
  }
}
