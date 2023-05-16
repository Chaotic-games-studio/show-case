import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chaotic Games';

  @ViewChild('email', { static: false }) email!: ElementRef;
  @ViewChild('empty', { static: false }) empty!: ElementRef;
  @ViewChild('sub', { static: false }) sub!: ElementRef;

  async oops() {
    if (this.email.nativeElement.value.length > 0) {

      if (this.email.nativeElement.value.length === 1) {

        this.sub.nativeElement.setAttribute('disabled', true);
        this.empty.nativeElement.innerHTML = 'زرنگ! ایمیلت رو درست بنویس';
        document.querySelector('.empty')?.classList.remove('d-op');

        await setTimeout(() => {

          this.sub.nativeElement.removeAttribute('disabled', true);
          document.querySelector('.empty')?.classList.add('d-op');

        }, 1000);
      } else if (!this.email.nativeElement.value.includes("@") || !this.email.nativeElement.value.includes(".")) {

        this.sub.nativeElement.setAttribute('disabled', true);
        this.empty.nativeElement.innerHTML = 'ایمیل بلد نیستی؟';
        document.querySelector('.empty')?.classList.remove('d-op');

        await setTimeout(() => {

          this.sub.nativeElement.removeAttribute('disabled', true);
          document.querySelector('.empty')?.classList.add('d-op');

        }, 1000);
      } else {
        document.querySelector('.oops')?.classList.remove('d-none');
      }

    } else {

      this.empty.nativeElement.innerHTML = 'ایمیلت رو وارد کن';
      this.sub.nativeElement.setAttribute('disabled', true);
      document.querySelector('.empty')?.classList.remove('d-op');

      await setTimeout(() => {

        this.sub.nativeElement.removeAttribute('disabled', true);
        document.querySelector('.empty')?.classList.add('d-op');

      }, 1000);
    }
  }
  return() {
    document.querySelector('.oops')?.classList.add('d-none');
  }


}
