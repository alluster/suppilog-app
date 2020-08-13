import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';

const Provider = ({children}) => {
	const [articles, setArticles] = useState([])
	const [article, setArticle] = useState({})
	const [articleImage, setArticleImage] = useState({})

	const GetArticles = async () => {
		await axios.get('/api/getarticles')
		  	.then(async function (response) {
				await setArticles(response.data);
				await setArticleImage(article.image.fields.file.url);

		  	})
			.catch(function (error) {
				console.log(error);
			})
			.then(function() {
			});  
	}
	const GetArticle = async (id) => {
		await axios.get(`/api/getarticle/${id}`)
			.then(function (response) {
				setArticle(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});  
	}

	useEffect(() => {
	
		}, []);
        return (
            <AppContext.Provider 
                value={{
					GetArticles,
					articles,
					GetArticle,
					article,
					articleImage
					
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