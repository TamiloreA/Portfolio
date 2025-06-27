import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ phrases, staticPrefix = "I'm a", speed = 150, pause = 2000 }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(speed);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex % phrases.length];
    
    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(speed / 2);
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(speed);
      }, typingSpeed);
    }

    // Switch between typing and deleting
    if (!isDeleting && currentText === currentPhrase) {
      setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex, phrases, speed, pause, typingSpeed]);

  return (
    <>
      {staticPrefix} 
      <span className="animated-text">
        {currentText}
        <span className="cursor">|</span>
      </span>
    </>
  );
};

export default TypingAnimation;