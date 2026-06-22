import { Link } from "react-router-dom";
import {
    FaMusic,
    FaCloud,
    FaCoffee,
    FaHome
} from "react-icons/fa";

const memberIcons = {
    music: FaMusic,
    cloud: FaCloud,
    coffee: FaCoffee,
    home: FaHome
};

import {
    GiPianoKeys,
    GiDrumKit,
    GiGuitar,
} from "react-icons/gi";

const instrumentIcons = {
    piano: GiPianoKeys,
    drum: GiDrumKit,
    guitar: GiGuitar
};

export const API = "http://localhost:5228";


function MemberCard({ member }) {

    const PinIcon = memberIcons[member.pin];
    const InstrumentIcon = instrumentIcons[member.instrumentIcon];

    return (
        <Link to={`/member/${member.id}`} className="member-card-link">
            <div className="member-card">

                <img src={API + member.image} alt={member.name} />

                <h2>
                    {PinIcon && <PinIcon size={20} color={member.color} />}
                    {" "}
                    {member.name}
                </h2>

                <p>
                    {InstrumentIcon && <InstrumentIcon size={20} color={member.color} />}
                    {" "}
                    {member.instrument}
                </p>

            </div>
        </Link>
    );
}

export default MemberCard;