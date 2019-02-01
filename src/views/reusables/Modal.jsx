import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props)=>
    (props.show)?
    <div>
        <div id="exampleModalLive" className="modal fade show" style={{display: "block", overflow:"auto"}} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLiveLabel">{props.title}</h5>
                    <button type="button" className="close" onClick={props.hideModal} aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.hideModal}>Close</button>
                </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade show"></div>
    </div> : ""

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
}

export default Modal;
