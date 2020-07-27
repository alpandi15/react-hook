import React, { forwardRef, useImperativeHandle } from 'react'

const Input = forwardRef((props, ref) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setValue(e.target.value)
    setError("");
    props.onChange(e.target.name, e.target.value)
  }
  const validate = () => {
    //return true if is valid
    //else return false

    if (props.validation) {
      const rules = props.validation.split("|");

      for (let i = 0; i < rules.length; i++) {
        const current = rules[i];

        if (current === "email") {
          if (!/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            setError("Please using email format");
            return false
          }
        }
        if (current === "required") {
          if (!value) {
            setError("This field is required");
            return false
          }
        }

        const pair = current.split(":")
        switch (pair[0]) {
          case "min":
            if (value.length < pair[1]) {
              setError(`This field must be at least ${pair[1]} charactesr long`);
              return false
            }
            break;
          case "max":
            if (value.length > pair[1]) {
              setError(`This field must be no longer than ${pair[1]} charactesr long`);
              return false;
            }
            break;
          default:
            break;
        }
      }
    }

    return true;
  }
  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <>
      <div>
        {error && (
          <small className="text-danger">{error}</small>
        )}
      </div>
      <div>
        <input
            className={error ? `${props.className} is-invalid` : props.className}
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
            onChange={(e) => handleChange(e)}
            autoComplete={props.autoComplete}
            value={props.value ? props.value : value}
        />
      </div>
    </>
  )
})

Input.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off",
    validation: ""
  }


export default Input
