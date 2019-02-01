import React from 'react';
import { Link } from 'react-router-dom';
import InvoiceLineItems from '../reusables/InvoiceLineItems.jsx';
import Currencies from "../reusables/Currency.jsx"


class InvoiceAdd extends React.Component{
    constructor(props){
        super(props)
        this.state = {items:[{item:"",quantity:0.00, rate: 0.00}]}
    }

    componentDidMount(){
        
    }

    addItems = ()=>{
        let items = this.state.items;
        items.push({item:"",quantity:0.00, rate: 0.00});
        this.setState({items});
    }
    removeItem = (i)=>{
        let items = this.state.items;
        items.splice(i,1);
        this.setState({items});
    }

    lineItemInputChange = event=> i=>{
        let items = this.state.items;
        let item = items[i];
        item[event.target.id] = event.target.value;
        items[i] = item;
        this.setState({items});
        console.log(this.state)
    }

    inputChange = event => {
        this.setState({ 
            [[event.target.id]]  : event.target.value
        });
        console.log(this.state)
    }

    calculateAmount(){
        let recursiveAmount = 0.00;
        const amount = 0.00;
        const discountedAmount = 0.00;
        const taxAmount = 0.00;
        const totalAmount = 0.00


        this.state.items.map((item)=> recursiveAmount += item.quantity*item.rate )
        if(this.state.shipping){
            amount = recursiveAmount + shipping
        }else{
            amount = recursiveAmount;
        }
        if(this.state.discount && this.state.isflatdiscount){
            amount -= this.state.discount
        }else if(this.state.discount && !this.state.isflatdiscount){
            discountedAmount = amount*(this.state.discount/100)
        }

        if(this.state.tax && this.state.isflattax){
            amount -= this.state.tax
        } else if(this.state.tax && !this.state.isflattax){
            taxAmount = amount*(this.state.tax/100)
        }

        totalAmount = amount - taxAmount - discountedAmount
        this.setState({totalAmount});
        
    }
    render(){
        return (
                <div  className="col-md-12">
                    <div  className="row">
                        <div  className="col-md-2 themed-grid-col">
                            <img src="https://via.placeholder.com/150"  className="rounded float-left" width="100%"  />
                            <div  className="custom-file">
                                <input type="file"  className="custom-file-input" id="customFile" />
                                <label  className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>
                        </div>
                        <div  className="col-md-6 themed-grid-col">
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">From</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="invoiceFrom" onChange={this.inputChange} aria-describedby="from" placeholder="From" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">To</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="invoiceTo" onChange={this.inputChange} aria-describedby="to" placeholder="To" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">Payment Terms</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="paymentTerms" onChange={this.inputChange} aria-describedby="to" placeholder="Payment Terms" />
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-3 themed-grid-col">
                            <div className="form-group row">
                                <input type="text" className="form-control" id="invoiceno" onChange={this.inputChange} aria-describedby="invoiceNo" placeholder="Invoice No" />
                            </div>
                            <div className="form-group row">
                                <input type="date" className="form-control" id="invoiceDate" onChange={this.inputChange} aria-describedby="date" placeholder="Date" /> 
                            </div>
                            <div className="form-group row">
                                <input type="date" className="form-control" id="dueDate" onChange={this.inputChange} aria-describedby="to" placeholder="Due Date" />
                            </div>
                        </div>
                    </div>
                    <h4>Invoice Items</h4> 
                    <div class="btn-toolbar mb-2 mb-md-0">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Currency
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                { 
                                    Currencies.map((currency)=>
                                        <a class="dropdown-item" href="#">{currency}</a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <InvoiceLineItems addItems={()=>this.addItems} removeItem={()=>this.removeItem} items={this.state.items} inputChange={this.inputChange} lineItemInputChange={this.lineItemInputChange}  />
                </div>
            )
        }
    
}

export default InvoiceAdd 