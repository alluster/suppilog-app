import React, { useState } from 'react';
import { AppContext } from './Context';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function strcmp(a, b) {
	if (a < b) return -1;
	if (a > b) return +1;
	return 0;
}

const Provider = ({children}) => {
	const [articles, setArticles] = useState([])
	const [article, setArticle] = useState({})
	const [articleImage, setArticleImage] = useState({})
	const [persons, setPersons] = useState([])
	const [pageContent, setPageContent] = useState({})
	const [lang, setLang] = useState(localStorage.getItem('lang') || 'en-US')
	const [loading, setLoading] = useState(false)
	const { t, i18n } = useTranslation();
	const [footerContent, setFooterContent] = useState({})
	const [email, setEmail] = useState("")
	const [pages, setPages] = useState([])
	const [modalOpen, setModalOpen] = useState(false)
	const [product, setProduct] = useState({})

	const GetArticles = async (locale) => {
		setLoading(true);
		try {
			const response = await axios.get(`/api/getarticles/${locale}`);
			setArticles(response.data);
		}
		catch (err){
			console.log("Fetching articles failed:", err);
		}
		finally {
			setLoading(false);
		}
	};
	const GetPages = async (lang) => {
		setLoading(true);
		try {
			const response = await axios.get(`/api/getpages/${lang}`);
			setPages(response.data);
		}
		catch (err){
			console.log("Fetching pages failed:", err);
		}
		finally {
			setLoading(false);
		}
	};
	const GetArticle = async (id, locale) => {
		setLoading(true);
		try {
			const response = await axios.get(`/api/getarticle/${id}/${locale}`);
			setArticle(response.data);
		}
		catch (err){
			console.log("Fetching article failed:", err);
		}
		finally {
			setLoading(false);
		}
	};
	const GetPersons = async () => {
		setLoading(true);
		try {
			const response = await axios.get('/api/getpersons');
			setPersons(response.data);
		}
		catch (err){
			console.log("Fetching article failed:", err);
		}
		finally {
			setLoading(false);
		}
	};
	const GetPageContent = async ({ id, locale }) => {
		setLoading(true);
		try {
			const response = await axios.get(`/api/getpagecontent/${id}/${locale}`);
			setPageContent(response.data);
		}
		catch (err){
			console.log("Fetching page content failed:", err);
		}
		finally {
			setLoading(false);
		}
	};
	const GetFooterContent = async (id, locale) => {
		setLoading(true);
		try {
			const response = await axios.get(`/api/getfootercontent/${id}/${locale}`);
			setFooterContent(response.data);
		}
		catch (err){
			console.log("Fetching article failed:", err);
		}
		finally {
			setLoading(false);
		}
	};

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
					setArticleImage,
					articleImage,
					persons,
					GetPersons,
					t,
					i18n,
					product,
					setProduct,
					footerContent,
					GetFooterContent,
					email,
					setEmail,
					pages,
					GetPages,
					setModalOpen,
					modalOpen
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