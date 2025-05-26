import './Header.css';

function Header({ collapsed, toggleCollapse }) {
  return (
    <header className="header">
      <button
        className={`toggle-button ${collapsed ? 'circle' : ''}`}
        onClick={toggleCollapse}
      >
        {collapsed ? '☰' : 'Collapse'}
      </button>
      <h1>Cute Golem</h1>
    </header>
  );
}

export default Header;
