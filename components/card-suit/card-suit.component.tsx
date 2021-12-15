import SuitStyles from './card-suit.styles';

interface CardSuitProps {
    suit: string
};
const CardSuit = ({ suit }: CardSuitProps) => {
    switch (suit) {
        case 'spades':
            return <SuitStyles className="dark">♤</SuitStyles>;

        case 'clubs':
            return <SuitStyles className="dark">♧</SuitStyles>;

        case 'hearts':
            return <SuitStyles className="red">♡</SuitStyles>;

        case 'diamonds':
            return <SuitStyles className="red">♢</SuitStyles>;
    }
}
 
export default CardSuit;