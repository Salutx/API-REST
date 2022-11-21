import React, {useState, useEffect} from 'react';
import { urlAPI } from '../base/api';
import Axios from 'axios';

const useGetUserPermissions = async () => {
    const [permissions, setPermissions] = useState('');

	const response = await Axios.get(`${urlAPI}categorys/usertypes`, {});
    setPermissions(response.data.user_types[0]);
    
    console.log(permissions)
    return [`${permissions}`];
}

const PermissionGate = ({children, permissions}) => {
    const userPermissions = useGetUserPermissions();

    if(permissions.some(permission => userPermissions.includes(permission))) {
        return children
    }

    return null;
}

export default PermissionGate;