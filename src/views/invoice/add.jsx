import React from 'react';
import { Link } from 'react-router-dom'


class InvoiceAdd extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
                <div  className="col-md-12">
                    <div  className="row">
                        <div  className="col-md-2 themed-grid-col">
                            <img src="https://via.placeholder.com/150"  className="rounded float-left" width="100%"  />
                            <div  className="custom-file">
                                <input type="file"  className="custom-file-input" id="customFile" />
                                <label  className="custom-file-label" for="customFile">Choose file</label>
                            </div>
                        </div>
                        <div  className="col-md-6 themed-grid-col">
                            <div className="form-group row">
                                <label for="colFormLabel"  className="col-sm-2 col-form-label">From</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="invoiceFrom" aria-describedby="from" placeholder="From" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="colFormLabel"  className="col-sm-2 col-form-label">To</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="invoiceTo" aria-describedby="to" placeholder="To" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label for="colFormLabel"  className="col-sm-2 col-form-label">Payment Terms</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="paymentTerms" aria-describedby="to" placeholder="Payment Terms" />
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-3 themed-grid-col">
                            <div className="form-group row">
                                <input type="text" className="form-control" id="invoiceno" aria-describedby="invoiceNo" placeholder="Invoice No" />
                            </div>
                            <div className="form-group row">
                                <input type="text" className="form-control" id="invoiceDate" aria-describedby="date" placeholder="Date" /> 
                            </div>
                            <div className="form-group row">
                                <input type="text" className="form-control" id="dueDate" aria-describedby="to" placeholder="Due Date" />
                            </div>
                        </div>
                    </div>
                    <h4>Invoice Items</h4>
                    <div className="table-responsive">
                        <table className="table table-sm table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" style={{"width":"50%"}}>Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Rate</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><input type="text" className="form-control" id="item" aria-describedby="item" placeholder="Item" /></th>
                                    <td><input type="text" className="form-control" id="quantity" aria-describedby="quantity" placeholder="Quantity" /></td>
                                    <td><input type="text" className="form-control" id="rate" aria-describedby="item" placeholder="Rate" /></td>
                                    <td>0.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary btn-sm" >add line item</button>
                    </div>
                    <div  className="row">
                        <div  className="col-md-8">&nbsp;</div>
                        <div  className="col-md-4 order-md-2 mb-4">
                            <ul  className="list-group mb-3">
                                <li  className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6  className="my-0">Subtotal</h6>
                                </div>
                                <span  className="text-muted">$8</span>
                                </li>
                                <li  className="list-group-item d-flex justify-content-between bg-light">
                                <div>
                                    <h6  className="my-0">Tax</h6>
                                </div>
                                <span  className="text-muted">
                                    <input type="text" className="form-control" id="tax"/>
                                </span>
                                </li>
                                <li  className="list-group-item d-flex justify-content-between bg-light">
                                <div  className="text-success">
                                    <h6  className="my-0">Total</h6>
                                </div>
                                <span  className="text-success">-$5</span>
                                </li>
                                <li  className="list-group-item d-flex justify-content-between bg-light">
                                <div>
                                    <h6  className="my-0">Amount Paid</h6>
                                </div>
                                <span  className="text-muted">
                                    <input type="text" className="form-control" id="amountPaid" />
                                </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    
}

export default InvoiceAdd