import React from 'react';
import PropTypes from 'prop-types';


const ImageUploader = (props)=>{
    return <div  className="col-md-2 themed-grid-col">
    <img src={props.source}  className="rounded float-left" width="100%"  />
    <div  className="custom-file">
        <input type="file" onChange={props.processFile}  className="custom-file-input" id="customFile" />
        <label  className="custom-file-label" htmlFor="customFile">Choose file</label>
    </div>
</div>
}

ImageUploader.propTypes = {
    processFile: PropTypes.func.required,
    source: PropTypes.string.required
}

ImageUploader.defaultProps = {
    source: "https://via.placeholder.com/150"
}

export default ImageUploader