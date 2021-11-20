import React from "react"

class GifList extends React.Component {
    


    render(){

        const gifs = this.props.gifData.map(gif => 
            <li><img key={gif.id} src={gif.images.original.url} alt={gif.type}/></li>
        )

        return(
            <ul>
                {gifs}
            </ul>
            )
    }
}

export default GifList 