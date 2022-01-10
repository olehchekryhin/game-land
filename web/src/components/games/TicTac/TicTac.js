import React, { useEffect, useState } from "react";
import "./TicTac.scss";

import Board from "./board/Board";
import { getTicTacWinner } from "../../../services/winners";
import { EVENT_TYPE } from "../../../constants/events";
import { TURN, TAG_NAME } from "./constants";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TicTac({ socket, meetingId, emitAction, b, t, emptyBoard }) {
    const [ board, updateBoard ] = useState(b);
    const [ turn, setTurn ] = useState(t);
    const [ winner, setWinner ] = useState(null);

    const handleAction = (e) => {
        const target = e.target.tagName === TAG_NAME.ICON ? e.target.parentElement.dataset : e.target.dataset;
        const cell = board[target['row']][target['cell']];

        if (!cell && !winner) {
            board[target['row']][target['cell']] = turn;
            emitAction({ action: EVENT_TYPE.MESSAGE, meetingId, data: { board, turn: turn === TURN.CROSS ? TURN.ZERO : TURN.CROSS } });
        }
    };

    const resetGame = () => {
        updateBoard(emptyBoard);
        setWinner(null);
        emitAction({action: EVENT_TYPE.MESSAGE, meetingId, data: { board: emptyBoard, turn: TURN.CROSS }});
    };

    useEffect(() => {
        updateBoard(b);
        setTurn(t);
        setWinner(getTicTacWinner(b));

        return () => {
            emitAction({action: EVENT_TYPE.LEAVE_ROOM, meetingId });
        }
    }, [socket, b, t]);

    return (
        <div className="tic-tac">
            <Row>
                <Col>
                    <Board board={ board } handleAction={ handleAction }/>
                    <Button variant="info" onClick={ resetGame } className="mt-4">New game</Button>
                </Col>
                <Col>
                    <p>
                        Game name is: <strong>{ meetingId }</strong>.
                        Send this number to another player
                    </p>
                    <p>
                        Next turn is: <i className={ turn }>&nbsp;</i>
                    </p>
                    <p>
                        { winner ? `Winner is:` : '' } <i className={winner}>&nbsp;</i>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default TicTac;
