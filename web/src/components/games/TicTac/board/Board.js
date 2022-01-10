import "./Board.scss";

function Board({ board ,handleAction }) {
    return (
        <table className="board" onClick={ handleAction }>
            <tbody>
            {
                board.map((r, ri) => {
                    return (
                        <tr className="row" key={ ri }>
                            {
                                r.map((c, ci) => {
                                    return <td data-row={ ri }
                                               data-cell={ ci }
                                               className={"cell " + c}
                                               key={`${ri}-${ci}`}>
                                        <i className={c}>&nbsp;</i>
                                    </td>
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default Board;
