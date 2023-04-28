import { Line } from './Transaction.styled';
import PropTypes from 'prop-types';


export const Transaction = ({ id, type, amount, currency }) => {
    return (
        <Line key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </Line>
    )
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}