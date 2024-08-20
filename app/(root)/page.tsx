import HeaderBox from "@/components/HeaderBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Adrian" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcom"
            user="Guest"
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
