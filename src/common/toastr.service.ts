import { Injectable } from '@angular/core';
import { ToastsManager } from "ng2-toastr/ng2-toastr";

declare let toastr: any

@Injectable()
export class ToastrService {
    constructor(public toastr: ToastsManager) {
        
    }

    success(message: string, title?: string) {
        toastr.success(message, title);
    }

    info(message: string, title?: string) {
        toastr.info(message, title);
    }

    warning(message: string, title?: string) {
        toastr.warning(message, title);
    }

    error(message: string, title?: string) {
        toastr.error(message, title);
    }   
}