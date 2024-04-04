import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";
import GroundSpinner from "./GroundSpinner.js"
import { useState, useEffect } from "react";

export default function NewsComponent(props) {
    document.title = "DeerNews - " + capitalize(props.category);
    let [page, setPage] = useState(1)
    let [articles, setArticles] = useState([])
    let [loading, setLoading] = useState(true)
    let [totalResult, setTotalResult] = useState()
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1, str.length)
    }
    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        let response = await fetch(url);
        await props.setProgress(100);
        let jsondata = await response.json();
        setArticles((preArticles) => {
            return jsondata.articles;
        });
        setLoading(() => {
            return false;
        });
        setTotalResult(() => {
            return jsondata.totalResults;
        });
    }
    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        let response = await fetch(url);
        let jsondata = await response.json();
        setArticles((preArticles) => {
            return preArticles.concat(jsondata.articles);
        });
        setTotalResult(() => {
            return jsondata.totalResults;
        });
    }
    const fetchMoreData = async () => {
        setPage((prePage) => {
            return prePage + 1;
        });
    }
    useEffect(()=>{
        fetchData();
    },[page])
    useEffect(() => {
        updateNews();
    }, []);
    let defaultimg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAACUCAMAAADVs1c8AAAAVFBMVEXa2tpVVVVSUlLe3t5OTk7CwsLPz89cXFxAQEBLS0tZWVm0tLSPj4/h4eHn5+eZmZlnZ2eJiYl/f39GRkZtbW11dXXIyMinp6eurq5hYWGfn58xMTGIdMbeAAACEklEQVR4nO3a7Y6iMBSAYewpaMGKAqK493+fi+AHKpkBN7PTY97nnwQS3hRaIEYRAAAAAAAAAAAAAAAAAAAA8L8k/0R++/Rf+JNZvq/Z/Pb5v/B5ad6XhhjkFu8j6Of1QcbNZoIOWu7WM+VVyEGmqufOv35nQw7azg7afEKQDHb6gBESqePotpv+IF/vl2mV+etP7UFSr+x5ej9cdtQfVHQLj62Sy3HKgyTZdkELG/d7KgqSsTZJGq1Bkp/Givyue+aze22XnCRucRwpaofIGePSTNuk4NfOpLfJebhjvGvSIrv9VBIk9fnZ28QjRdK+retbWPvZ2aTxd9O4kiDJ0n65ae5FyWnsU4iSoKiw/avofYs/lcVIkY4giW/v47bp7xeJnLHb17VJR1B0WT37om5c5Dxm1rw8SagI8ody8AGkXUPlfFN1V2CTPRVpCJLhAJ2LinY5vdxUJj08zuQagvzJPn6kcvtNdt1kXL4ZDpKCIKkfB6grqu6byl00KFIQFK1fPzmaYaItBlND+EESL58H6JmrktuNpCDoWH7T0z1A6PmmMCWovQSP1+M+I6gtyvunBgVBh5WdwF0mu/CDoiSeqHsJVxAUyUT9caEH+Zk266CDmkM2V/dqG2pQe2azdZNeuEFvIujnfV7Q+s/qfWV4QTJ5PR0V3n99Ji+nXyyyAAAAAAAAAAAAAAAAAAAAn+Evu7A0XeDcXccAAAAASUVORK5CYII="
    return (
        <div className="container">
            <h1 className="text-center" style={{ fontWeight: "bolder", marginTop: "80px" }}>DeerNews - Top {capitalize(props.category)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResult}
                loader={!loading && <GroundSpinner></GroundSpinner>}
            >
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}><NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage ? element.urlToImage : defaultimg} newsUrl={element.url} author={element.author} time={element.publishedAt} sourcename={element.source.name}></NewsItem></div>
                    })}
                </div>
            </InfiniteScroll>
            {loading && <Spinner></Spinner>}
        </div>
    )
}
NewsComponent.propTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}
NewsComponent.defaultProps = {
    pagesize: 15,
    country: "in",
    category: "general"
}