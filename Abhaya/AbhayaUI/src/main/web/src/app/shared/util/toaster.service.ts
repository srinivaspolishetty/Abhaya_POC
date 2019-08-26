import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  // http://technoidlab.com/demos/ng6-toastr-notifications/
  constructor(public toastr: ToastrManager) { }

  showSuccess(position: any, msg: string) {
    this.toastr.successToastr(msg, 'Success!', { position: position });
  }

  showError(position: any, msg: string) {
    this.toastr.errorToastr(msg, 'Oops!', { position: position });
  }

  showWarning(position: any, msg: string) {
    this.toastr.warningToastr(msg, 'Alert!', { position: position });
  }

  showInfo(position: any, msg: string) {
    this.toastr.infoToastr(msg, 'Info', { position: position });
  }

  showCustom(position: any) {
    this.toastr.customToastr(`<span style='color: green; font - size: 16px; text - align: center; '>Custom Toast</span>`, null,
    { enableHTML: true, position: position} );
  }

  showToast(position: any = 'top-center') {
    this.showSuccess(position, '');
    this.toastr.infoToastr('This is a toast.', 'Toast', { position: position });
  }
}
