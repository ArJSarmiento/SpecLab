function Upload() {
    return ( 
        <div className="upload">
            <input id="file" type="file" accept=".gif,.jpg,.jpeg,.png" name="imageFile"/>
            <label htmlFor="file">
                <i className="material-icons">
                    add_photo_alternate
                </i> 
                &nbsp;
                Choose a Photo
            </label>
            <input id="submit" type="submit" name="submit" value="Upload" />
      </div>
    );
}

export default Upload;