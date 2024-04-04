import Img from "./Running deer.gif"

export default function Spinner() {
    return (
        <div className="text-center">
            <img src={Img} alt="Loading..." />
        </div>
    )
}
