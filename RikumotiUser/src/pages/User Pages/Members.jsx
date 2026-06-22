import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MemberCard from "../../components/ui/MemberCard";

// config.js
export const API = "http://localhost:5228";

function Members() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/members`)
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <section className="page members-page">
      <div className="container">
        <h1 className="section-title">Members</h1>

        <div className="members-page-grid">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;