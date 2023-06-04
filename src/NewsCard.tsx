import React from "react";

interface NewsCardProps {
  heading: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ heading, description }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{description}</p>
      <button
        style={{
          background: "#555",
          color: "white",
          padding: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Read Later
      </button>
    </div>
  );
};

export default NewsCard;
