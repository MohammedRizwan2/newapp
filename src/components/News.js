import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
 
   constructor(){
    super()
    console.log("hello iam a constructor from news component");
    this.state ={
      articles: [],
       loading: false,
       page:1
    }
  }
 async componentDidMount(){
    console.log('cdm');
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ce05667fd3d44147bec3215bc5be134f&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({articles: parsedData.articles ,totalResults:parsedData.totalResults})

  }
  handleprevclick=async()=>{
    console.log('previous')
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ce05667fd3d44147bec3215bc5be134f&page=${this.state.page -1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData= await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles})

  }
  handlenextclick=async()=>{
console.log('next')
if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

}
else{
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ce05667fd3d44147bec3215bc5be134f&page=${this.state.page +1}&pageSize=20`;
let data = await fetch(url);
let parsedData= await data.json();
this.setState({
  page: this.state.page + 1,
  articles: parsedData.articles})
  }
  }
  render() {
    return (
      <div className='container my-3 btn-dark'>
        <h2>NewsMonkey-top headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{ 
            return<div className="col-md-4"key={element.url}>
            <NewsItem title={element.title}discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>



        })}

           
            
        </div>

       <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}
        type="button"onClick={this.handleprevclick} className="btn btn-dark"> &larr;previous</button>

        <button type="button"onClick={this.handlenextclick} className="btn btn-dark">next&rarr;</button>
       </div>

      </div>
    )
  }
}
