import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React AI Chatbot",
    img: "/chatbot.png",
    desc: "A React AI Chatbot is a sophisticated application built using the React JavaScript library, designed to interact with users in a conversational manner. Leveraging AI technologies such as natural language processing (NLP) and machine learning, it can understand and respond to user queries in real-time. The chatbot’s interface is typically sleek and responsive, ensuring a smooth user experience on both desktop and mobile devices. It can be integrated with various APIs and databases to provide dynamic and context-aware responses. Additionally, the chatbot can be customized to fit specific business needs, making it a versatile tool for customer service, support, and engagement.",
  },
  {
    id: 2,
    title: "Next Commerce",
    img: "/nextcommerce.png",
    desc: "Next Commerce refers to the future trends and developments in the field of e-commerce. It encompasses innovations such as artificial intelligence, augmented reality, and blockchain technology to enhance the online shopping experience. Next Commerce aims to provide more personalized, efficient, and secure transactions for consumers. It also focuses on the integration of various sales channels and improved logistics to meet the growing demands of online shoppers. By leveraging data analytics and machine learning, businesses can better understand customer preferences and tailor their offerings accordingly.",
  },
  {
    id: 3,
    title: "Mentalify App",
    img: "/mentalify.png",
    desc: "The Mentalify App is designed to support mental health and well-being through various digital tools and resources. It offers features such as mood tracking, guided meditation, and cognitive behavioral therapy exercises to help users manage stress and anxiety. The app also provides access to professional counseling and mental health resources, ensuring users can find the support they need. By leveraging artificial intelligence, Mentalify offers personalized recommendations and insights based on individual user data. Its user-friendly interface and comprehensive features make it a valuable tool for promoting mental wellness in everyday life.",
  },
  {
    id: 4,
    title: "Music Store",
    img: "/musicstore.png",
    desc: "The Music Store page is an online platform for purchasing and downloading music. It offers a wide variety of genres, artists, and albums, catering to diverse musical tastes. Users can browse through new releases, top charts, and personalized recommendations based on their listening habits. The page provides high-quality audio files and convenient purchasing options, including individual tracks and full albums. Additionally, it features user reviews, ratings, and previews to help customers make informed choices. The Music Store page aims to provide a seamless and enjoyable shopping experience for music lovers",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
