'use client';

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef,useState } from "react";



export default function AnimatedText02({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  y,
  duration,
  staggertime,
  activeIndex,
  repeatDelay,
  delay = 0,
  animationType = 'character', 
}) {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const animation = {
    hidden: {
      opacity: 0,
      y: y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
      },
    },
  };

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView, controls,activeIndex]);

  const renderContent = () => {
    switch (animationType) {
      case 'sentence':
        return textArray.map((line, lineIndex) => (
          <motion.span
            key={`${line}-${lineIndex}`}
            className="block"
            variants={animation}
          >
            {line}
          </motion.span>
        ));
      case 'word':
        return textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <motion.span
                key={`${word}-${wordIndex}`}
                className="inline-block"
                variants={animation}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        ));
      case 'character':
      default:
        return textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    className="inline-block"
                    variants={animation}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ));
    }
  };

  return (
    <Wrapper className={className}>
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: staggertime } },
          hidden: {},
        }}
        aria-hidden
      >
        {renderContent()}
      </motion.span>
    </Wrapper>
  );
}