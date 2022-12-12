import { useState, useEffect } from 'react';
import { fetchData } from './fetchData';

const useGetUserPermissions = () => {
    const [permissions, setPermissions] = useState('');

    useEffect(() => {
        const response = fetchData();
		response.then((result) => {
			setPermissions(result.user.user_type)
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