import React from 'react';
import Helmet from 'react-helmet';



const MetaTag = ({name}) => {
	
	
	
	return(
		
		<Helmet>
			{/* <!-- HTML Meta Tags --> */}
			<title>Suppilog Ltd.</title>
			<meta
				name="description"
				content="Digital Wholesale Distribution Platform."
			/>

			{/* <!-- Google / Search Engine Tags --> */}
			<meta itemprop="name" content="Suppilog Ltd." />
			<meta
				itemprop="description"
				content="Digital Wholesale Distribution Platform."
			/>
			<meta
				itemprop="image"
				content="http://images.ctfassets.net/d941dswhbyyn/2i5w1xlHSMI0lttLOmORr0/17aed4c8c00a1d231eb1961711f34904/suppilog-dinner.jpg"
			/>

			{/* <!-- Facebook Meta Tags --> */}
			<meta property="og:url" content="https://suppilog.fi" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Suppilog Ltd." />
			<meta
			property="og:description"
			content="Digital Wholesale Distribution Platform."
			/>
			<meta
			property="og:image"
			content="http://images.ctfassets.net/d941dswhbyyn/2i5w1xlHSMI0lttLOmORr0/17aed4c8c00a1d231eb1961711f34904/suppilog-dinner.jpg"
			/>

			{/* <!-- Twitter Meta Tags --> */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Suppilog Ltd." />
			<meta
			name="twitter:description"
			content="Digital Wholesale Distribution Platform."
			/>
			<meta
			name="twitter:image"
			content="http://images.ctfassets.net/d941dswhbyyn/2i5w1xlHSMI0lttLOmORr0/17aed4c8c00a1d231eb1961711f34904/suppilog-dinner.jpg"
			/>
		</Helmet>
		
		
	)
}

export default MetaTag;

