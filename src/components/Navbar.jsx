import React from "react"

const Navbar = () => {
    return (
        <nav className="bg-black">
            <div>
                <div><a href="#home">Monica Nguyen</a></div>
                <div>
                    <a href="#home">Works</a>
                    <a href="#home">About</a>
                    <a href="#home">Contacts</a>
                </div>
                <button>View My Work</button>
            </div>
        </nav>
    )
}

export default Navbar