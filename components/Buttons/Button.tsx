import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const backgroundVariant = {
  initial: {
    backgroundColor: "#F2FFBD",
  },
  hover: {
    backgroundColor: "#022D42",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  animate: {
    backgroundColor: "#F2FFBD",
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
};

export default function Button({ children }: ButtonProps) {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      animate="animate"
      variants={backgroundVariant}
      className="py-4 px-8 bg-[#F2FFBD] rounded-xl font-semibold"
    >
      <div className="overflow-hidden relative">
        <motion.p className="text-[#022D42]">{children}</motion.p>
        <motion.p aria-hidden className="absolute top-0 left-0 text-[#F2FFBD]">
          {children}
        </motion.p>
      </div>
    </motion.button>
  );
};