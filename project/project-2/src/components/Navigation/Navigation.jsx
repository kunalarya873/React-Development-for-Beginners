import styles from "./Navigation.module.css"
const Navigation = () => {
    return (
      <div>
        <nav className={`${styles.navigation} container`}>
          <div className="logo">
              <img src="images/Frame 2 1.png" alt="DoSomCoding Logo" />
          </div>
          <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }  

export default Navigation