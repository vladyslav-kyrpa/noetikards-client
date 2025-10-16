import { useNavigate } from "react-router-dom";
import Button from "../shared/Buttons";
import DeckList from "../shared/DeckList";

export default function MyDecksPage() {
    const decks = getDecks();
    const navigate = useNavigate();

    const onCreateDeck = () => {
        navigate("/create-deck");
    }

    return <div className="flex flex-col">
        <Button className="mb-3" onClick={onCreateDeck}>+ Create deck</Button>
        <DeckList decks={decks} />
    </div>
}

function getDecks() {
    return [
        { id: "1", title: "deck1", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "2", title: "deck2", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "3", title: "deck3", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "4", title: "deck4", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "5", title: "deck5", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "1", title: "deck1", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "2", title: "deck2", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "3", title: "deck3", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "4", title: "deck4", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "5", title: "deck5", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "1", title: "deck1", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "2", title: "deck2", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "3", title: "deck3", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "4", title: "deck4", description: "deck deck deck deck deck deck", cardsCount: 10 },
        { id: "5", title: "deck5", description: "deck deck deck deck deck deck", cardsCount: 10 },
    ];
}