import "@/app/example/articles.css";

export default function Page() {
    return <>
        <div id="grid">
            <div className="grid-item" id="article-1">
                <h2>Article 1</h2>
                <p>This is content from article 1!</p>
            </div>
            <div className="grid-item" id="article-2">
                <h2>Article 2</h2>
                <p></p>
            </div>
            <div className="grid-item" id="article-3">
                <h2>Article 3</h2>
                <p></p>
            </div>
            <div className="grid-item" id="article-4">
                <h2>Article 4</h2>
                <p></p>
            </div>
            <div className="grid-item" id="article-5">
                <h2>Article 5</h2>
                <p></p>
            </div>
        </div>
    </>
}