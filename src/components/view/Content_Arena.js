import React, { useState, useEffect } from 'react';
import { IoGlobeOutline } from "react-icons/io5";

export default function ArenaContent({ contentData }) {
     const [imageURL, setImageURL] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
        setLoading(true);
        async function fetchImage() {
            if (contentData.acf && contentData.acf.arena && contentData.acf.arena.logo) {
                try {
                        const imageID = contentData.acf.arena.logo;
                        const REST_URL = `${window.location.origin}/wp-json/wp/v2/`;
                        const response = await fetch(`${REST_URL}media/${imageID}`);
                        const data = await response.json();
                        setImageURL(data.source_url);
                } catch (error) {
                        console.error('Error fetching image:', error);
                } finally {
                        setLoading(false); // Set loading to false regardless of success or failure
                }
            }
            setLoading(false)
        }

        fetchImage();
    }, [contentData]);

    return (
        <div className='expomap-content-booth'>
            {loading ? (
                // Skeleton content while loading
                <>
                    <div className="skeleton skeleton-image"></div>
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-description"></div>
                    <div className="skeleton skeleton-button"></div>
                </>
            ) : (
                // Actual content
                <>
                    {imageURL && <img src={imageURL} alt="Exhibitor Logo" />}
                    <h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }}></h4>
                    <div className="exomap-content-description" dangerouslySetInnerHTML={{ __html: contentData.acf.arena.description }} />

                    {  contentData.acf.exhibitor.kontaktperson?.kontaktperson &&
                        <>
                            <div className='exomap-content-trenner'>
                                <p>Contact Person</p>
                            </div>
                            <div className='expomap-content-contact'>

	                            <h6>{contentData.acf.exhibitor.kontaktperson.kontaktperson}</h6>
															<div className='expomap-content-contact-connectors'>
																{contentData.acf.exhibitor.kontaktperson.kontaktperson_verlinkung &&
	                                <a   href={contentData.acf.exhibitor.kontaktperson.kontaktperson_verlinkung} target="_blank" rel="noopener noreferrer">
	                                	<IoGlobeOutline color="#1582BE" size="25px" />
	                                </a>
																}
																{contentData.acf.exhibitor.kontaktperson.email &&
	                                <a  href={`mailto:${contentData.acf.exhibitor.kontaktperson.email}`}
																	    target="_blank"
																	    rel="noopener noreferrer">
	                                	<IoMail color="#1582BE" size="25px" />
	                                </a>
																}
																{contentData.acf.exhibitor.kontaktperson.linkedin &&
	                                <a   href={contentData.acf.exhibitor.kontaktperson.linkedin} target="_blank" rel="noopener noreferrer">
	                                	<IoLogoLinkedin color="#1582BE" size="25px" />
	                                </a>
																}
																{contentData.acf.exhibitor.kontaktperson.twitter &&
	                                <a   href={contentData.acf.exhibitor.kontaktperson.twitter} target="_blank" rel="noopener noreferrer">
	                                	<IoLogoTwitter color="#1582BE" size="25px" />
	                                </a>
																}
															</div>
                            </div>
                        </>
                    }

                    { contentData.acf.arena.webseite &&
                        <>
                            <div className='exomap-content-trenner'>
                                <p></p>
                            </div>
                            <a href={contentData.acf.arena.webseite} target="_blank" rel="noopener noreferrer">
                                <button className='expomap-content-button'><IoGlobeOutline color="white" size="25px" />Website</button>
                            </a>
                        </>
                    }
                </>
            )}
        </div>
    );
}
