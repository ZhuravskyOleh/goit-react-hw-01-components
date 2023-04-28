// import css from './Statistics.module.css';
import { StatisticsWrap, Title, StatList, StatItem, Label, Percentage } from "./Statistics.styled";

import PropTypes from 'prop-types';


export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsWrap>
            <Title>{title}</Title>
            <StatList>
                {
                    stats.map(stat => (
                         <StatItem key={stat.id} backgroundColor={getRandomHexColor()}>
                            <Label>{stat.label}</Label>
                            <Percentage>{stat.percentage}%</Percentage>
                        </StatItem>
                    ))
                }
            </StatList>
        </StatisticsWrap>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}