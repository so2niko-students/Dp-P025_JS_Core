export default class View{
    newsCatalog = document.querySelector('.news_catalog');
    categoriesLinks = document.querySelectorAll('.categories_menu a');

    constructor(handleClickCategory){
        this.categoriesLinks.forEach(link => link.addEventListener('click', handleClickCategory));
    }

    renderArticles(articles){
        this.newsCatalog.innerHTML = articles.map(art => this.getArticleHtml(art)).join('');
    }

    getArticleHtml(article){
        const {
            title,
            description,
            url,
            urlToImage
        } = article;

        return `<div class="card m-2" style="width: 18rem;">
        <img src="${ urlToImage }" class="card-img-top" alt="${ title }">
        <div class="card-body">
            <h5 class="card-title">${ title }</h5>
            <p class="card-text">${ description }</p>
            <a href="${ url }" class="btn btn-primary">Переход куда-нибудь</a>
        </div>
    </div>`;
    }
}