import '../styles/Categories.css';

function categories({setActiveCategory, categories, activeCategory}) {
    return (
        <div className="lmj-categories">
            <select
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className='lmj-categories-select'
                >
                <option value="">Toutes les catégories</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}

export default categories