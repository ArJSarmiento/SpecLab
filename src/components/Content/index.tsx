import React, { useState } from 'react';
import axios, { AxiosResponse } from "axios";
import Cards from './Cards';
import './styles.css';

function Content() {
    const [image, setImage] = useState({
        files : [],
    });
    const [data, setData] =  useState([]);
    const [showUpload, setShowUpload] = useState(false)
    const [loading, setLoading] = useState(false)

    const url = process.env.REACT_APP_API_URL;
    const instance = axios.create({
        baseURL: url
    });
    
    const getPredictions = () => {
        setLoading(true);
        const files = image
        const formData = new FormData()
        formData.append('imageFile', files.files[0])
        setShowUpload(false)
        instance.post(url+'/classify', formData, {
                headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
                }
            })
            .then((resp) => {
                setData(resp.data)
                setShowUpload(true)
                setLoading(false)
                console.log(data)
            }).catch((exception) => {
                setShowUpload(true)
                setLoading(false)
                console.error(exception.message);
            });
    }
    
    const addFile = (e:any) => {
        let files = e.target.files;
        setImage({ files: files });
        setShowUpload(true)
    }

    return (
        <React.Fragment>
            <div className="upload">
                <input id="file" type="file" accept=".gif,.jpg,.jpeg,.png" name="imageFile" 
                    onChange={(event)=> { 
                        addFile(event) 
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
                    showUpload ?
                        <button id="submit" onClick={getPredictions} value="Upload">
                            Upload
                        </button>
                    : null
                }
            </div>
            
            {
                !loading && data.length!==0 ?
                <Cards props={data}/>
                : null
            }

            <footer></footer>
        </React.Fragment>
    );
}

export default Content;