import { useSelector } from "react-redux";

function Statistics({ statistics }) {
    const { name } = useSelector(state => state.user.profile);
    return (
        <div className="statistics">
            <p>Hi {name}, below you will see statistics of your games</p>
            {
                statistics.map(s => {
                    return (
                       <div key={s.gameName}>
                           <p>
                               Name of the game is: <strong>
                               {s.gameName}
                           </strong>
                           </p>

                           <p>
                               Winner: {s.winner}
                           </p>
                           <p>
                               Looser: {s.looser}
                           </p>
                       </div>
                    )
                })
            }
        </div>
    )
}

export default Statistics;
