import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';

const Provider = ({children}) => {
	const [articles, setArticles] = useState([])
	const [article, setArticle] = useState({})
	const [articleImage, setArticleImage] = useState({})
	const [persons, setPersons] = useState([])
	const [pageContent, setPageContent] = useState({})
	const [products, setProducts] = useState([])

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
	const GetPersons = async () => {
		await axios.get('/api/getpersons')
		  	.then(async function (response) {
				await setPersons(response.data);

		  	})
			.catch(function (error) {
				console.log(error);
			})
			.then(function() {
			});  
	}
	const GetPageContent = async (id) => {
		await axios.get(`/api/getpagecontent/${id}`)
			.then(function (response) {
				setPageContent(response.data);
			})
			.catch(function (error) {
				console.log(error);
			})
			.then(function () {
			});  
	}

	const GetProducts= async () => {
		await axios.get('/api/getproducts')
		  	.then(async function (response) {
				await setProducts(response.data);

		  	})
			.catch(function (error) {
				console.log(error);
			})
			.then(function() {
			});  
	}

	console.log(products)

	useEffect(() => {
	
		}, []);
        return (
            <AppContext.Provider 
                value={{
					GetPageContent,
					pageContent,
					GetArticles,
					articles,
					GetArticle,
					article,
					articleImage,
					persons,
					GetPersons,
					products,
					GetProducts
					
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