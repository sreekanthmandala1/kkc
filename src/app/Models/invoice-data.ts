export class InvoiceDataDetails {
    invoiceDate: string;
    invoiceDueDate: string;
    invoiceNumber: string;
    totalAmount: string;
    totalTaxAmount: string;
    taxPercentage: string;
    supplier: string;
    supplierStreet: string;
    supplierCity: string;
    supplierPostalCode: string;
    supplierCountry: string;
    registrationName: string;
    description: string;
    ibanNumber: string;
    vatNumber: string;
    kvkNumber: string;
    base64: string;
    mimeType: string;
    customer: string;
    customerStreet: string;
    customerCity: string;
    customerPostalCode: string;
    customerCountry: string;
    customerEmail: string;
    customerVatNumber: string;
    customerKvkNumber: string;
    paymentBranch: string;
    invoiceLine: InvoiceLinesData[];
}
export class InvoiceLinesData {
    InvoiceItemName: string
    InvoiceQuantity: string
    Invoiceprice: string
    InvoicetotalAmount: string
  }
