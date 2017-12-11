import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[appFileUploadButton]'
})
export class FileUploadButtonDirective {
    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
    constructor(private el: ElementRef) {
        // this.applyColors(this.borderColor || 'pink', this.backgroundColor || 'red');
    }

    files:any;
    file:any;

    @Input() borderColor: string;
    @Input() backgroundColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.applyColors(this.backgroundColor || 'red', this.borderColor || 'pink');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.applyColors(this.borderColor || 'pink', this.backgroundColor || 'red');
    }

    applyColors(borderColor: string, backgroundColor: string): void{
        this.el.nativeElement.style.borderColor = borderColor;
        this.el.nativeElement.style.backgroundColor = backgroundColor;
        this.el.nativeElement.style.color = borderColor;
    }

    @HostListener('change') onChange() {
        this.prepareFile();
    }

    prepareFile(){
        this.files = this.el.nativeElement.files;
        this.file = this.files[0];

        this.emitValue();
        console.log(this.file);
    }

    emitValue(){
        console.log(this.file);
        this.notify.emit(this.file);
    }

}
