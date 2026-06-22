import React from "react";
import { FaMusic, FaArrowRight } from "react-icons/fa";
import SocialsLinks from "../SocialLinks";
import HeroMember from "./HeroMember";
import Button from "../Button";
import  { useEffect, useState } from "react";

const API = "http://localhost:5228";

function Hero() {

    const [members,setMembers]=useState([]);

    useEffect(()=>{
        fetch(`${API}/api/members`)
        .then(res =>res.json())
        .then(data => setMembers(data));
    },[]);

        const heroImg = `${API}/images/gallery/main-photo.png`;

    return (
        <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>

            <div className="hero-overlay">
                <div className="hero-content">

                    <div className="hero-left">
                        <h3 className="hero-title">
                            Four Voices,<br />
                            Endless Smiles
                        </h3>
                        <p className="hero-description">
                            We sing to encourage you, <br />
                            we play to stand by you, <br />
                            we create to remind you that <br />
                            you are never alone.
                        </p>
                        <Button>
                            LISTEN NOW
                            <span><FaMusic /></span>

                        </Button>
                        <SocialsLinks />
                    </div>

                    <div className="hero-center">
                        {members.map((member) => (
                            <HeroMember
                                key={member.id}
                                id={member.id}
                                name={member.name}
                                instrument={member.instrument}
                                icon={member.icon}
                                className={member.className}
                            />
                        ))}

                    </div>

                    <div className="hero-right">

                        <h2>Who is Rikumoti?</h2>

                        <p>
                            A voice acting unit that
                            plays music, acts in anime,
                            and lives each day together.
                        </p>

                        <Button variant="secondary">
                            View More
                            <span><FaArrowRight /> </span>
                        </Button>

                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;