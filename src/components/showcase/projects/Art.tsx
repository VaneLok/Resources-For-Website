import React from 'react';

export interface ArtProjectsProps {}

const ArtProjects: React.FC<ArtProjectsProps> = () => {
    return (
        <div className="site-page-content">
            <h1>Art</h1>
            <h3>& Pixel Art</h3>
            <br />
            <div className="text-block">
                <p>
                    I've been interested in digital art creation for some time
                    now, and I eventually stumbled across pixel art. I really
                    love how it forces you to work with a limited canvas and
                    think about every pixel you commit to a piece. Below are
                    some of my favorite pieces I've created over the years.
                </p>
                <br />
                <p>
                    I am usually more interested in the animation side of pixel
                    art and typically spend a lot of time perfecting the
                    movements and getting the timing right. I also love
                    marketing my stuff, so I decided to start a YouTube channel
                    where I post mostly time-lapse videos of me creating
                    animation. I started the channel close to{' '}
                    <a
                        href="https://www.youtube.com/channel/UCLZkOQxCz-PIq-2nHSYpzGw"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <b>Halloween 2020</b>
                    </a>
                    {' '}with this{' '}
                    <a
                        href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <b>Pixel Art Walk Cycle</b>
                    </a>
                    {' '}video and I was surprised to see that it kinda took
                    off and got a few thousand views! Below are the video links
                    to the work I uploaded to youtube.
                </p>
                <br />
                <h3>Video Links:</h3>
                <br />
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=pDtUX3ZVHJ0"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Walk Cycle Time-lapse
                                and Tutorial
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=xXEDKQ3wSfM"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art "Bag Up" Animation
                                Time-lapse
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.youtube.com/watch?v=leZzb-Y0SKQ"
                        >
                            <p>
                                <b>VIDEO</b> - Pixel Art Bipedal Creature Run
                                Cycle Time-lapse
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    This page is currently a work in progress. I've recently
                    found myself wanting to make more pixel art recently and I
                    have some project plans and ideas in the works. Expect
                    updates to this page as I dive back into the world of pixel
                    art!
                </p>
                {/* <h3> Screen record time-lapses and make gifs</h3> */}
            </div>
        </div>
    );
};

export default ArtProjects;
