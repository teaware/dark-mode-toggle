import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function Toggle() {
  const { theme, setTheme } = useTheme();

  // darkMode toggle animation
  const trans = {
    type: "spring",
    damping: 10,
    mass: 0.75,
    stiffness: 100,
  };
  const vRotate = {
    dark: {
      rotate: 40,
    },
    light: {
      rotate: 90,
    },
  };
  const vLine = {
    dark: {
      scale: 0,
      opacity: 0,
    },
    light: {
      scale: 1,
      opacity: 1,
    },
  };
  // maskedCircle
  const vMCircle = {
    dark: {
      cx: 12,
      cy: 4,
    },
    light: {
      cx: 30,
      cy: 0,
    },
  };
  // centerCircle
  const vCCircle = {
    dark: {
      r: 9,
    },
    light: {
      r: 5,
    },
  };

  return (
    <motion.div initial={false} animate={theme === "dark" ? "dark" : "light"}>
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="dark-mode-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          variants={vRotate}
          transition={trans}
          style={{ originX: "50%", originY: "50%" }}
        >
          <mask id="moon-mask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <motion.circle
              variants={vMCircle}
              transition={trans}
              cx="12"
              cy="4"
              r="9"
              fill="black"
            />
          </mask>
          <motion.circle
            variants={vCCircle}
            transition={trans}
            cx="12"
            cy="12"
            r="9"
            mask="url(#moon-mask)"
          />

          <motion.g
            variants={vLine}
            // transition={trans}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ originX: "50%", originY: "50%" }}
          >
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </motion.g>
        </motion.svg>
      </button>
    </motion.div>
  );
}
