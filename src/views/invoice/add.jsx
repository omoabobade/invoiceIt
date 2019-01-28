import React from 'react';
import { Link } from 'react-router-dom';
import InvoiceLineItems from '../reusables/InvoiceLineItems.jsx';


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
                    <InvoiceLineItems addItems={()=>this.addItems} removeItem={()=>this.removeItem} items={this.state.items} inputChange={this.inputChange} lineItemInputChange={this.lineItemInputChange}  />
                </div>
            )
        }
    
}

export default InvoiceAdd 