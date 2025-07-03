import React from 'react';
import allegro1 from '../../../assets/pictures/projects/interiors/allegro/allegro1.png';
import allegro2 from '../../../assets/pictures/projects/interiors/allegro/allegro2.png';
import allegro3 from '../../../assets/pictures/projects/interiors/allegro/allegro3.png';
import allegro4 from '../../../assets/pictures/projects/interiors/allegro/allegro4.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface AllegroProjectProps {
    onBackClick?: () => void;
}

const AllegroProject: React.FC<AllegroProjectProps> = ({ onBackClick }) => {
    return (
        <div className="site-page-content">
            <h1>Allegro Residences</h1>
            <h3>San Salvador, El Salvador</h3>
            <br />
            <div className="text-block">
                <p>
                    Tucked into one of the busiest corners of San Salvador, Allegro was our answer to the city's constant motion. I joined both the interior and architectural team, helping shape a space that could feel like a quiet exhale in the middle of the noise.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={allegro1} style={styles.image} alt="Allegro Residences - Exterior View" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Allegro Residences exterior design showcasing the modern architectural approach.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    The ten-story building holds 40 apartments, each designed with comfort, clarity, and movement in mind. We created four different layouts to meet different lifestyles and filled the building with shared spaces like a rooftop lounge, gym, and pool to bring people together.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={allegro2} style={styles.image} alt="Allegro Residences - Interior Layout" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 2:</b> Interior layout design focusing on comfort and clarity.
                        </sub>
                    </p>
                </div>
                <br />
                <div className="captioned-image">
                    <img src={allegro3} style={styles.image} alt="Allegro Residences - Shared Spaces" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> Shared spaces including rooftop lounge and community areas.
                        </sub>
                    </p>
                </div>
                <br />
                <p>
                    Making it pet-friendly was something I personally championed. For me, home isn't complete unless everyone in the family belongs there. Allegro is a space that balances pace and pause, structure and softness. It's one of those projects that reminds me why I love design.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={allegro4} style={styles.image} alt="Allegro Residences - Apartment Details" />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 4:</b> Apartment interior details showcasing the pet-friendly design approach.
                        </sub>
                    </p>
                </div>
                <br />
                {onBackClick && (
                    <div style={styles.backButton} onClick={onBackClick}>
                        ← Back to Projects
                    </div>
                )}
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
        maxWidth: '800px',
        height: 'auto',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    caption: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: '8px',
        color: '#666',
        fontSize: '14px',
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
    },
};

export default AllegroProject;
