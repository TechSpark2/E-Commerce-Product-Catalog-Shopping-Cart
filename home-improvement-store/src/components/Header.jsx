function Header({ cartCount }) {
    return (
        <header>
            <h1>Home Improvement Store</h1>

            <div className="header-actions">
                <button>
                    🛒 Cart ({cartCount})
                </button>
            </div>
        </header>
    );
}

export default Header;