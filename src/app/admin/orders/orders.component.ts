import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router} from '@angular/router';
import { MouseEvent } from '@agm/core';
import {FormGroup , FormBuilder , FormControl , Validators} from '@angular/forms'
import {ImsService} from '../../ims.service'
declare var $:any



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  providers:[ImsService]
})
export class OrdersComponent implements OnInit {


  // displayedColumns: string[] = ['s_no', 'createdDate', 'customerDetails', 'installationDetails', 'installationDateAndTime', 'DateAddedBy', 'installationStatus', 'action'];
  
 
  persons =[];

  createOrderForm:FormGroup;
  foods=['zaid','raamesh','gaurav']
  addOrders = false

    // google maps zoom level
    zoom: number = 8;
  
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    

  constructor(private router:Router , private FormBuilder:FormBuilder , private ImsService:ImsService) { 
    
 
    
    this.createOrderForm = this.FormBuilder.group({
        customerName: ['', Validators.required],
        customerArea: ['', [Validators.required, Validators.maxLength(60)]],
        customerPhone: ['', [Validators.required, Validators.maxLength(10)]],
        customerAddress: ['', Validators.required],
        customerEmail: new FormControl(),
        installationPrice:new FormControl(),
        installationType:new FormControl(),
        customerDate:new FormControl(),
        customerTimeSlot:new FormControl(),
        installationDetails:new FormControl(),
        customerLocation:new FormControl(),
        locationLatitude:new FormControl(),
        locationLongitude:new FormControl(),
      
    })

    
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]


  ngOnInit() {
    debugger  
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
  
  this.persons = [{"id":"3","firstName":"28/01/2020","lastName":"30/01/2020"},
    {"id":"10","firstName":"28/01/2020","lastName":"30/01/2020"},
    {"id":"11","firstName":"28/01/2020","lastName":"30/01/2020"}]




  this.ImsService.getAllOrders().subscribe(res=>{
    debugger
    
  })
    
  }

  changePage(e){
    debugger
  }

  orderForm(){
    debugger
    this.addOrders = true
    // this.router.navigate(['addOrders'])
  }

  createOrder(orderData){
    debugger
    this.ImsService.createOrders(orderData).subscribe(res=>{
      debugger
      console.log('saa')
    })
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
