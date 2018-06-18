import React, { Component } from 'react'

class PokemonCreature extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          pokemon: {}
        }
    
        this.fetchUserData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.pokemon !== this.props.match.params.pokemon) {
          this.fetchUserData()
        }
      }

    fetchUserData = () => {
        const { params } = this.props.match
        fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.pokemon}`)
          .then(response => response.json())
          .then(pokemon => this.setState({ pokemon }))
    }

    render(){
        const { pokemon } = this.state
        return(
            <div className="PokemonCreature">
                <h1>{pokemon.name}</h1>
                <h2>ID: {pokemon.id}</h2>
                <h2>Height: {pokemon.height}</h2>
                <h2>Weight: {pokemon.weight}</h2>
            </div>
        )
    }
}

export default PokemonCreature