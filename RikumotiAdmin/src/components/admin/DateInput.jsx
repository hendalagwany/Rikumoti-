import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateInput({ label, value, onChange }) {
    return (
        <div className={`floating-field date-field ${value ? "has-value" : ""}`}>

            <DatePicker
                selected={value ? new Date(value) : null}
                onChange={(date) =>
                    onChange(
                        date
                            ? date.toISOString().split("T")[0]
                            : ""
                    )
                }
                dateFormat="dd-MM-yyyy"
                className="date-picker-input"
            />
            <label>{label}</label>
        </div>
    )
}

export default DateInput;