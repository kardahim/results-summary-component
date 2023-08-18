import React from 'react';
import { SkillInterface } from '../interfaces/skillInterface';
import '../assets/styles/skillPanel.scss';

function SkillPanel(props: SkillInterface) {


    return (
        <div className={`panel panel--${props.color}`}>
            <div className='panel__left'>
                <img src={props.icon} alt={props.category} className='panel__left__icon' />
                <span className='panel__left__category'>{props.category}</span>
            </div>
            <div className='panel__right'>
                <span className='panel__right__score'>{props.score}</span>
                <span className='panel__right__total'>100</span>

            </div>
        </div>
    )
}
export default SkillPanel