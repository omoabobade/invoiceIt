import React from 'react';
import PropTypes from 'prop-types';

const InvoiceLineItems = (props)=>{
            return (<div>
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
                                    {
                                        props.items.map((item, i)=>
                                            <tr key={i}>
                                                <td><input className="form-control" id="item" defaultValue={item.item} aria-describedby="item" placeholder="Item" onChange={props.lineItemInputChange(i)} /></td>
                                                <td><input className="form-control" id="quantity" defaultValue={item.quantity} aria-describedby="quantity" placeholder="Quantity" onChange={props.lineItemInputChange(i)} /></td>
                                                <td><input className="form-control" id="rate" defaultValue={item.rate}aria-describedby="item" placeholder="Rate" onChange={props.lineItemInputChange(i)} /></td>
                                                <td>
                                                    {item.quantity*item.rate}
                                                    <button type="button" className="close" onClick={props.removeItem(i)} aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                     }
                                </tbody>
                            </table>
                            <button type="button" className="btn btn-primary btn-sm" onClick={props.addItems()}>add line item</button>
                        </div>
                        <div  className="row">
                            <div  className="col-md-7">&nbsp;</div>
                            <div  className="col-md-5 order-md-2 mb-4">
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
                                            <input type="text" className="form-control" id="tax" onChange={props.inputChange}/>
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
                                            <input type="text" className="form-control" id="amountPaid" onChange={props.inputChange}/>
                                        </span>
                                        </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    )
                }

InvoiceLineItems.propTypes = {
    items: PropTypes.array.isRequired,
    addItems: PropTypes.func.isRequired,
    lineItemInputChange: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired
}

export default InvoiceLineItems;