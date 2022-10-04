import React, { useState } from 'react';
import axios from "axios";
import Cards from './Cards';
import Upload from './Upload';
import './styles.css';

function Predict() {
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
        instance.post('/classify', formData, {
                headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data'
                }
            })
            .then((resp) => {
                setData(resp.data.result.tags.slice(0, 10));
                setShowUpload(true)
                setLoading(false)
                console.log(resp.data.result.tags.slice(0, 10));
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
            <Upload addFile={addFile} getPredictions={getPredictions} showUpload={showUpload} />
            
            {
                !loading && data.length!==0 ?
                <Cards items={data}/>
                : null
            }

            <footer></footer>
        </React.Fragment>
    );
}

export default Predict;