import Proptypes from "prop-types";
import {TableElements, TrElement, TdElement, ThElement,} from "./TransactionHistory.styled"

function TransactionHistory({ items }) {
    return (
        <TableElements className="transaction-history">
            <thead>
                <TrElement>
                    <ThElement>Type</ThElement>
                    <ThElement>Amount</ThElement>
                    <ThElement>Currency</ThElement>
                </TrElement>
            </thead>
            <tbody>
                {items.map((item) => {
                    return (
                        <TrElement key={item.id}>
                            <TdElement >{item.type}</TdElement>
                            <TdElement >{item.amount}</TdElement>
                            <TdElement >{item.currency}</TdElement>
                        </TrElement>
                    );
                })}
            </tbody>
        </TableElements>
    );
}

TransactionHistory.propTypes = {
    items: Proptypes.arrayOf(
        Proptypes.shape({
            id: Proptypes.string.isRequired,
            type: Proptypes.string,
            amount: Proptypes.string,
            currency: Proptypes.string,
        })
    ),
};
export default TransactionHistory;
