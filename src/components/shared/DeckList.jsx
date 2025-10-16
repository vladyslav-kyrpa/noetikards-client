import { useNavigate } from "react-router-dom"
import Icon from "./Icon";
import DeckIcon from "../../assets/icons/deck.svg";

export default function DeckList({ decks }) {
    const navigate = useNavigate();

    const onSelected = (id) => {
        navigate(`/deck/${id}`);
    }

    return <div className="flex flex-col gap-2">
        {decks.map((item, key) => {
            return <DeckListItem deck={item} key={key} onSelected={onSelected} />
        })}
    </div>

}

function DeckListItem({ deck, onSelected }) {
    const maxLength = 20;
    const shortDesciption = deck.description.length > maxLength
        ? `${deck.description.substring(0, maxLength)}...`
        : deck.description;

    return <div className="p-3 flex gap-3 bg-surface rounded-item transition duration-100 hover:bg-surface-highlight" onClick={() => onSelected(deck.id)}>
        <div className="w-12 h-12 p-3 bg-on-surface-highlight rounded-item">
            <Icon src={DeckIcon} />
        </div>
        <div className="flex-1">
            <p>{deck.title}</p>
            <p className="text-minor-text">{shortDesciption}</p>
        </div>
        <div>
            <div className="bg-on-surface-highlight px-2 rounded">{deck.cardsCount}</div>
        </div>
    </div>
}