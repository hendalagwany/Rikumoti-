import { useEffect, useState } from "react";
import MemberCard from "../MemberCard";

// config.js
export const API = "http://localhost:5228";

function MembersPreview() {

  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/members`)
      .then((response) => response.json())
      .then((data) => setMembers(data));
  }, []);

  return (
    <section className="member-details-section">
      <h2>Meet The Members</h2>
      <br />
      <div className="members-grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
          />
        ))}

      </div>

    </section>
  );
}

export default MembersPreview;