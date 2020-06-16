import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';

const Provider = ({children}) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ loadingMessage, setLoadingMessage ] = useState();
	const [ ringit, setRingit ] = useState([]);
	const [ rinki, setRinki ] = useState([]);
	const [ rinkiUsers, setRinkiUsers ] = useState([]);
	const [ categories, setCategories ] = useState([]);
	const [ userEmail, setUserEmail ] = useState("")
	const [ userId, setUserId ] = useState("")
	const [	error, setError	] = useState("")
	const [user, setUser] = useState({ email: ""});
	const [categoryInfo, setCategoryInfo] = useState({})


 	
	useEffect(() => {
	
		}, []);
        return (
            <AppContext.Provider 
                value={{
					
                }} 
            >
                {children}
            </AppContext.Provider>
        );
    }
    Provider.propTypes = {
        children: PropTypes.any
     };

     export default Provider;