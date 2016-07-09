import React from 'react';

const METATAGS = {
    title: "Keith Richards - Biography",
    meta: {
        name: "description",
        content: "Learn more about the personal life of Keith Richards, a Raleigh, NC based web developer."
    }
};

class Personal extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="box">
                    <h1>Me: Personally</h1>
                    <p>
                        It today's tech industry, companies thrive on culture. Employers
                        and employees alike strive to find the perfect fit, to assemble 
                        the ideal group of personalities. These like personalities will
                        bond more easily, will communicate more effectively, and will
                        ultimately succeed more frequently.
                    </p>
                    <p>
                        I have no proof to support these claims. It just sounded 
                        good - like something you'd see on a clickbait "8 Tips for Startup
                        Success" blog post.
                    </p>
                    <p>
                        Invariably, you want to know if I'm a good fit. Without further ado,
                        a little bit about myself:
                    </p>
                    <ul>
                        <li>
                            I enjoy learning new technologies. I'm not a big fan of 
                            steep learning curves; I am, however, a huge fan of the
                            feeling of accomplishment that comes with getting past those
                            walls.
                        </li>
                        <li>
                            I love working out. I am a competitive powerlifter in the
                            United States Powerlifting Association, 90kg weight class,
                            "Raw" division. I'm seeking a "Master" classification soon,
                            and someday hope to reach "Elite" classification. My current
                            meet personal records are 215kg (474lb) Squat, 140kg (308lb)
                            Bench Press, 265kg (584lb) Deadlift, and 610kg (1343lb)
                            Total.
                        </li>
                        <li>
                            The dude abides, man.  That rug really tied the room together.
                        </li>
                        <li>
                            I like black coffee, black comedy, and black metal.  
                        </li>
                        <li>
                            I spent 5 years (2010 - 2015) in the United States Marine Corps
                            as an Arabic Linguist. I deployed in 2013 to United States
                            Embassy, Tripoli, Libya as part of an Embassy Reinforcement
                            mission, where I served as Senior Linguist and Responsible 
                            Officer for our team. I was promoted to the rank of Sergeant
                            in August, 2014.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Personal;