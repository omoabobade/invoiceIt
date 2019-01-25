import React from 'react';
import { Link } from 'react-router-dom'


class InvoiceIndex extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Dashboard</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <button type="button" className="btn btn-sm btn-outline-secondary">
                            <span data-feather="file-text"></span>
                            Send Invoice
                        </button>
                    </div>
                </div>
                <div className="table-responsive">
                        <table className="table table-sm table-hover table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Bill To</th>
                                    <th scope="col">Invoice From</th>
                                    <th scope="col">Amount Due</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                    </table>
                </div>
            </div>
        )
    }

}

export default InvoiceIndex