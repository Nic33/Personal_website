import { Component, EventEmitter, Output } from '@angular/core';
import { ToasterPlacement } from '@coreui/angular';

@Component({
  selector: 'app-custom-toast',
  templateUrl: './custom-toast.component.html',
  styleUrls: ['./custom-toast.component.css']
})
export class CustomToastComponent {
  @Output() toggleToastEvent = new EventEmitter<void>();

  placement = ToasterPlacement.TopCenter;
  visible = false;
  percentage = 0;

  message: string = '';
  logo: string = '';
  my_color: string = '';

  toggleToast(message: string, logo:number) {

    this.message = message;
    
    if (logo == 0){
      this.logo = "check_circle";
      this.my_color = "success";
    }
    if (logo == 1){
      this.logo = "error";
      this.my_color = "danger";

    }
    if (logo == 2){
      this.logo = "info";
      this.my_color = "info";

    }

    this.visible = !this.visible;
    this.toggleToastEvent.emit();
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
  
}
