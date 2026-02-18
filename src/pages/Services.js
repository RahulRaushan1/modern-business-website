import React from "react";
import FeatureCard from "../components/FeatureCard/FeatureCard";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Modern and responsive websites using React."
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Clean and professional interface designs."
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Fast loading and optimized applications."
    }
  ];

  return (
   <section id="services" style={{ padding: "60px 40px", background: "#f3f4f6" }}>

      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Our Services
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {services.map(service => (
          <FeatureCard
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
