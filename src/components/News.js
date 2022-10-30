import React, { useEffect,useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from"react-infinite-scroll-component";


const  News =(props)=> {


   const [articles, setArticles]=useState([])
   const [loading, setLoading]=useState(true)
   const [page, setPage]=useState(1)
   const [totalResults, setTotalResults]=useState(0)
   
  
   
    document.title=`${(props.category)} - NewsMonkey`
  
  const UpdateNews=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ce05667fd3d44147bec3215bc5be134f&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData= await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    props.setProgress(100);
  }

useEffect(() =>{
  UpdateNews()
},[])

  
//   const handleprevclick=async()=>{
//     console.log('previous')
//     setPage(page-1)
//    UpdateNews()

//   }
//  const  handlenextclick=async()=>{
// setPage(page+1)
// UpdateNews()
//   }
 const fetchMoreData=async()=>{
   
   
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ce05667fd3d44147bec3215bc5be134f&page=${page+1}&pageSize=${props.pageSize}`;
   let data = await fetch(url);
   let parsedData= await data.json();
   setPage(page+1)
    setArticles(articles.concat (parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)   
  }
  
 
    return (
      <>
      
        <h1 className='text-center'style={{margin:'90px 0px'}}>NewsMonkey-top headlines</h1>
      

       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.lenght !==totalResults}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
        {articles.map((element)=>{ 
            return<div className="col-md-4"key={element.url}>
            <NewsItem title={element.title}discription={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author}
            date={element.publishedAt} source={element.source.name}/>
            </div>



        })}

           
          
        </div>
        </div>
        </InfiniteScroll>

        </>)}
     
     
     News.defaltprops = {
       country:'in',
       pageSize:6,
       category: 'general',
      }
      News.propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
      }
 export default News

   