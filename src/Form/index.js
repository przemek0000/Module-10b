import "./style.css"
import { useState } from "react";
import worldCurrencies from "../worldCurrencies";

const Form = ({ calculateResult }) => {
    const min = 0;

    const [value, setValue] = useState('');
    const [currency, setCurrency] = useState(worldCurrencies[0].label);

    const setMinNumber = ({ target }) => {
        const value = Math.max(min, Number(target.value))

        setValue(value);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(value, currency);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__title">
                    PLN
                </legend>
                <p>
                    <label>
                        <span className="form__label">
                            Wybierz walute:
                        </span>
                        <select className="form__select"
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}>
                            {
                                worldCurrencies.map(worldCurrencie => (
                                    <option
                                        key={worldCurrencie.value}
                                        value={worldCurrencie.value}>
                                        {worldCurrencie.label}
                                    </option>
                                ))}
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__label">
                            Wprowadź wartość:
                        </span>
                        <input className="form__value"
                            name="input"
                            value={value}
                            onChange={setMinNumber}
                            type="number"
                            min="0"
                            step="any"
                            placeholder="Wprowadź wartość"
                            autoFocus />
                    </label>
                </p>
                <p>
                    <button className="form__button" name="button">Przelicz</button>
                </p>
            </fieldset>
        </form>
    )
}

export default Form;