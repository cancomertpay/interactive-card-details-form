import React, { useContext, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { CardContext } from "../store/CardContext";
import DateInput from "./UI/DateInput";

function Form() {
  const {
    setHolderName,
    setCardNumber,
    setCvc,
    setExpDate,
    setError,
    setSuccess,
    holderName,
    cardNumber,
    cvc,
    expDate,
    error,
  } = useContext(CardContext);

  const resetError = (id) => {
    setError((prev) => prev.filter((item) => item.fieldId !== id));
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "holderName":
        if (e.target.value.length <= 20) {
          setHolderName(e.target.value);
          resetError(e.target.id);
        }
        break;
      case "cardNumber":
        if (e.target.value.length <= 16) {
          setCardNumber(e.target.value);
          resetError(e.target.id);
        }
        break;
      case "date-MM":
        if (
          e.target.value.length <= 2 &&
          +e.target.value <= 12 &&
          +e.target.value > -1
        ) {
          setExpDate((prev) => ({
            ...prev,
            MM: e.target.value,
          }));
          resetError(e.target.id);
        }
        break;
      case "date-YY":
        if (e.target.value.length <= 2) {
          setExpDate((prev) => ({
            ...prev,
            YY: e.target.value,
          }));
          resetError(e.target.id);
        }
        break;
      case "cvc":
        if (e.target.value.length <= 3) {
          setCvc(e.target.value);
          resetError(e.target.id);
        }
        break;

      default:
        break;
    }
  };

  const todaysYear = new Date().getUTCFullYear();

  const parsedYear = todaysYear.toString().slice(-2);

  const handleBlur = (e) => {
    const fieldId = e.target.id;
    switch (fieldId) {
      case "holderName":
        if (!/^[a-zA-Z\s]*$/.test(e.target.value)) {
          setError((prev) => {
            const existingError = prev.find(
              (error) => error.fieldId === e.target.id
            );
            if (existingError) {
              return prev;
            }
            return [
              ...prev,
              {
                fieldId: e.target.id,
                hasError: true,
                message: "Wrong format, only letters allowed",
              },
            ];
          });
        } else if (e.target.value === "") {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be blank",
            },
          ]);
        } else if (e.target.value.length < 6) {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Must be minimum 6 characters",
            },
          ]);
        }
        break;
      case "cardNumber":
        if (isNaN(+e.target.value)) {
          setError((prev) => {
            const existingError = prev.find(
              (error) => error.fieldId === e.target.id
            );
            if (existingError) {
              return prev;
            }

            return [
              ...prev,
              {
                fieldId: e.target.id,
                hasError: true,
                message: "Wrong format, only numbers allowed",
              },
            ];
          });
        } else if (e.target.value === "") {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be blank",
            },
          ]);
        } else if (e.target.value.length < 16) {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Must be 16 numbers",
            },
          ]);
        }
        break;
      case "date-MM":
        if (isNaN(+e.target.value)) {
          setError((prev) => {
            const existingError = prev.find(
              (error) => error.fieldId === e.target.id
            );
            if (existingError) {
              return prev;
            }

            return [
              ...prev,
              {
                fieldId: e.target.id,
                hasError: true,
                message: "Wrong format, only numbers allowed",
              },
            ];
          });
        } else if (e.target.value === "") {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be blank",
            },
          ]);
        }
        break;
      case "date-YY":
        if (isNaN(+e.target.value)) {
          setError((prev) => {
            const existingError = prev.find(
              (error) => error.fieldId === e.target.id
            );
            if (existingError) {
              return prev;
            }

            return [
              ...prev,
              {
                fieldId: e.target.id,
                hasError: true,
                message: "Wrong format, only numbers allowed",
              },
            ];
          });
        } else if (e.target.value === "") {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be blank",
            },
          ]);
        } else if (+e.target.value < parsedYear) {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be in the past",
            },
          ]);
        }
        break;
      case "cvc":
        if (isNaN(+e.target.value)) {
          setError((prev) => {
            const existingError = prev.find(
              (error) => error.fieldId === e.target.id
            );
            if (existingError) {
              return prev;
            }

            return [
              ...prev,
              {
                fieldId: e.target.id,
                hasError: true,
                message: "Wrong format, only numbers allowed",
              },
            ];
          });
        } else if (e.target.value === "") {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Can't be blank",
            },
          ]);
        } else if (e.target.value.length < 3) {
          setError((prev) => [
            ...prev.filter((error) => error.fieldId !== e.target.id),
            {
              fieldId: e.target.id,
              hasError: true,
              message: "Must be 3 numbers",
            },
          ]);
        }
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (holderName.trim() === "") {
      setError((prev) => [
        ...prev.filter((error) => error.fieldId !== "holderName"),
        {
          fieldId: "holderName",
          hasError: true,
          message: "Can't be blank",
        },
      ]);
      return;
    }
    if (cardNumber.trim() === "") {
      setError((prev) => [
        ...prev.filter((error) => error.fieldId !== "cardNumber"),
        {
          fieldId: "cardNumber",
          hasError: true,
          message: "Can't be blank",
        },
      ]);
      return;
    }
    if (expDate.MM.trim() === "") {
      setError((prev) => [
        ...prev.filter((error) => error.fieldId !== "date-MM"),
        {
          fieldId: "date-MM",
          hasError: true,
          message: "Can't be blank",
        },
      ]);
      return;
    }
    if (expDate.YY.trim() === "") {
      setError((prev) => [
        ...prev.filter((error) => error.fieldId !== "date-YY"),
        {
          fieldId: "date-YY",
          hasError: true,
          message: "Can't be blank",
        },
      ]);
      return;
    }
    if (cvc === "") {
      setError((prev) => [
        ...prev.filter((error) => error.fieldId !== "cvc"),
        {
          fieldId: "cvc",
          hasError: true,
          message: "Can't be blank",
        },
      ]);
      return;
    }
    setSuccess(true);
  };

  const dateMMErrorMsg = error
    .filter((error) => error.fieldId === "date-MM")
    .map((item) => item.message);
  const dateYYErrorMsg = error
    .filter((error) => error.fieldId === "date-YY")
    .map((item) => item.message);

  const handleDateErrorMsg = () => {
    if (dateMMErrorMsg.length > 0) {
      return <p className="error-msg">{dateMMErrorMsg}</p>;
    } else if (dateYYErrorMsg.length > 0) {
      return <p className="error-msg">{dateYYErrorMsg}</p>;
    }
  };
  console.log(dateMMErrorMsg);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        id={"holderName"}
        label={"Cardholder Name"}
        placeholder={"e.g Jane Appleseed"}
        type={"text"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={holderName}
      />
      <Input
        id={"cardNumber"}
        label={"Card Number"}
        placeholder={"e.g 1234 5678 9123 0000"}
        type={"text"}
        onChange={handleChange}
        onBlur={handleBlur}
        value={cardNumber}
      />
      <div className="date_cvc-container relative">
        <div className="flex-box exp-date-container">
          <label htmlFor="date-MM" className="input-label">
            EXP. DATE (MM/YY)
          </label>
          <div className="exp-input-group">
            <DateInput
              id={"date-MM"}
              placeHolder={"MM"}
              className="date-input input"
              onChange={handleChange}
              onBlur={handleBlur}
              value={expDate.MM}
            />
            <DateInput
              id={"date-YY"}
              placeHolder={"YY"}
              className="date-input input"
              onChange={handleChange}
              onBlur={handleBlur}
              value={expDate.YY}
            />
          </div>
          {handleDateErrorMsg()}
        </div>
        <div className="flex-box cvc-container">
          <label htmlFor="cvc" className="input-label">
            CVC
          </label>
          <DateInput
            id={"cvc"}
            placeholder="e.g. 123"
            className="date-input last-input input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={cvc}
          />
        </div>
      </div>
      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
