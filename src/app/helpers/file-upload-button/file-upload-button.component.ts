import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
    selector: 'app-file-upload-button',
    templateUrl: './file-upload-button.component.html',
    styleUrls: ['./file-upload-button.component.css'],
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class FileUploadButtonComponent implements OnInit {
    @Input() file: any;
    @Input() _file: any;
    @Input() fileType: string;
    @Input() require: boolean;
    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
    url:string;
    constructor() { }


    ngOnInit() {
    }

    emitValue(){
        var reader = new FileReader();
        reader.onload = (event:any) => {
          this.url = event.target.result;
        }
        reader.readAsDataURL(this._file);

        this.notify.emit(this._file);
    }

    onNotify(file:any):void {
        this._file = file;
    }
}
