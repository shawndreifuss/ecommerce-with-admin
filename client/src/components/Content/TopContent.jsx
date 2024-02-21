import ContentCard from "../Cards/ContentCard";


const CONTENT = [
  {
    title: "AI's Role in Shaping the Future",
    des: "Discover how AI is revolutionizing industries, creating new possibilities, and addressing global challenges. Gain a deep understanding of the pivotal role AI plays in driving innovation, sustainability, and progress in our rapidly evolving world.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Panel Discussion",
    img: "/assets/img/placeholder1.webp",
  },
  {
    title: "Introduction to Machine Learning",
    des: "Explore the basic principles, algorithms, and applications of Machine Learning. Through hands-on exercises and practical examples, you'll develop a solid understanding of how Machine Learning powers AI-driven solutions.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/assets/img/placeholderImg.webp",
  },
  {
    title: "AI in Healthcare: Revolutionizing Patient Care",
    des: "This session is a must-attend for healthcare professionals, AI enthusiasts, and anyone interested in the intersection of technology and well-being. Join us as we discuss how AI is bringing about positive changes in healthcare.",
    name: "Marcell Glock",
    position: "Chief Executive, Spotify",
    panel: "Workshop",
    img: "/assets/img/logo.webp",
  },
];

export function TopContent() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="mx-auto container">
        {CONTENT.map((props, idx) => (
          <ContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default TopContent;