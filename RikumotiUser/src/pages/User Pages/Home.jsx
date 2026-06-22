import Hero from "../../components/ui/sections/Hero";
import MembersPreview from "../../components/ui/sections/MembersPreview";

function Home() {
  return (
    <>
      <Hero />
      <div className="home-container">
        <MembersPreview />
      </div>
      
    
    </>
  );
}

export default Home;