import React from 'react'
import { Fig, FooterTag, Rights } from '../styles/FooterStyle'
import logo from '../images/amazon-logo-white.png'

function Footer() {
    return (
        <FooterTag>
                    <Fig>
                        <img src={logo} alt="amazon logo" />
                    </Fig>
                    <Rights>all &copy; copyrights saved by <span className="bold">MANDO</span></Rights>
        </FooterTag>
    )
}

export default Footer
