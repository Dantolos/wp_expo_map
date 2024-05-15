import React, { useState, useEffect } from 'react';
import { IoPersonCircle } from "react-icons/io5";

export default function BoothContent({ contentData }) {
     const [imageURL, setImageURL] = useState(null);
     const [loading, setLoading] = useState(false);
    
     useEffect(() => {
        
        setLoading(true);
        async function fetchImage() {
            if (contentData.acf && contentData.acf.exhibitor && contentData.acf.exhibitor.logo) {
                try {
                        const imageID = contentData.acf.exhibitor.logo;
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
            setLoading(false);
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
                    <div className="exomap-content-description" dangerouslySetInnerHTML={{ __html: contentData.acf.exhibitor.beschreibungstext }} />

                    { contentData.acf.exhibitor.kontaktperson_verlinkung &&
                        <>
                            <div className='exomap-content-trenner'>
                                <p>Contact Person</p>
                            </div>
                            <div className='expomap-content-contact'>
                                <a href={contentData.acf.exhibitor.kontaktperson_verlinkung} target="_blank">
                                    <IoPersonCircle color="#1582BE" size="35px" />
                                    <h6>{contentData.acf.exhibitor.kontaktperson}</h6>
                                </a>
                            </div>
                        </>
                    }

                    { contentData.acf.exhibitor.webseite &&
                        <>
                            <div className='exomap-content-trenner'>
                                <p></p>
                            </div>
                            <a href={contentData.acf.exhibitor.webseite} target="_blank">
                                <button>Website</button>
                            </a>
                        </>
                    }
                </>
            )}
        </div>
    );
}
