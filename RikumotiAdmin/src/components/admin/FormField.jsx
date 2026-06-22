import DateInput from "./DateInput";

function FormField({ field, value, onChange }) {
    if (field.type === "date") {
        return (
            <DateInput
                label={field.label}
                value={value}
                onChange={(date) =>
                    onChange({
                        target: {
                            name: field.key,
                            value: date
                        }
                    })
                }
            />
        );
    }

    if (field.type === "textarea") {
        return (
            <div className="floating-field textarea-field">
                <textarea
                    placeholder=" "
                    name={field.key}
                    value={value || ""}
                    onChange={onChange}
                />
                <label>{field.key}</label>
            </div>
        );
    }

    return (
        <div className="floating-field">
            <input
                placeholder=" "
                name={field.key}
                value={
                    field.type === "tags" && Array.isArray(value)
                        ? value.join(", ")
                        : value || ""
                }
                type="text"
                onChange={onChange}
            />
            <label>{field.key}</label>
        </div>
    );
}

export default FormField;