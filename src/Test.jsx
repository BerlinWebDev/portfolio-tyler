import { motion } from "framer-motion";
import React, { useState } from "react";

const Test = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.3 },
    }),
  };

  const items = ["item1", "item2", "item3", "item4"];

  return (
    <div className="course">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button>
    </div>
  );
};

export default Test;
