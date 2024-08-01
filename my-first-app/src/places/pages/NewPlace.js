import React, { useCallback } from "react";

import { VALIDATOR_REQUIRE } from "../../util/validators";
import Input from "../../shared/components/FormElements/input";
import './NewPlace.css';
import { VALIDATOR_MINLENGTH } from "../../shared/util/validators";

const NewPlace = () => {

    const titleInputHandler = useCallback((id, value, isValid) => {}, []);
    const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

    return <form className="place-form">
        <Input 
        id="title"
        element="input" 
        type="text" 
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={titleInputHandler}/>

        <Input 
        id="description"
        element="textarea" 
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        onInput={descriptionInputHandler}/>
    </form>
};

export default NewPlace;