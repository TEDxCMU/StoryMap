import { ReactComponent as Logo } from "../public/TEDx-logo.svg";

export default function Header() {
    return(
        <nav>
            <a href="tedxcmu.org">
                <Logo />
            </a>
            <h1>Story Map</h1>
        </nav>
    )
}