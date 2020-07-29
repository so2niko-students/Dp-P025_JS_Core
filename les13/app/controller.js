import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.model = new Model(this.handleLoadNews);
        this.view = new View(this.handleClickCategory);
        
        this.model.loadNews();
    }

    handleLoadNews = (news) => {
        this.view.renderArticles(news);
    }

    handleClickCategory = (ev) => {
        const category = ev.target.dataset.category;
        this.model.loadNews(category);
    }
}