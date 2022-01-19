import React, { useState, useEffect, useContext } from 'react';
import TicTac from "../components/games/TicTac/TicTac";
import SocketContext from '../contexts/socket.context';
import { EVENT_TYPE } from "../constants/events";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { httpService } from "../services/http.service";
import { useSelector } from "react-redux";

export default function TicTacPage() {
    const initialState = [['', '', ''], ['', '', ''], ['', '', '']];
    const [ gId, setGId ] = useState(null);
    const [ game, setGame ] = useState('');
    const [ isGameJoined, setIsGameJoined ] = useState(false);
    const [ board, updateBoard ] = useState(initialState);
    const [ turn, setTurn ] = useState('x');
    const socket = useContext(SocketContext);
    const profile = useSelector(state => state.user.profile);

    const create = () => {
        const gameId = (Math.random() + 1).toString(36).substring(7);
        setGame(gameId);
    };

    const join = async (s, gameId) => {
        s.emit(EVENT_TYPE.JOIN_ROOM, gameId);
        setIsGameJoined(true);
        let games = null;

        try {
            const response = await httpService('GET', `api/game/${gameId}`);
            games = JSON.parse(response);
        } catch (e) {
            console.log('Something went wrong');
        }

        if (!games || !games.length) {
            const data = {
                gameId,
                board,
                turn
            };

            if (profile.id) {
                data.userId = profile.id;
            }

            await httpService('POST', 'api/game', data).then(data => {
                setGId(JSON.parse(data)._id);
            });
        } else {
           const [ game ] = games;
           const { board, turn } = game.data;
            updateBoard(board);
            setTurn(turn);
            setGId(game._id);
        }
    };

    const handle = (e) => {
        setGame(e.target.value);
    };

    const action = async ({ action, meetingId, data, winner }) => {
        socket.emit(action, { meetingId, gameId: gId, data, winner: winner ? profile.id : null, userId: profile.id });
    };

    useEffect(() => {
        let isMounted = true;

        socket.on(EVENT_TYPE.MESSAGE, ({data: { board, turn }}) => {
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
                                                    <Form.Control type="text" placeholder="Game ID" value={game} onChange={handle}/>
                                                </Form.Group>
                                            </Form>
                                            <Button variant="primary" onClick={create}>Create game</Button>{' '}
                                            <Button variant="success" onClick={() => join(s, game)}>Join game</Button>
                                        </div> : null
                                }

                                {
                                    game && isGameJoined
                                        ? <TicTac meetingId={game}
                                                  emptyBoard={initialState}
                                                  b={board}
                                                  t={turn}
                                                  socket={s}
                                                  emitAction={action}/>
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
