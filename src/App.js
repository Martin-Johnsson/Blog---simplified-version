import "./App.css";
import Post from "./components/ReactPost";
import { FcFaq } from "react-icons/fc";
function App() {
  const BulletinBoard = [
    {
      id: 1,
      question: "Vad är tre fördelar med att använda React?",
      answer:
        "Man kan återanvända kod som man en gång skapat. Projektet produktivitet ökar. Webbapplikationen laddas snabbare.",
    },
    {
      id: 2,
      question:
        "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
      answer:
        "Det betyder att sidan bara laddas vid ett tillfälle och därefter uppdateras när nytt innehåll ska visas. ",
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
