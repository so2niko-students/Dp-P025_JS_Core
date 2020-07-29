export default class Model{
    baseUrl = 'http://newsapi.org/v2/';
    apiKey = '&apiKey=58d7638951004aa495513f5703d744f7'
    topUkraine = 'top-headlines?country=ua';
    dataLinks = {
        home : '/data/data.json',
        sport : '/data/data_sport.json',
        tech : '/data/data_it.json',
        health : '/data/data_health.json',
        science : '/data/data_science.json'
        // science : 'http://newsapi.org/v2/top-headlines?apiKey=58d7638951004aa495513f5703d744f7&category=science&country=ua'
    };

    constructor(handleLoadNews){
        this.handleLoadNews = handleLoadNews;
    }

    loadNews(category = 'home'){
        // const url = this.baseUrl + this.topUkraine + this.apiKey;
        const url = this.dataLinks[category];
        // const props = { mode : 'no-cors' };
        fetch(url)
            .then(resp => resp.json())
            .then(data => this.saveArticles(data.articles));
    }

    saveArticles(articles){
        this.articles = articles;
        this.handleLoadNews(articles.slice(0, 6));
    }
}