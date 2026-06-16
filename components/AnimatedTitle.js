import { motion } from 'framer-motion';

const AnimatedTitle = () => {
  const title = "No Text To Speech";
  const words = title.split(' ');
  let charCount = 0;
  const characterDelay = 0.05;

  return (
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold tracking-tight text-ntts-blue"
      aria-label={title}
      style={{ textAlign: 'center' }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => {
        const wordElement = (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, charIndex) => {
              const el = (
                <motion.span
                  key={charIndex}
                  style={{ display: 'inline-block' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: charCount * characterDelay,
                    type: 'spring',
                    damping: 12,
                    stiffness: 100,
                  }}
                >
                  {char}
                </motion.span>
              );
              charCount++;
              return el;
            })}
          </span>
        );

        if (wordIndex < words.length - 1) {
          charCount++; // for the space
          return [wordElement, <span key={`space-${wordIndex}`}>&nbsp;</span>];
        }
        return wordElement;
      })}
    </motion.h1>
  );
};

export default AnimatedTitle;
