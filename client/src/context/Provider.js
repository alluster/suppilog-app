import React, { useState, useEffect } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Provider = ({children}) => {
	const [articles, setArticles] = useState([])
	const [article, setArticle] = useState({})
	const [articleImage, setArticleImage] = useState({})
	const [persons, setPersons] = useState([])
	const [pageContent, setPageContent] = useState({})
	const [lang, setLang] = useState(localStorage.getItem('lang') || 'en-US')
	const [loading, setLoading] = useState(false)
	const { t, i18n } = useTranslation();

	const GetArticles = async () => {
		setLoading(true)
		await axios.get('/api/getarticles')
		  	.then(async function (response) {
				await setArticles(response.data);
				await setArticleImage(article.image.fields.file.url);
				setLoading(false)

		  	})
			.catch(function (error) {
				console.log(error);
				setLoading(false)

			})
			.then(function() {
				setLoading(false)

			});  
	}
	const GetArticle = async (id) => {
		setLoading(true)
		await axios.get(`/api/getarticle/${id}`)
			.then(function (response) {
				setArticle(response.data);
				setLoading(false)
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false)

			})
			.then(function () {
				setLoading(false)
			});  
	}
	const GetPersons = async () => {
		setLoading(true)
		await axios.get('/api/getpersons')
		  	.then(async function (response) {
				await setPersons(response.data);
				setLoading(false)

		  	})
			.catch(function (error) {
				console.log(error);
				setLoading(false)
			})
			.then(function() {
				setLoading(false)
			});  
	}
	const GetPageContent = async (id, locale) => {
		setLoading(true)
		await axios.get(`/api/getpagecontent/${id}/${locale}`)
			.then(function (response) {
				setPageContent(response.data);
				setLoading(false)
			})
			.catch(function (error) {
				console.log(error);
				setLoading(false)
			})
			.then(function () {
			});  
	}

	
console.log(lang)
	useEffect(() => {
	
		}, []);
        return (
            <AppContext.Provider 
                value={{
					loading,
					lang,
					setLang,
					GetPageContent,
					pageContent,
					GetArticles,
					articles,
					GetArticle,
					article,
					articleImage,
					persons,
					GetPersons,
					t,
					i18n

					
					
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