import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import css from '../../../styles/getfreeEstimate.module.scss';
interface CounterProps {
    count: number;
    countName: string;
    onCountChange: (newCount: number) => void;
}

const Counter: React.FC<CounterProps> = ({ count: initialCount, onCountChange,countName }) => {
    const [count, setCount] = useState<number>(initialCount);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    const decrementCount = () => {
        const newCount = count - 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    return (
        <>
        
            <div className={css.Count_content}>
                <AiFillMinusCircle onClick={decrementCount} className={css.decrement} />
                <span className={css.number_count}>{count}</span>
                <AiFillPlusCircle onClick={incrementCount} className={css.increment} />
                <p className={css.Count_name}>{countName}</p>
            </div>
        </>
    );
};

export default Counter;
