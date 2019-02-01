import React from 'react';
import { Link } from 'react-router-dom';
import InvoiceLineItems from '../reusables/InvoiceLineItems.jsx';
import ImageUploader from '../reusables/ImageUploader.jsx';
import {connect} from 'react-redux';
import {Currencies} from "../reusables/Currency.jsx"
import Modal from "../reusables/Modal.jsx"


class InvoiceAdd extends React.Component{
    constructor(props){
        super(props)
        if(typeof this.props.item === "undefined"){
            this.state = {items:[{item:"",quantity:0.00, rate: 0.00}], showCurrency:false}
        }else{
            this.state = this.props;
        }

    }

    addItems = ()=>{
        let items = this.state.items;
        items.push({item:"",quantity:0.00, rate: 0.00});
        this.setState({items});
        this.props.dispatchState(this.state);
    }

    removeItem = (i)=>{
        let items = this.state.items;
        items.splice(i,1);
        this.setState({items});
        this.props.dispatchState(this.state);
    }

    lineItemInputChange = i=> event=>{
        let items = this.state.items;
        let item = items[i];
        item[event.target.id] = event.target.value;
        items[i] = item;
        this.setState({items});
        console.log(this.state)
        this.props.dispatchState(this.state);
    }

    inputChange = event => {
        this.setState({ 
            [[event.target.id]]  : event.target.value
        });
        console.log(this.state)
        this.props.dispatchState(this.state);
    }

    processFile = event => {
        let files = event.target.files;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            if (!file.type.startsWith('image/')){ continue }

            const reader = new FileReader();
            reader.onload = (e) =>{ this.setState({source:e.target.result})};
            reader.readAsDataURL(file);
        }
        this.props.dispatchState(this.state);
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

    setCurrency = event =>currency =>{
        this.setState({currency, showCurrency:false})
    }

    render(){
       
        return (
                <div className="col-md-12">
                    <div className="row">
                        <ImageUploader processFile={this.processFile} source={this.state.source}/>
                        <div className="col-md-6 themed-grid-col">
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">From</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" defaultValue={this.state.invoiceFrom} id="invoiceFrom" onChange={this.inputChange} aria-describedby="from" placeholder="From" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">To</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="invoiceTo" defaultValue={this.state.invoiceTo} onChange={this.inputChange} aria-describedby="to" placeholder="To" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="colFormLabel"  className="col-sm-2 col-form-label">Payment Terms</label>
                                <div  className="col-sm-9">
                                    <input type="text" className="form-control" id="paymentTerms" defaultValue={this.state.paymentTerms} onChange={this.inputChange} aria-describedby="to" placeholder="Payment Terms" />
                                </div>
                            </div>
                        </div>
                        <div  className="col-md-3 themed-grid-col">
                            <div className="form-group row">
                                <input type="text" className="form-control" id="invoiceno" defaultValue={this.state.invoiceno} onChange={this.inputChange} aria-describedby="invoiceNo" placeholder="Invoice No" />
                            </div>
                            <div className="form-group row">
                                <input type="date" className="form-control" id="invoiceDate"  defaultValue={this.state.invoiceDate} onChange={this.inputChange} aria-describedby="date" placeholder="Date" /> 
                            </div>
                            <div className="form-group row">
                                <input type="date" className="form-control" id="dueDate" defaultValue={this.state.dueDate} onChange={this.inputChange} aria-describedby="to" placeholder="Due Date" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Invoice Items</h1> 
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" onClick={()=>this.setState({showCurrency: !this.state.showCurrency})} id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">
                                    Currency
                                </button>
                            </div>
                        </div>
                    </div>
                    <InvoiceLineItems addItems={()=>this.addItems} removeItem={()=>this.removeItem} items={this.state.items} inputChange={this.inputChange} lineItemInputChange={this.lineItemInputChange}  />
                    <Modal show={this.state.showCurrency} hideModal={()=>this.setState({showCurrency:false})}>
                        <div class="list-group">
                            {
                                Object.values(Currencies).map(
                                    ({symbol, name, symbol_native, decimal_digits, rounding, code, name_plural})=><a className="list-group-item list-group-item-action" href="#" onClick={this.setCurrency(code)}>{name} {" "} {symbol}</a>
                                )
                            }
                        </div>
                    </Modal>
                </div>
            )
        }
    
}

function mapStateToProps(state) {
    return state.invoiceReducer;
}

function mapDispatchToProps(dispatch) {
    return{
        dispatchState(state){
            dispatch({type: "UPDATE_INVOICE_STATE", data:state});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceAdd) 