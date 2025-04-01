
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="container mx-auto px-4 py-8"
    >
      {children}
    </motion.main>
  );
};

export default Layout;
