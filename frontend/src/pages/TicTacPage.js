import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from "react-redux";

import TicTac from "../components/games/TicTac/TicTac";
import SocketContext from '../contexts/socket.context';
import { EVENT_TYPE } from "../constants/events";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { httpService } from "../services/http.service";
import { generateGameId } from "../helpers/helpers";
import { ANONYMOUS_USER_ID } from "../constants/constants";
import { getMessage } from "../helpers/tic-tac.helper";

export default function TicTacPage() {
    const initialState = [['', '', ''], ['', '', ''], ['', '', '']];
    const [ gId, setGId ] = useState(null);
    const [ game, setGame ] = useState('');
    const [ gameInfo, setGameInfo ] = useState(null);
    const [ isGameJoined, setIsGameJoined ] = useState(false);
    const [ board, updateBoard ] = useState(initialState);
    const [ turn, setTurn ] = useState('x');
    const socket = useContext(SocketContext);
    const profile = useSelector(state => state.user.profile);

    const generateAndSetGameId = () => {
        setGame(generateGameId());
    };

    const getGames = async gameId => {
        let games = null;

        try {
            games = JSON.parse(await httpService('GET', `api/game/${gameId}`));
        } catch (e) {
            console.log('Something went wrong');
        }

        return games;
    };

    const createGame = async body => {
        let game;

        try {
            game = JSON.parse(await httpService('POST', 'api/game', body));
        } catch (e) {
            console.log('Something went wrong');
        }

        return game;
    };

    const joinRoom = async (s, gameId) => {
        s.emit(EVENT_TYPE.JOIN_ROOM, gameId);
        setIsGameJoined(true);

        let games = await getGames(gameId);

        if (!games || !games.length) {
            const body = { gameId, board, turn };

            body.userId = profile && profile.id ? profile.id : ANONYMOUS_USER_ID;
            const game = await createGame(body);

            setGameInfo(game);
            setGId(game._id);
        } else {
           const [ game ] = games;

           setGameInfo(game);
           setGId(game._id);

           if (game.data) {
               const { board, turn } = game.data;

               updateBoard(board);
               setTurn(turn);
           }
        }
    };

    const handleChange = (e) => {
        setGame(e.target.value);
    };

    const action = async ({ action, ...message }) => {
        socket.emit(action, getMessage(message, gameInfo, profile, gId));
    };

    useEffect(() => {
        let isMounted = true;

        socket.on(EVENT_TYPE.MESSAGE, ({ data: { board, turn }, userIdAdditional, userId }) => {
            setGameInfo({ userIdAdditional, userId });

            if (isMounted) {
                updateBoard(board);
                setTurn(turn);
            }
        });

        socket.open();

        return () => {
            socket.close();
            isMounted = false;
        }
    }, [socket]);

    return (
        <Container>
            <SocketContext.Consumer>
                {
                    s => {
                        return (
                            <div>
                                {
                                    !game || !isGameJoined ?
                                        <div>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="text" placeholder="Game ID" value={game} onChange={ handleChange }/>
                                                </Form.Group>
                                            </Form>
                                            <Button variant="primary" onClick={ generateAndSetGameId }>Create game</Button>{' '}
                                            <Button variant="success" onClick={() => joinRoom(s, game)}>Join game</Button>
                                        </div> : null
                                }

                                {
                                    game && isGameJoined
                                        ? <TicTac meetingId={ game }
                                                  emptyBoard={ initialState }
                                                  b={ board }
                                                  t={ turn }
                                                  socket={ s }
                                                  emitAction={ action }/>
                                        : null
                                }
                            </div>
                        )
                    }
                }
            </SocketContext.Consumer>
        </Container>
    )
}
