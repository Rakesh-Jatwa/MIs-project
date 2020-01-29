import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ImsService } from 'app/ims.service';
declare var $:any
@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {
  InstallationTpye: any;
  InstallatData: Object;

  constructor(private fb:FormBuilder,private ImsSvr:ImsService) { 
    this.InstallationTpye = this.fb.group({
      installation: new FormControl('')
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
    this.ImsSvr.createInstallationType(this.InstallationTpye.value).subscribe(data=>{
      this.InstallatData = data;
      console.log(this.InstallatData);
      
    })
  }

}
