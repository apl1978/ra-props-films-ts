import {Star} from '../Star'

export const Stars = ({count}: number) => {

    const isValid = count > 0 && count < 6;
    const starsArray = Array(count).fill(0);

    return isValid ? (
            <ul className="card-body-stars u-clearfix">
                {starsArray.map((el, index: number) => (
                    <li key={index}>
                        <Star/>
                    </li>
                ))}
            </ul>
        )
        : null;
}