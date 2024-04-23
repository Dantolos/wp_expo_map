import React, { useState, useEffect } from 'react'; 

export default function InfoContent({ contentData }) {
     const [imageURL, setImageURL] = useState(null);
     const [loading, setLoading] = useState(true);
    
     useEffect(() => {
        setLoading(true);

        console.log(contentData)
        async function fetchImage() {
            if (contentData.acf && contentData.acf.exhibitor && contentData.acf.info.logo) {
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
                    <div className="skeleton skeleton-title"></div>
                    <div className="skeleton skeleton-description"></div>
                </>
            ) : (
                // Actual content
                <>
                    {imageURL && <img src={imageURL} alt="Exhibitor Logo" />}
                    <h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }}></h4>
                    <div className="exomap-content-description" dangerouslySetInnerHTML={{ __html: contentData.acf.info.description }} />
                </>
            )}
        </div>
    );
}
