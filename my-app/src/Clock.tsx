import React from 'react';
import {useState, useEffect} from 'react';
import './Clock.scss';

function Clock() {

    let [curTime , setCurTime] = useState<Date>(new Date())
    let [curSec , setCurSec] = useState<number>((curTime.getSeconds() / 60));
    let [curMin , setCurMin] = useState<number>((curTime.getMinutes()) / 60);
    let [curHour , setCurHour] = useState<number>((curMin + curTime.getHours()) / 12);
    
    useEffect(() => {
        const timer = setInterval(() => {
          setClock();
        }, 1000);
                   // clearing interval
        return () => clearInterval(timer);
      });

    function setClock () {
            setCurTime(new Date());
            setCurSec(curTime.getSeconds() / 60);
            setCurMin((curTime.getMinutes()) / 60);
            setCurHour((curMin + curTime.getHours()) / 12);
        };


    let hourHandStyle = {
        '--rotation': curHour * 360,
        'transform': 'translateY(-6%) rotate(calc(var(--rotation) * 1deg))'
    }
    let minuteHandStyle = {
        '--rotation': curMin * 360,
        'transform': 'rotate(calc(var(--rotation) * 1deg))'
    }
    let secondHandStyle = {
        '--rotation': curSec * 360,
        'transform': 'rotate(calc(var(--rotation) * 1deg))'
    }
    
  return (
    <div className="clock">
        <div className='circle'>
        <div className='num'>12</div>
        <div className='number1 num'>1</div>
        <div className='number2 num'>2</div>
        <div className='number3 num'>3</div>
        <div className='number4 num'>4</div>
        <div className='number5 num'>5</div>
        <div className='number6 num'>6</div>
        <div className='number7 num'>7</div>
        <div className='number8 num'>8</div>
        <div className='number9 num'>9</div>
        <div className='number10 num'>10</div>
        <div className='number11 num'>11</div>
        <div className='hourHand' style={hourHandStyle}/>
        <div className='minuteHand' style={minuteHandStyle}/>
        <div className='secondHand' style={secondHandStyle}/>
        <div className='clockCenter' />
        </div>
    </div>
  );
}

export default Clock;
