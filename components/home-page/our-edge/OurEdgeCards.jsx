import { motion } from "framer-motion";
import OurEdgeCard from "./OurEdgeMainCard";

const OurEdgeCards = ({ cards, setActive }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:gap-8 2xl:gap-3 2xl:w-[950px] 3xl:w-[1200px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      {cards.map((card, index) => (
        <OurEdgeCard
          key={card.title}
          card={card}
          onClick={() => setActive(card)}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default OurEdgeCards;
