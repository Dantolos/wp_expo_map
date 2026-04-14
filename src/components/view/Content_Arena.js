import React from 'react';
import { IoLogoLinkedin, IoGlobeOutline, IoMail, IoLogoTwitter } from 'react-icons/io5';

export default function ArenaContent({ contentData }) {
    const imageURL = contentData?.acf?.arena?.logo ?? null;
    const arena = contentData?.acf?.arena ?? {};
    const contact = contentData?.acf?.arena?.kontaktperson ?? {};

    return (
        <div className='expomap-content-booth'>
            { imageURL && <img src={ imageURL } alt="Arena Logo" /> }
            <h4 dangerouslySetInnerHTML={{ __html: contentData.title.rendered }} />
            <div
                className="exomap-content-description"
                dangerouslySetInnerHTML={{ __html: arena.description }}
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

            { arena.webseite && (
                <>
                    <div className='exomap-content-trenner'><p></p></div>
                    <a href={ arena.webseite } target="_blank" rel="noopener noreferrer">
                        <button className='expomap-content-button'>
                            <IoGlobeOutline color="white" size="25px" />Website
                        </button>
                    </a>
                </>
            ) }
        </div>
    );
}
