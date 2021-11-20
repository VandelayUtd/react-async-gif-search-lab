import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch" 

class GifListContainer extends React.Component {
    state = {
        gifData: []
    }

    render(){
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifData={this.state.gifData} />
            </div>) 
    }


    fetchGifs = (query = "sopranos") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=rmvbBg4idYfzQMeJ5P0K0tY3AYrZimMj&rating=g`)
        .then(res => res.json())
        .then(gifs => {
            this.setState({
                gifData: gifs.data.slice(0, 3) 
            })
        })

    }


    componentDidMount() {
        this.fetchGifs()
    }


}

export default GifListContainer 