import Img from "./Running deer.gif"

export default function Spinner() {
    return (
        <div className="text-center" style={{ position: "fixed", top: "50%", left: "50%" }}>
            <img src={Img} alt="Loading..." />
        </div>
    )
}
