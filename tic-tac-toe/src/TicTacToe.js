import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import './TicTacToe.css';


const TicTacToe = () => {
    const [turn,setTurn] = useState('X');
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner,setWinner] = useState();
    const [draw,setDraw] = useState(false);

    const GameEnd = (squares) => {
        let sequence ={
            horizontal :[[0,1,2],[3,4,5],[6,7,8],],
            vertical :[[0,3,6],[1,4,7],[2,5,8],],
            diagonal :[[0,4,8],[2,4,6],]
        };
        for(let seq in sequence){
            sequence[seq].forEach((pattern)=>{
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ){}
                else if(
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                    setWinner(squares[pattern[0]])
                }
            })
        }


    }
    const GameDraw = (squares) => {
        var count=0;
        squares.forEach((s)=>{
            if (s===''){
                count=count+1;
            }

        })
        if (count===0){
            setDraw(true)
        }

        

    }


    const clickResponse = (loc) => {
        if(cells[loc]!== ''){
            alert("Already occupied");
            return;
        }
        let squares =[...cells];
        if(turn==='X'){
            setTurn('O');
            squares[loc]="X"
        } else{
            squares[loc]="O"
            setTurn('X');
        }
        GameEnd(squares);
        GameDraw(squares);
        setCells(squares);
        
    }
    const gameRestart=() =>{
        setWinner(null);
        setCells(Array(9).fill(''))
        setDraw(false);
    }
    const Cell =({loc}) => {
        return <td className='cell'  onClick={() => clickResponse(loc)}>{cells[loc]}</td>
    }
  return (
      
    <div className='container' style={{paddingTop:"30px"}}>
    
    

<Card sx={{ maxWidth: 645 }} style={{opacity:"0.9"}}>
      <CardActionArea className='card_body'>
      <div className='header'>
        <h2 style={{fontSize:"3em", fontWeight:"bold"}}>Tic Tac Toe</h2>
    </div>
      <div className="cardRow">
            Turn: {turn}
          </div>

      <table >
          
        <tbody>
            <tr>
                <Cell loc={0}/>
                <Cell loc={1}/>
                <Cell loc={2}/>
            </tr>
            <tr>
                <Cell loc={3}/>
                <Cell loc={4}/>
                <Cell loc={5}/>
            </tr>
            <tr>
                <Cell loc={6}/>
                <Cell loc={7}/>
                <Cell loc={8}/>
            </tr>      
        </tbody>  
      </table>

      {winner && (
          <>
          <p className="cardRow">{winner} won the Match</p>
          {/* <button onClick={()=>gameRestart()}>New Game</button> */}
          <div className="newGame">
          <Button  variant="contained" onClick={()=>gameRestart()}>New Game</Button>
          </div>
          </>
      )}
    {draw && !winner && (
          <>
          <p className="cardRow">Game Draw</p>
          {/* <button onClick={()=>gameRestart()}>New Game</button> */}
          <div className="newGame">
          <Button  variant="contained" onClick={()=>gameRestart()}>New Game</Button>
          </div>
          </>
      )}
        
      </CardActionArea>
    </Card>

      
      
    </div>

  )
}

export default TicTacToe
