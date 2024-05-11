import React, { useEffect, useState } from 'react'
import { database } from '../firebase'

function FireStore() {

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    useEffect(() => {
        (async () => {

            const uid = 'vgTM1TVM6L2yyzr4A4H2';
            let obj = await database.users.doc(uid).get();
            console.log(obj.data());

            let data = await database.users.orderBy('age', 'asc').get();
            data.forEach(obj => console.log(obj.data()));
        })()
    }, [])

    let create = async () => {

        // Create a new object in users collection
        let res = await database.users.add({ name, age });

        // Adding using our own uid
        // let res = await database.users.doc('11111111').set({name,age});

        console.log(res);
    }

    let update = async () => {

        let uid = 'ZHyBm9dDITtn8UUkiH7R';
        await database.users.doc(uid).update({
            name, age
        })
    }

    let remove = async () => {

        let uid = 'ZHyBm9dDITtn8UUkiH7R';
        await database.users.doc(uid).delete();
    }

    return (
        <div>
            <label htmlFor='name'>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor='age'>Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

            <button onClick={create}>Create</button>
            <button onClick={update}>Update</button>
            <button onClick={remove}>Delete</button>
        </div>
    )
}

export default FireStore
