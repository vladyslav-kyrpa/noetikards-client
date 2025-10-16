import Icon from "./Icon";
import HomeIcon from "../../assets/icons/home.svg";
import ProfileIcon from "../../assets/icons/profile.svg";
import AddDeckIcon from "../../assets/icons/add-item.svg";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
    // todo: handle screen width

    const navigate = useNavigate();

    const onHome = () => {
        navigate("/");
    }
    const onProfile = () => {
        navigate("/profile");
    }
    const onCreate = () => {
        navigate("/create-deck");
    }

    return <div className="h-screen w-screen flex flex-col">
        <div className="bg-surface p-2 flex justify-between">
            <Button onClick={onHome}>
                <Icon src={HomeIcon} size="small" />
            </Button>

            <div>
                <Button onClick={onCreate} className="me-2">
                    <Icon src={AddDeckIcon} size="small" />
                </Button>
                <Button onClick={onProfile}>
                    <Icon src={ProfileIcon} size="small" />
                </Button>

            </div>
        </div>
        <div className="overflow-y-auto flex-1 flex flex-col items-center p-3">
            <div className="max-w-100 w-full">
                {children}
            </div>
        </div>
    </div>
}