import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, typingSpeed = 80, erasingSpeed = 80, pauseTime = 1000 }) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingTimer;
    const currentText = texts[currentSentenceIndex];

    if (!isDeleting && charIndex < currentText.length) {
      // Typing effect
      typingTimer = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Erasing effect
      typingTimer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, erasingSpeed);
    } else if (charIndex === currentText.length) {
      // Pause before starting to delete
      typingTimer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next sentence and reset to typing mode after erasing
      setIsDeleting(false);
      setCharIndex(0);
      setCurrentSentenceIndex((prev) => (prev + 1) % texts.length); // Loop to the first sentence after the last
    }

    return () => clearTimeout(typingTimer);
  }, [charIndex, isDeleting, texts, currentSentenceIndex, typingSpeed, erasingSpeed, pauseTime]);

  return <div className="typing-effect">{displayedText}</div>;
};

export default TypingEffect;
