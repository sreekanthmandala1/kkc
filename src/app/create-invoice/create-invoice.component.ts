import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InvoiceDataDetails } from '../Models/invoice-data';
import { UserInvoiceService } from '../services/user-invoice.service';
@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
  clsName = 'one';
  clsName2 = 'two';
  Name = "";
  supplierName = "";
  invoiceVersion = "";
  toggle = true;
  status = 'Enable';
  colorGreen: 'green';
  customerDetails: FormGroup;
  supplierDetailsFb: FormGroup;
  customerPartyFb: FormGroup;
  paymentDetailsFb: FormGroup;
  invoiceLinesFb:FormGroup;
  isEditItems: boolean;
  InvoiceArray: Array<any> = [];
  newAttribute: any = {};
  index: any;
  username: string;
  totalAmount: number = 0;
  userDetails: any = [];
  verticalLine = false;
  supplierVerticalLine = false;
  customerPartyVerticalLine = false;
  paymentVerticalLine = false;
  loading: boolean;

  submitSpinner: boolean = false;
  MBTextChange:boolean = true;
  MBTextChangeL:boolean= false;
  MBTextChangeInvoiceSent = false;
  Cancel = 'Cancel'
  rawdata: string;
  viewRawData: boolean;
  clicked = false;
  name=true;
  
  public next:any = 'Show';
  constructor(private activatedroute: ActivatedRoute, private http: HttpClient,
    private userInvoiceService: UserInvoiceService, private fb: FormBuilder, private router : Router) {
    this.activatedroute.queryParams.subscribe(data => {
      
      this.username = data.name;
    })
  }

  ngOnInit(): void {
    // this.customerDetails = new FormGroup({
    //   'date': new FormControl(null, Validators.required),
    //   'invoiceVersion': new FormControl(null, Validators.required),
    //   'supplierName': new FormControl(null, Validators.required),
    //   'registationName': new FormControl(null, Validators.required),
    //   'country': new FormControl(null, Validators.required),
    //   'street': new FormControl(null, Validators.required),
    //   'city': new FormControl(null, Validators.required),
    //   'postalCode': new FormControl(null, Validators.required),
    //   'vatNumber': new FormControl(null, Validators.required),
    //   'kvkNumber': new FormControl(null, Validators.required),
    //   'customerName': new FormControl(null, Validators.required),
    //   'customerEmail': new FormControl(null, Validators.required),
    //   'customerCountry': new FormControl(null, Validators.required),
    //   'customerStreet': new FormControl(null, Validators.required),
    //   'customerCity': new FormControl(null, Validators.required),
    //   'customerPostalCode': new FormControl(null, Validators.required),
    //   'customerVatNumber': new FormControl(null, Validators.required),
    //   'customerKvkNumber': new FormControl(null, Validators.required),
    //   'dueDate': new FormControl(null, Validators.required),
    //   'ibanNumber': new FormControl(null, Validators.required),
    //   'branchCode': new FormControl(null, Validators.required),
    //   'itemName': new FormControl(null, Validators.required),
    //   'quantity': new FormControl(null, Validators.required),
    //   'price': new FormControl(null, Validators.required),
    //   'total': new FormControl(null, Validators.required),
    // })

    this.customerDetails = this.fb.group({
      'date': new FormControl(null, Validators.required),
      'invoiceVersion': new FormControl('Bissv3', Validators.required),
      
    })
    this.supplierDetailsFb = this.fb.group({
      'supplierName': new FormControl('Pandey IT Solutions', Validators.compose([
        Validators.required
      ])),
      'registrationName': new FormControl('Pandey IT Solutions', Validators.required),
      'country': new FormControl('NL', Validators.required),
      'street': new FormControl('Rubrum 1', Validators.required),
      'city': new FormControl('Akersloot', Validators.required),
      'postalCode': new FormControl('1921ZB', Validators.required),
      'vatNumber': new FormControl('NL0025', Validators.required),
      'kvkNumber': new FormControl('62383183',),
    })
    this.customerPartyFb = this.fb.group({

      'customerName': new FormControl('sreekanth', Validators.compose([
        Validators.required
      ])),
      'customerEmail': new FormControl('smandala@ariqt.com', Validators.compose([
        Validators.required,
        
      ])),
      'customerCountry': new FormControl('India', Validators.required),
      'customerStreet': new FormControl('Ecil 5-56 ', Validators.required),
      'customerCity': new FormControl('Hyderabad', Validators.required),
      'customerPostalCode': new FormControl('500055', Validators.required),
      'customerVatNumber': new FormControl('GBbc123', Validators.required),
      'customerKvkNumber': new FormControl('1234567'),
    })

    this.paymentDetailsFb = this.fb.group({
      'dueDate': new FormControl(null, Validators.required),
      'ibanNumber': new FormControl('GBcd1234', Validators.required),
      'branchCode': new FormControl('548976', Validators.required),
    })

    this.invoiceLinesFb = this.fb.group({
      'itemName': new FormControl('item1', Validators.required),
      'quantity': new FormControl('23', Validators.required),
      'price': new FormControl('25000', Validators.required),
      'total': new FormControl('575000', Validators.required),
    })
    this.addInvoiceValue(this.index);
    this.isEditItems = !this.isEditItems;
  }
  onEditCloseItems() {
    this.isEditItems = !this.isEditItems;
  }
  deleteInvoiceValue(index: any) {
    this.InvoiceArray.splice(index, 1);
  }
  addInvoiceValue(index) {
    
    this.InvoiceArray.push(this.newAttribute);
    this.newAttribute = {};
  }
  quantitychange() {
    
    for (var i = 1; i <= this.InvoiceArray.length; i++) {

      var itemsdata =
      {
        "quatity": (<any>(document.getElementById('quat' + i))).value,
        "price": (<any>(document.getElementById('price' + i))).value
      };
      (<any>(document.getElementById('total' + i))).value = "";
      (<any>(document.getElementById('total' + i))).value = itemsdata.quatity * itemsdata.price;
    }

  }
  pricechange() {
    
    for (var i = 1; i <= this.InvoiceArray.length; i++) {

      var itemsdata =
      {
        "quatity": (<any>(document.getElementById('quat' + i))).value,
        "price": (<any>(document.getElementById('price' + i))).value
      };
      (<any>(document.getElementById('total' + i))).value = "";
      (<any>(document.getElementById('total' + i))).value = itemsdata.quatity * itemsdata.price;
    }

  }
  SubmitInvoice(event:any) {
    
    this.MBTextChangeL =true;
    this.submitSpinner = true;
    this.MBTextChange = false;
    
    var Invoiceitemlines = [];
    var invoiceDate = (<any>(document.getElementById('txtinvoiceDate'))).value;
    var supName = (<any>(document.getElementById('txtsupName'))).value;
    var supStreet = (<any>(document.getElementById('txtsupStreet'))).value;
    var supCity = (<any>(document.getElementById('txtsupCity'))).value;
    var supPostalCode = (<any>(document.getElementById('txtsupPostalCode'))).value;
    var supCountry = (<any>(document.getElementById('country'))).value;
    var supVatNumber = (<any>(document.getElementById('txtsupVatNumber'))).value;
    var supKvkNumber = (<any>(document.getElementById('txtsupKvkNumber'))).value;
    var supRegistration = (<any>(document.getElementById('txtsupRegistration'))).value;
    var CustmerName = (<any>(document.getElementById('txtCustmerName'))).value;
    var CustmerStreet = (<any>(document.getElementById('txtCustmerStreet'))).value;
    var CustmerCity = (<any>(document.getElementById('txtCustmerCity'))).value;
    var CustPostalCode = (<any>(document.getElementById('txtPostalCode'))).value;
    var CustmerCountry = (<any>(document.getElementById('ddlCustcountry'))).value;
    var CustmerVatNumber = (<any>(document.getElementById('txtCustmerVatNumber'))).value;
    var CustmerKvkNumber = (<any>(document.getElementById('txtCustmerKvkNumber'))).value;
    //var CustmerRegisterName = (<any>(document.getElementById('txtCustmerRegisterName'))).value;
    var CustmerEmail = (<any>(document.getElementById('txtCustmerEmail'))).value;
    var PaymentDate = (<any>(document.getElementById('txtPaymentDate'))).value;
    var PaymentIbanNumber = (<any>(document.getElementById('txtPaymentIbanNumber'))).value;
    var PaymentBranch = (<any>(document.getElementById('txtPaymentBranch'))).value;
    var TotalAmount = 0;

    var invoicedata = new InvoiceDataDetails();
    var invoicedetails = new Array();

    for (var i = 1; i <= this.InvoiceArray.length; i++) {
      var itemsdata =
      {
        "invoiceItemName": (<any>(document.getElementById('itemname' + i))).value,
        "invoiceQuantity": (<any>(document.getElementById('quat' + i))).value,
        "invoiceprice": (<any>(document.getElementById('price' + i))).value,
        "invoicetotalAmount": (<any>(document.getElementById('total' + i))).value
      };
      TotalAmount = TotalAmount + parseInt(itemsdata.invoicetotalAmount);

      invoicedetails.push(itemsdata);
    }
    invoicedata.invoiceLine = invoicedetails;
    var TotalTax = TotalAmount * (21 / 100);
    var invoicetotalamount = String(TotalAmount);
    var invoicetaxamount = String(TotalTax);
    
    var InvoiceData =
    {
      InvoiceDate: invoiceDate, InvoiceDueDate: PaymentDate, InvoiceNumber: "INV1234",
      TotalAmount: invoicetotalamount, TotalTaxAmount: invoicetaxamount, TaxPercentage: "21",
      Supplier: supName, SupplierStreet: supStreet, SupplierCity: supCity,
      SupplierPostalCode: supPostalCode, SupplierCountry: supCountry,
      KvkNumber: supKvkNumber, VatNumber: supVatNumber, RegistrationName: supRegistration,
      Customer: CustmerName, CustomerStreet: CustmerStreet, CustomerCity: CustmerCity,
      CustomerPostalCode: CustPostalCode, CustomerCountry: CustmerCountry, CustomerEmail: CustmerEmail,
      CustomerKvkNumber: CustmerKvkNumber, CustomerVatNumber: CustmerVatNumber,
      IbanNumber: PaymentIbanNumber, PaymentBranch: PaymentBranch, base64: "", InvoiceLinesDataInfo: invoicedata.invoiceLine
    }
    let opt = { responseType: 'text' as 'text' };
    
    this.http.post('https://einvoiceservice-dev.azurewebsites.net/api/InvoiceService', InvoiceData,opt).subscribe(data => {
      if(data=="")

      {
 
      //  alert("Invoice Created Successfully,Please Check Your Mail");
 
       this.rawdata="";
       this.viewRawData=false;
      }
 
      else{
 
      //  alert("Invoice Created Successfully,Invoice Send through Peppol");
 
       this.viewRawData=true;
 
       this.rawdata=data;
 
      }
      
      this.loading = false;

      this.submitSpinner = true;
      // alert("Invoice Send Successfully, Please Check your Mail...");
      this.MBTextChangeL = false;
      this.Cancel = 'Close'
      this.MBTextChangeInvoiceSent = true;
    },
    )
  }

  // onUserSubmit(){
  //   this.userInvoiceService.onGetUserDetails().subscribe((data)=>{
  //     this.userDetails = data;
  //   },
  //   (error)=>{
  //     console.log(error)
  //   })
  // }

  onLineClick() {
    // this.verticalLine = !this.verticalLine;
    
    
  }
  

  onLineClickSupplierDetails() {
    this.supplierVerticalLine = !this.supplierVerticalLine;
  }

  onNext() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  onSupplierLineClick() {
    this.supplierVerticalLine = !this.supplierVerticalLine;
    
  }

  onCustomerPartyClick() {
    this.customerPartyVerticalLine = !this.customerPartyVerticalLine;
  }

  onPaymentClick() {
    this.paymentVerticalLine = !this.paymentVerticalLine;
  }

  onCancelInvoice(){
    this.submitSpinner = false;
    this.MBTextChangeL = false;
    this.MBTextChange = true;
    let currentUrl = this.router.url;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/create-invoice']);
  }

}
