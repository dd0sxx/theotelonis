import React from 'react';
import {useState, useEffect} from 'react';
import './Clock.scss';
import clockFace from './imgs/clock-face.gif';

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
        <div className='circle' style={{backgroundImage: `url(${clockFace})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>
        <div className='num'>XII</div>
        <div className='number1 num'>I</div>
        <div className='number2 num'>II</div>
        <div className='number3 num'>III</div>
        <div className='number4 num'>IV</div>
        <div className='number5 num'>V</div>
        <div className='number6 num'>VI</div>
        <div className='number7 num'>VII</div>
        <div className='number8 num'>VIII</div>
        <div className='number9 num'>IX</div>
        <div className='number10 num'>X</div>
        <div className='number11 num'>XI</div>
        <div className='hourHand' style={hourHandStyle}/>
        <div className='minuteHand' style={minuteHandStyle}/>
        <div className='secondHand' style={secondHandStyle}/>
        <div className='clockCenter' />
        </div>
    </div>
  );
}

export default Clock;
