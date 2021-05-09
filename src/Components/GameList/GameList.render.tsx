import React, { ChangeEvent, ReactElement } from "react";
import GameCard from "Components/GameCard";
import GameFilter from 'Components/GameFilter';
import { Game } from 'types'
import { List, ListItem } from './styles'

interface Props {
    err?: string
    games: Game[]
    onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void
}

const GameList = ({ err, games, onFilterChange }: Props): ReactElement => {
    if (err) {
        return <p>Tidak dapat mengambil game</p>
    }
    if (!games?. length) {
        return <p>Tidak ada game yang tersedia</p>
    }
    return (
        <>
        <GameFilter onChange={onFilterChange}/>
        <List>
            {games.map(game => (
                <ListItem key={game.id}>
                    <GameCard content={game}/>
                </ListItem>
            ))}
        </List>
        </>
    )
}

export default GameList