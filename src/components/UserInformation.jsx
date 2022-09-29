import axios from "axios";
import { useEffect, useState } from "react";
import AddDataUser from './AddDataUser';

let currentUserId = 1;

function UserInformation(){
    const [dataUser, setDataUser] = useState([]);

    function addInform(data) {
        const newDataUser = {id: ++currentUserId, ...data};
        setDataUser([...dataUser, newDataUser]);
        console.log([...dataUser, newDataUser])
    }
    useEffect(() => {
        async function getDataUser(){
            const userInform = await axios.get('http://localhost:8000/user');
            setDataUser(userInform.data);
        }
        getDataUser();
    }, []);

    return (
        <>
            {/* <AddDataUser addInform={addInform}/> */}
        </>
    );
}
export default UserInformation;