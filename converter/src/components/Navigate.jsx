import { NavLink } from "react-router";

export function Navigate({link, name}) {
    return (
        <NavLink to={`/${link}`}
                 className={({ isActive }) =>
                     isActive ? "text-active" : "text"
                 }
        >
            {name}
        </NavLink>
    )
}