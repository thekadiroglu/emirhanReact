import { useState, useEffect } from 'react'; 
import Square from './components/Square'
import {Patterns} from './components/Patterns'
import Header from './components/Header';
export default function TicTacToe() {
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
    const [player, setPlayer] = useState("O");
    const [result, setResult] = useState({ winner: "none", state: "none" });
//burada el değiştiriyor.
    useEffect(() => {
        checkWin();

        if (player == "X") {
            setPlayer("O")
        }
        else {
            setPlayer("X")
        }
    }, [board]);
//burada kazanan ekrana geliyor
    useEffect(() => {
        if (result.state != "none") {
            alert(`Oyun Bitti Kazanan:${result.winner}`)
            
        }
    }, [result])
    //burada kutunun üsütne basıldığında ona değer atanmasını sağlıyor (X, O).
    const chooseSquare = (square) => {
        setBoard(board.map((val, idx) => {
            if (idx == square && val == "") {
                return player
            }

            return val;
        })
        );

       
    }
    // sayfayı yeniden yükleme fonksiyonu.
    function reloadPage()
 {
  window.location.reload()
    }
    //burada kazananı seçiyoz.
    const checkWin = () => {
        Patterns.forEach((currPattern) => {
            const firstPlayer = board[currPattern[0]];
            //burada boş oynanmaması sağlanıyor
            if (firstPlayer == "") return;
            let foundWinningPattern = true
            currPattern.forEach((idx) => {
                if (board[idx] != firstPlayer) {
                    foundWinningPattern = false
                }
            })
            if (foundWinningPattern) {
                setResult({winner: player, state:"won"})
            }
        })
    }
    return (
        //buradaki val içinde belirttiğim numaralar patterns compenentindeki sayılar aslında. Choosesquare ise hangi değerin (x, O) geldiğini yolluyor.
        <>
            <Header/>
        <div className='tic-tac-toe'>
            
            <div className="board">
                <div className="row">               
                    <Square val={board[0]} chooseSquare={() => { chooseSquare(0) }} />
                    <Square val={board[1]} chooseSquare={() => { chooseSquare(1) }}/>
                    <Square val={board[2]} chooseSquare={() => { chooseSquare(2) }}/>
                </div>
                <div className="row">
                    <Square val={board[3]} chooseSquare={() => { chooseSquare(3) }} />
                    <Square val={board[4]} chooseSquare={() => { chooseSquare(4) }}/>
                    <Square val={board[5]} chooseSquare={() => { chooseSquare(5) }}/>
                </div>
                <div className="row">
                    <Square val={board[6]} chooseSquare={() => { chooseSquare(6) }} />
                    <Square val={board[7]} chooseSquare={() => { chooseSquare(7) }}/>
                    <Square val={board[8]} chooseSquare={() => { chooseSquare(8) }}/>
                </div>
            </div>
            <button className='refreshBtn' onClick={reloadPage}>Yeniden Başla</button>
            </div>
            </>
    )
}



