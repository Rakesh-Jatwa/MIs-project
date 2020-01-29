import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ImsService } from 'app/ims.service';
declare var $:any
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  AreaForm: any;
  ApiData: any;



  constructor(private fb:FormBuilder,private MisSrv:ImsService) {

    this.AreaForm = this.fb.group({
      Area:new FormControl('')
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
    console.log(this.AreaForm.value);
    this.MisSrv.createArea(this.AreaForm.value).subscribe(data=>
      {
        this.ApiData =data;
        console.log(this.ApiData);
        
      })
  }
  

}
