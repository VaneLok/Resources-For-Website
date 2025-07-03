import React from 'react';
import eco1 from '../../../assets/pictures/projects/interiors/ecoresidentials/eco1.png';
import eco3 from '../../../assets/pictures/projects/interiors/ecoresidentials/eco3.png';
import eco4 from '../../../assets/pictures/projects/interiors/ecoresidentials/eco4.png';
import eco5 from '../../../assets/pictures/projects/interiors/ecoresidentials/eco5.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface EcoResidentialProjectProps {
    onBackClick: () => void;
}

const EcoResidentialProject: React.FC<EcoResidentialProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Eco Residential</h1>
            <h3>Sustainable Home Design</h3>
            <br />
            
            <div className="text-block">
                <p>
                    This was one of those projects where everything just clicked. A growing family. An open plot of land. And a big dream for a home that could be functional, beautiful, and gentle on the planet.
                </p>
                <br />
                <p>
                    From the start, we made sustainability our north star. Most of the materials were locally sourced and renewable, and the design focused on creating bright, breathable spaces that still felt grounded and cozy.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={eco1} alt="Overview of the eco-friendly home design with natural materials" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Open, breathable spaces designed with locally sourced, renewable materials</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    The kitchen became a gathering spot with cool-toned cabinetry, a big bold island, and honey maple stools that brought in just the right amount of warmth.
                </p>
                <br />
                <p>
                    The guest room was all about simplicity and comfort. Think soft tones, natural textures, and furniture that can shift with the family's needs.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={eco3} alt="Guest room featuring soft tones and natural textures" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 2:</b> <em>Guest room designed for comfort with adaptable furniture and natural textures</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Down in the basement, we went for rustic theater vibes with grey finishes, faux brick, and dim lighting that made movie nights extra special.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={eco4} alt="Basement theater room with rustic finishes and ambient lighting" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 3:</b> <em>Rustic basement theater with grey finishes and atmospheric lighting</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    My favorite part? Watching the homeowners see how all the pieces came together. A home that works for them, their future, and the planet.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={eco5} alt="Final view showcasing the completed sustainable home design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 4:</b> <em>The completed home - beautiful, functional, and environmentally conscious</em>
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

export default EcoResidentialProject;
