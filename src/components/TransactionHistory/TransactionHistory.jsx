import { Transaction } from "./Transaction";
import { Table, Head } from "./TransactionHistory.styled";
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
    return (
        <Table>
            <Head>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </Head>

            <tbody>
                {
                    items.map(item => (
                        <Transaction
                            key={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency}
                        />
                    ))
                }
            </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
}