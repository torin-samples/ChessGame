import { useState, useMemo, useCallback, useEffect } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

function Game({ players, room, orientation, cleanup }) {
    const chess = useMemo(() => new Chess(), []); // <- 1
    const [fen, setFen] = useState(chess.fen()); // <- 2
    const [over, setOver] = useState("");

    // onDrop function
    function onDrop() { } // <- 3

    // Game component returned jsx
    return (
        <>
            <div className="board">
                <Chessboard position={fen} onPieceDrop={onDrop} />  {/**  <- 4 */}
            </div>
        </>
    );
}

export default Game;