import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html'
})
export class TransferFundsComponent {
  transferForm: FormGroup;

  constructor(private fb: FormBuilder, private transferService: TransferService) {
    this.transferForm = this.fb.group({
      sourceAccountId: ['', Validators.required],
      targetAccountId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit() {
    if (this.transferForm.valid) {
      this.transferService.transferFunds(this.transferForm.value).subscribe(response => {
        alert('Transfer successful!');
      }, error => {
        alert('Transfer failed: ' + error.message);
      });
    }
  }
}