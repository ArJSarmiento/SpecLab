function Upload(props:any) {
    return ( 
    <div className="upload">
        <input id="file" type="file" accept=".gif,.jpg,.jpeg,.png" name="imageFile" 
            onChange={(event)=> { 
                props.addFile(event) 
            }} 
        />
        <label htmlFor="file">
            <i className="material-icons">
                add_photo_alternate
            </i> 
            &nbsp;
            Choose a Photo
        </label>

        {
            props.showUpload ?
                <button id="submit" onClick={props.getPredictions} value="Upload">
                    Upload
                </button>
            : null
        }
    </div>
    );
}

export default Upload;