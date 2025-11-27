export default function ExtensionList({ filter, setFilter }) {
    return (
        <div className='extension-lists'>
            <h2>Extension Lists</h2>
            <div className='btns'>
                <button
                    className={`button ${filter === "all" ? "active-btn" : ""}`}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>

                <button
                    className={`button ${filter === "active" ? "active-btn" : ""}`}
                    onClick={() => setFilter("active")}
                >
                    Active
                </button>

                <button
                    className={`button ${filter === "inactive" ? "active-btn" : ""}`}
                    onClick={() => setFilter("inactive")}
                >
                    Inactive
                </button>
            </div>
        </div>
    )
}
