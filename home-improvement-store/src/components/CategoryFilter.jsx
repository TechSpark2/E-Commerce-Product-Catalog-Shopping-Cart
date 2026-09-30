function CategoryFilter({ selectedCategory, onCategoryChange }) {
    const categories = ["All", "Tools", "Electrical", "Plumbing"];

    return (
        <div className="category-buttons">
            {categories.map(function(category) {
                return (
                    <button
                        key={category}
                        className="category-btn"
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

export default CategoryFilter;