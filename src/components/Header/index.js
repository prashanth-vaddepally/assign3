import './index.css'

const Header = () => (
  <nav>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul>
        <li>
          <p>Score:0</p>
        </li>

        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
