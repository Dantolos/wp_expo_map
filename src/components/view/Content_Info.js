import React, { useState, useEffect } from 'react';

export default function InfoContent({ contentData }) {
    const imageURL = contentData?.acf?.info?.image ?? null;
    const info = contentData?.acf?.info ?? {};

    return (
        <div className='expomap-content-booth'>
            { imageURL && <img src={ imageURL } className="booth-mood-image" alt="" /> }
            <h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }} />
            <div
                className="exomap-content-description"
                dangerouslySetInnerHTML={{ __html: info.description }}
            />
            { info.webseite && (
                <>
                    <div className='exomap-content-trenner'><p></p></div>
                    <a href={ info.webseite } target="_blank" rel="noopener noreferrer">
                        <button className='expomap-content-button'>Website</button>
                    </a>
                </>
            ) }
        </div>
    );
}
