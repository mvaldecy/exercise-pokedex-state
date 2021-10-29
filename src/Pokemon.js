import React, { Component } from 'react'
import './pokemon.css'

export default class Pokemon extends Component {
    render() {
        const { name, type, averageWeight, image, moreInfo } = this.props.pokemon
        return (
            <div className="pokemon">
                <div>
                <p>{name}</p>
                <p>{type}</p>
                <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
                <p><a href={moreInfo}>info</a></p>
                </div>
                <img src={image} alt={`${image} sprite`}/>
            </div>
        )
    }
}
