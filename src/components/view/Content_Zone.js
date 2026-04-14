import React from 'react';

export default function ZoneContent({ contentData }) {
    const imageURL = contentData?.acf?.zone?.logo ?? null;
    const zone = contentData?.acf?.zone ?? {};

    return (
        <div className='expomap-content-booth'>
            { imageURL && <img src={ imageURL } alt="Zone Logo" /> }
            <h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }} />
            <div
                className="exomap-content-description"
                dangerouslySetInnerHTML={{ __html: zone.description }}
            />
            { zone.webseite && (
                <>
                    <div className='exomap-content-trenner'><p></p></div>
                    <a href={ zone.webseite } target="_blank" rel="noopener noreferrer">
                        <button className='expomap-content-button'>Website</button>
                    </a>
                </>
            ) }
        </div>
    );
}
