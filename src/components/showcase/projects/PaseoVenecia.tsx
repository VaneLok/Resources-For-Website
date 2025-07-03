import React from 'react';
import pase1 from '../../../assets/pictures/projects/interiors/paseo venecia/pase1.png';
import pase2 from '../../../assets/pictures/projects/interiors/paseo venecia/pase2.png';
import pase3 from '../../../assets/pictures/projects/interiors/paseo venecia/pase3.png';
import pase4 from '../../../assets/pictures/projects/interiors/paseo venecia/pase4.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface PaseoVeneciaProjectProps {
    onBackClick: () => void;
}

const PaseoVeneciaProject: React.FC<PaseoVeneciaProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Paseo Venecia</h1>
            <h3>Soyapango Commercial Center</h3>
            <h4>Soyapango, El Salvador</h4>
            <br />
            
            <div className="text-block">
                <p>
                    This project was all about creating a space that could energize the community while giving local businesses room to grow. I joined the design team during the first and second stages, which focused on building 64 commercial units and over 10 kiosks across dynamic, modern corridors.
                </p>
                <br />
                <p>
                    The idea was to offer something different from anything else in the area. We aimed to blend family-friendly recreation with strong commercial function.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={pase1} alt="Overview of Paseo Venecia commercial center design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Overview of the modern commercial center with dynamic corridors and commercial units</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The space includes pedestrian-friendly walkways, multiple vehicle access routes, and over 240 parking spaces to make visits smooth and convenient. We introduced key features like a panoramic elevator, glass railings, and a children's play zone, all designed to support an inclusive and comfortable environment.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={pase2} alt="Pedestrian walkways and access routes in Paseo Venecia" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 2:</b> <em>Pedestrian-friendly walkways with glass railings and modern design elements</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    At the heart of the design is a small amphitheater intended for community events and educational activities, adding a cultural layer to the shopping experience. Lush green spaces, a decorative fountain, and vegetation integrated into common areas give this center a softer, more human feel.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={pase3} alt="Community amphitheater and green spaces at Paseo Venecia" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 3:</b> <em>Community amphitheater surrounded by lush green spaces and decorative features</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Our goal was to create more than just a retail destination. We wanted it to feel like a part of daily life, a welcoming place where people could shop, gather, and feel at home.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={pase4} alt="Final view of Paseo Venecia as a community gathering space" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 4:</b> <em>The completed center - a welcoming community space that blends commerce with culture</em>
                </p>
            </div>

            {/* Back button */}
            <button
                onClick={onBackClick}
                style={styles.backButton}
                className="back-button"
            >
                ← Back to Projects
            </button>
        </div>
    );
};

const styles: StyleSheetCSS = {
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '30px 0',
        width: '100%',
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '2px',
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
    },
    caption: {
        fontSize: '14px',
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',
        maxWidth: '600px',
        lineHeight: '1.4',
        margin: '0',
    },
    backButton: {
        cursor: 'pointer',
        padding: '20px 0px',
        marginTop: '30px',
        backgroundColor: 'transparent',
        border: 'none',
        fontFamily: 'MSSerif, Times, serif',
        fontSize: '16px',
        color: '#0000EE',
        textDecoration: 'underline',
        display: 'block',
        userSelect: 'none',
        position: 'relative',
        textAlign: 'left',
        width: 'auto',
        clear: 'both',
    },
};

export default PaseoVeneciaProject;
