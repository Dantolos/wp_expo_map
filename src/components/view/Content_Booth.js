import React, { useState, useEffect } from 'react';
import { IoLogoLinkedin, IoGlobeOutline, IoMail, IoLogoTwitter } from 'react-icons/io5';

export default function BoothContent( { contentData } ) {
	const [loading, setLoading] = useState( true );

	// ACF returns logo as a URL directly (return_format: 'url' in field config)
	// No secondary media fetch needed — removes one API call per booth click
	const logoURL = contentData?.acf?.exhibitor?.logo ?? null;

	useEffect( () => {
		setLoading( false );
	}, [contentData] );

	const exhibitor = contentData?.acf?.exhibitor ?? {};
	const contact   = exhibitor?.kontaktperson ?? {};

	return (
		<div className='expomap-content-booth'>
			{ loading ? (
				<>
					<div className="skeleton skeleton-image"></div>
					<div className="skeleton skeleton-title"></div>
					<div className="skeleton skeleton-description"></div>
					<div className="skeleton skeleton-button"></div>
				</>
			) : (
				<>
					{ logoURL && <img src={ logoURL } alt="Exhibitor Logo" /> }

					<h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }} />

					<div
						className="exomap-content-description"
						dangerouslySetInnerHTML={{ __html: exhibitor.beschreibungstext }}
					/>

					{ contact.kontaktperson && (
						<>
							<div className='exomap-content-trenner'>
								<p>Contact Person</p>
							</div>
							<div className='expomap-content-contact'>
								<h6>{ contact.kontaktperson }</h6>
								<div className='expomap-content-contact-connectors'>
									{ contact.kontaktperson_verlinkung && (
										<a href={ contact.kontaktperson_verlinkung } target="_blank" rel="noopener noreferrer">
											<IoGlobeOutline color="#1582BE" size="25px" />
										</a>
									) }
									{ contact.email && (
										<a href={ `mailto:${contact.email}` } target="_blank" rel="noopener noreferrer">
											<IoMail color="#1582BE" size="25px" />
										</a>
									) }
									{ contact.linkedin && (
										<a href={ contact.linkedin } target="_blank" rel="noopener noreferrer">
											<IoLogoLinkedin color="#1582BE" size="25px" />
										</a>
									) }
									{ contact.twitter && (
										<a href={ contact.twitter } target="_blank" rel="noopener noreferrer">
											<IoLogoTwitter color="#1582BE" size="25px" />
										</a>
									) }
								</div>
							</div>
						</>
					) }

					{ exhibitor.webseite && (
						<>
							<div className='exomap-content-trenner'><p></p></div>
							<a href={ exhibitor.webseite } target="_blank" rel="noopener noreferrer">
								<button className='expomap-content-button'>
									<IoGlobeOutline color="white" size="25px" />Website
								</button>
							</a>
						</>
					) }
				</>
			) }
		</div>
	);
}
