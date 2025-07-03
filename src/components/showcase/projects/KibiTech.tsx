import React from 'react';
import kibi1 from '../../../assets/pictures/projects/interiors/Kibitech/kibi1.png';
import kibi2 from '../../../assets/pictures/projects/interiors/Kibitech/kibi2.png';
import kibi3 from '../../../assets/pictures/projects/interiors/Kibitech/kibi3.png';
import kibi4 from '../../../assets/pictures/projects/interiors/Kibitech/kibi4.png';
import kibi5 from '../../../assets/pictures/projects/interiors/Kibitech/kibi5.png';
import kibi6 from '../../../assets/pictures/projects/interiors/Kibitech/kibi6.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface KibiTechProjectProps {
    onBackClick: () => void;
}

const KibiTechProject: React.FC<KibiTechProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>KibiTech Inc.</h1>
            <h3>Inclusive Workplace Design</h3>
            <br />
            
            <div className="text-block">
                <p>
                    This was my thesis project and one of the most meaningful experiences in my design journey. The challenge was to redesign a heritage building into an inclusive, fully accessible workplace for Kibitech Inc., a company with plans to employ a neurodiverse team. My role focused entirely on interior design, and the mission was to build a space that supports independence, collaboration, and well-being for people with developmental and cognitive disabilities.
                </p>
                <br />
                <p>
                    From the start, the vision was to blend neuroscience, universal design, and technology in a way that felt natural, never clinical. We assumed half of the team would require cognitive accommodations, which meant the interiors had to be intuitive and deeply human.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi1} alt="KibiTech office overview showing open workspace design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 1:</b> <em>Overview of the main workspace, designed with flexibility and flow in mind</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Layouts were designed with flexibility and flow, and spaces were softened with curves to reduce visual stress. Research from neuroscientist Oshin Vartanian guided many of these decisions, showing that curvilinear forms bring harmony and calm.
                </p>
                <br />
                <p>
                    To support wayfinding and memory, I created sensory landmarks throughout the office. One room became a forest-inspired space, filled with greenery, textured surfaces, and warm lighting that offered a sense of grounded focus.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi2} alt="Forest-inspired workspace with greenery and natural textures" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 2:</b> <em>The forest-inspired focus room with natural textures and warm lighting</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Another was centered around the idea of water, offering softer light levels, a curved privacy wall, and ambient sounds like rainfall to encourage rest and reflection. Each zone had a distinct identity while still feeling part of a cohesive whole.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi3} alt="Water-themed relaxation space with curved privacy walls" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 3:</b> <em>The water-themed reflection space with curved walls and ambient lighting</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Nature continued to shape the space through green walls, a central terrarium, daylight-mimicking fixtures, and furniture chosen for its organic feel. In the reception area, I installed a custom parametric bench that served as a visual anchor and a tactile starting point for navigation.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi4} alt="Reception area featuring custom parametric bench and green walls" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 4:</b> <em>Reception area with custom parametric bench serving as a navigation landmark</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    Several hallway columns were wrapped in curved coverings to double as grip-friendly landmarks for support and orientation. Every aspect of the design met the standards of the Ontario Building Code, the Accessibility for Ontarians with Disabilities Act, and heritage preservation guidelines.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi5} alt="Curved column coverings serving as tactile navigation aids" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 5:</b> <em>Curved column coverings designed as grip-friendly navigation landmarks</em>
                </p>
            </div>

            <div className="text-block">
                <p>
                    More importantly, it reflected the four principles of universal design I worked from: equitable use, perceptible information, intuitive navigation, and flexibility.
                </p>
                <br />
                <p>
                    Kibitech was never just about designing an office. It was about creating a workplace where everyone can thrive, connect, and feel seen. The experience deepened my passion for design that prioritizes people, and it continues to inspire how I think about accessibility and inclusion in every project I take on.
                </p>
            </div>

            <div style={styles.imageContainer}>
                <img src={kibi6} alt="Final view of the inclusive workspace design" style={styles.image} />
                <p style={styles.caption}>
                    <b>Figure 6:</b> <em>The completed workspace - a testament to inclusive, human-centered design</em>
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

export default KibiTechProject;