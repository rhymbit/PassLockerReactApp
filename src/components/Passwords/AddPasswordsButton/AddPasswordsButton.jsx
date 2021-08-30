import React, { useState } from "react";
import PasswordsInputBox from "../PasswordsForm/PasswordsInputBox";
import AddButton from "./AddButton";

export default function AddPasswordsButton() {

  const [newInput, setNewInput] = useState(false)

  return (
    <>
      {
        newInput ?
          <>
            <PasswordsInputBox 
              domain="" 
              password="" 
              isNewInput="true" 
              setNewInput={setNewInput}
            />
          </>
        :
          <AddButton setNewInput={setNewInput} />
      }
    </>
  )

}