import React from 'react';
import homelabImage from '../../../assets/pictures/certs/Homelab.gif';
import comptiaImage from '../../../assets/pictures/certs/CompTIA.png';
import ibmImage from '../../../assets/pictures/certs/IBM.png';
import thmThreatImage from '../../../assets/pictures/certs/THM.png';
import thmPreImage from '../../../assets/pictures/certs/THM-1.png';
import type { StyleSheetCSS } from '../../../types/StyleSheetCSS';

export interface CyberProjectsProps {}

const CyberProjects: React.FC<CyberProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Cybersecurity</h1>
            <h3>Certifications</h3>
            <br />
            <div className="text-block">
                <p>
                    My journey into cybersecurity has been driven by curiosity and a passion for understanding how systems work and how to protect them. These certifications represent my commitment to continuous learning and staying current with cybersecurity best practices and emerging threats.
                </p>
                <br />
                <p>
                    Each certification has taught me something valuable, from foundational security concepts to specialized skills in threat intelligence, vulnerability assessment, and incident response. I believe in hands-on learning, so alongside these formal certifications, I maintain a home lab where I practice penetration testing, malware analysis, and security monitoring.
                </p>
            </div>
            
            <div className="text-block">
                <h2>pfSense Homelab Project</h2>
                <br />
                <p>
                    I spent Canada Day 2024 doing what I love most—tinkering. This project was all about setting up my first pfSense router (FreeBSD-based) and dropping a fresh Debian server onto the network. It wasn't all smooth sailing, but that's what made it fun.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={homelabImage} style={styles.image} alt="pfSense Homelab Setup" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> My pfSense router setup - FreeBSD doing what it does best
                        </sub>
                    </p>
                </div>
                <p>
                    My Realtek RTL8125 NIC gave me some serious driver drama. The hardware wasn't playing nice with FreeBSD out of the box, and I found myself troubleshooting network connectivity issues that had me scratching my head for hours. A little digging led me to a fix using a pkg install trick I found on Rebecca Peck's blog. Major shoutout to the community for that one! Once I got the drivers sorted, everything clicked into place and I had my own custom router running smoothly.
                </p>
                <br />
                <p>
                    Setting up my own FreeBSD router from scratch was incredibly satisfying and reminded me why I love learning through building. There's something special about configuring firewall rules, setting up VLANs, and watching traffic flow through your own custom network infrastructure.
                </p>
            </div>

            <div className="text-block">
                <h2>CompTIA Security+ (SY0-701)</h2>
                <br />
                <div className="captioned-image">
                    <img src={comptiaImage} style={styles.image} alt="CompTIA Security+ Certificate" />
                    <p>
                        <sub>
                            <b>Figure 2:</b> CompTIA Security+ (SY0-701) - January 2025
                        </sub>
                    </p>
                </div>
                <p>
                    Earning my Security+ certification was a major milestone that validated my transition into cybersecurity. The exam covered everything from risk management and cryptography to incident response and security architecture. What I loved most was how practical the content was—every concept directly applies to real-world security challenges.
                </p>
                <br />
                <p>
                    The preparation process involved months of studying security frameworks, understanding threat landscapes, and practicing with hands-on labs. This certification gave me a solid foundation in security principles and opened doors to more specialized areas like threat intelligence and ethical hacking.
                </p>
            </div>

            <div className="text-block">
                <h2>IBM Cybersecurity Analyst Professional Certificate</h2>
                <br />
                <div className="captioned-image">
                    <img src={ibmImage} style={styles.image} alt="IBM Cybersecurity Analyst Certificate" />
                    <p>
                        <sub>
                            <b>Figure 3:</b> IBM Cybersecurity Analyst Professional Certificate - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This comprehensive program from IBM deepened my understanding of cybersecurity analysis, incident response, and digital forensics. The hands-on approach included working with real security tools and analyzing actual threat scenarios, which gave me practical experience in identifying and responding to security incidents.
                </p>
                <br />
                <p>
                    The program covered SIEM tools, network security monitoring, and compliance frameworks. I particularly enjoyed the modules on threat hunting and vulnerability assessment, as they combined technical skills with strategic thinking about enterprise security posture.
                </p>
            </div>

            <div className="text-block">
                <h2>Pre Security</h2>
                <h3>TryHackMe · 2024</h3>
                <br />
                <div className="captioned-image">
                    <img src={thmThreatImage} style={styles.image} alt="TryHackMe Pre Security Certificate" />
                    <p>
                        <sub>
                            <b>Figure 4:</b> TryHackMe Pre Security - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This was my starting point—the hands-on sandbox where I first explored networking, system fundamentals, and basic security concepts. It was the perfect launchpad, filled with "aha!" moments that made me realize just how much I love breaking things down to see how they tick (without actually breaking them, of course).
                </p>
            </div>

            <div className="text-block">
                <h2>Threat Intelligence Learning Path</h2>
                <h3>TryHackMe · 2024</h3>
                <br />
                <div className="captioned-image">
                    <img src={thmPreImage} style={styles.image} alt="TryHackMe Threat Intelligence Certificate" />
                    <p>
                        <sub>
                            <b>Figure 5:</b> TryHackMe Threat Intelligence Learning Path - 2024
                        </sub>
                    </p>
                </div>
                <p>
                    This one pulled me deep into the minds of threat actors. I learned how to trace attacks, analyze patterns, and turn raw data into actionable insights. It felt like solving a puzzle where every piece tells a story except the stakes are higher, and the clock is always ticking. Loved every minute of it.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
};

export default CyberProjects;
