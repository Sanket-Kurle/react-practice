import logo from '../assets/investment-calculator-logo.png'


export function Header(){
    return (
        <header id='header'>
            <img src={logo} alt='Logo Showing Money Bag'/>
        <h2>Investment Calculator</h2>
        </header>
    )
}