import { useNavigate } from "react-router-dom";
import Button from "../shared/Buttons";
import SearchBar from "../shared/SearchBar";

export default function HomePage() {
    const navigate = useNavigate();

    const onSearch = (value) => {
        navigate(`/search?value=${value}`);
    }

    const toUserDecks = () => {
        navigate("/my-decks");
    }

    const toSavedDecks = () => {
        navigate("/saved-decks");
    }

    const toCreateDeck = () => {
        navigate("/create-deck");
    }

    // todo: 
    // add user statistics block

    return <div className="flex flex-col gap-2">
        <SearchBar placeholder="Type deck name..." onSearch={onSearch} />
        <Button onClick={toUserDecks}>My Decks</Button>
        <Button onClick={toSavedDecks}>Saved Decks</Button>
        <Button onClick={toCreateDeck}>+ Create Deck</Button>
    </div>
}