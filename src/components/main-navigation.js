import React from "react"
import { Link } from "gatsby"

export default ({ socialMedia }) => (
    <nav className="nav">
        <ul className="nav-list">
            <li className="nav-item">
                <Link to="/blog" className="pure-button">Blog</Link>
            </li>

            {socialMedia.map((item, i) => {
                return (
                    <li key={i} className="nav-item">
                        <a href={item.url} title aria-label={item.name} target="_blank" rel="noopener noreferrer" className={item.icoClass + ` pure-button ico`}><span>{item.name}</span></a>
                    </li>
                )
            })}
        </ul>
    </nav>
)