import React, {useState, useEffect} from 'react';
import {fetchData} from './fetchData';

const useGetUserPermissions = () => {
    const response = fetchData();
    const [permissions, setPermissions] = useState('');

    useEffect(() => {
		response.then((result) => {
            console.log(result.usuario)
			setPermissions(result.usuario.user_permissions)
		});
	}, []);
    
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