const easterEgg = () => {
  const expositionStyle =
    "text-transform: uppercase; text-decoration: underline dotted;";
  const lineStyle = "color: gray; font-style: italic;";

  const stylisedJoke = [
    {
      text: "Programmer's wife asks her husband :",
      style: expositionStyle,
    },
    {
      text: "Darling, do the grocery, please.",
      style: lineStyle,
    },
    {
      text: "Buy a loaf of bread and if they have eggs, buy ten. ",
      style: lineStyle,
    },
    { text: "", style: undefined },
    {
      text: "In the store:",
      style: expositionStyle,
    },
    {
      text: "Hello, do you have eggs?",
      style: lineStyle,
    },
    {
      text: "Yes, we do.",
      style: lineStyle,
    },
    {
      text: "I'll have eleven loaves of bread, then.",
      style: lineStyle,
    },
  ];

  for (let element of stylisedJoke)
    console.log(`%c${element.text}`, `${element.style}`);
};

export default easterEgg;
