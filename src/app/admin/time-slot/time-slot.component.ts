import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ImsService } from 'app/ims.service';
declare var $:any
@Component({
  selector: 'app-time-slot',
  templateUrl: './time-slot.component.html',
  styleUrls: ['./time-slot.component.scss']
})
export class TimeSlotComponent implements OnInit {
  TimeSlotForm: any;
  SlotData: any;

  constructor(private fb:FormBuilder,private ImsServic:ImsService) {
    this.TimeSlotForm = this.fb.group({
      TimeSlot: new FormControl('')
    })
   }

  ngOnInit() {
    $(document).ready(function() {
      var zaid = $('#example').DataTable( {
           dom: 'Bfrtip',
           
           buttons: [{ extend: 'copy', className: 'btn btn-primary btn-sm'},
           { extend: 'csv', className: 'btn btn-primary  btn-sm' },
           { extend: 'excel', className: 'btn btn-primary btn-sm' },
           { extend: 'pdf', className: 'btn btn-primary btn-sm' },
           { extend: 'print', className: 'btn btn-primary btn-sm' }]
       } );
   } );
  }
  onSubmit(){
    this.ImsServic.createTimesSlot(this.TimeSlotForm.value).subscribe(data=>{
      this.SlotData = data;
      console.log(this.SlotData);
    })
  }
}
