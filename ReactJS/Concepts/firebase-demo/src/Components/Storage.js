import React, { useState } from 'react'
import { storage } from '../firebase'

function Storage() {

    const [file, setFile] = useState('');

    let upload = () => {

        const uploadTask = storage.ref(`data/${file.name}`).put(file);
        uploadTask.on('state_change', fn1, fn2, fn3);

        // Progress
        function fn1(snapshot) {

            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress} done.`);
        }

        // Error
        function fn2(err) {

            console.log('Error is: ', err);
        }

        // Success
        function fn3() {

            uploadTask.snapshot.ref.getDownloadURL().then(url => {
                console.log(url);
            })
        }
    }
    return (
        <form className='form-container'>
            
            <label htmlFor='file'>File</label>
            <input type="file" accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={upload}>Upload</button>
            
        </form>
    )
}

export default Storage
