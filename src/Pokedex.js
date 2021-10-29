import React, { Component } from 'react'
import Pokemon from './Pokemon';
import './pokedex.css'
export default class Pokedex extends Component {
    constructor(props) {
        super (props);
        this.state = {
            index: 0,
            selected: 'all',
            filtered: this.props.pokemons,
            filterLength: this.props.pokemons.length,
            isDisabled:''
        }
        
    }

    nextPokemon = () => {
        this.setState(state => ({
            index: (state.index + 1) % this.state.filterLength
        }))
        }
    
    pokemonFilter = () => {
        const { selected } = this.state
        const pokemons = this.props.pokemons
        const result = selected === 'all' ? pokemons : pokemons.filter((pokemon) =>pokemon.type === selected)
        console.log(result)
        
        this.setState({filtered: result, filterLength: result.length}, () => this.disabledButton())
         
    }

    handleType = ({target}) => {
        const pokemons = this.props.pokemons
        const typeArr = ['all']
        pokemons.forEach(pokemon => typeArr.push(pokemon.type))
        console.log(typeArr)
        this.setState({
            selected: target.value,
        },() => this.pokemonFilter(target))
        console.log(this.state.selected)
        
        
    }

    disabledButton = () => {
        this.state.filterLength === 1 ? this.setState({isDisabled: true}) : this.setState({isDisabled: false})
    }

    render() {
        const pokemons = this.props.pokemons
        const { index, selected, filtered, isDisabled } = this.state
        const typeArr = ['all']
        pokemons.forEach(pokemon => typeArr.push(pokemon.type))
       
        return (
            <>
            <div className="pokemonInfo">
                <Pokemon key={filtered[index].id} pokemon={filtered[index]}/>
            </div>
            <div className="typeButtons">
            {typeArr.map(type => <button value={type} onClick={this.handleType}>{type}</button>)}
            </div>
            <button onClick={this.nextPokemon} disabled={isDisabled}>
                Próximo pokémon
            </button>
            </>
        )
    }
}

// pokemons.map(pokemon => <button value={pokemon.type} onClick={this.handleType}>{pokemon.type}</button>)
