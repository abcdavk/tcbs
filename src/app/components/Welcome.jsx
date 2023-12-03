export const Welcome = () => {
  const welcomeMessages = [
    'Welcome to The Cursed Blacksmith!',
    'Step into The Cursed Blacksmith!',
    'Greetings! Explore The Cursed Blacksmith!',
    'Enter The Cursed Blacksmith with a warm welcome!',
    'Discover the secrets of The Cursed Blacksmith!'
  ];

  const randomWelcomeMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

  return randomWelcomeMessage;
};