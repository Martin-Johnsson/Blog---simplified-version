import "./App.css";
import Post from "./components/ReactPost";
import { FcFaq } from "react-icons/fc";
function App() {
  const BulletinBoard = [
    {
      id: 1,
      question: "Vad är tre fördelar med att använda React?",
      answer:
        "Man kan återanvända kod som man en gång skapat, React har en stark community och slutligen så laddas webbapplikationen snabbare.",
    },
    {
      id: 2,
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer:
        "Det betyder att inehållet bara laddas vid ett tillfälle och därefter uppdateras endast när det nya innehållet som ska visas. Logiken utförs i webbläsaren istället för på servern och endast data skickas fram och tillbaka efter att sidan har laddats.",
    },
    {
      id: 3,
      question: "Nämn tre skillnader mellan React och Angular.",
      answer:
        "React använder sig av JavaScript och Angular TypeScript, React är ett biblotek medans Angular är ett framework. React är friare där man själv får välja verktyg, arkitektur och biblotek.",
    },
  ];
  console.log(BulletinBoard);

  return (
    <div className="App">
      <header className="header">
        <span className="faq">
          <FcFaq />
        </span>
        <h1>FAQ</h1>
      </header>
      {BulletinBoard.map((question) => (
        <Post question={question.question} answer={question.answer} />
      ))}
    </div>
  );
}

export default App;
