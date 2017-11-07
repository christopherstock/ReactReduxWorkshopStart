
    /*******************************************************************************************************************
    *   Represents the input component that lets the user create new tasks.
    *   This is an example for a stateful and controlled component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class TaskInput extends React.Component
    {
        /***************************************************************************************************************
        *   Initializes this component by setting the initial state.
        *
        *   @param {Object} props The initial properties being passed in the component tag.
        ***************************************************************************************************************/
        constructor( props )
        {
            super( props );

            this.state = {
                inputError: false,
                inputText:  "",
            }
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "TaskInput.render() being invoked" );

            return <form onSubmit={ ( event ) => { this.onFormSubmit( event ); } }>

                { /* new task input */ }
                <input
                    id="newTask"
                    type="text"
                    maxLength="50"
                    className={ this.state.inputError ? "input error" : "input" }
                    value={     this.state.inputText }
                    onChange={  ( event ) => { this.onInputChange( event ); } }
                />

                <br />

                { /* new task button */ }
                <input
                    id="submitButton"
                    type="submit"
                    value="Create Task"
                    className="button"
                />

            </form>;
        }

        /***************************************************************************************************************
        *   Being invoked when the input field value changes.
        *
        *   @param {Event} event The event when the input field value changes.
        ***************************************************************************************************************/
        onInputChange( event )
        {
            this.setState(
                {
                    inputError: false,
                    inputText:  event.target.value,
                }
            );
        }

        /***************************************************************************************************************
        *   Being invoked when the form is submitted.
        *
        *   @param {Event} event The form submission event.
        ***************************************************************************************************************/
        onFormSubmit( event )
        {
            // suppress page reload
            event.preventDefault();

            // trim entered text
            let enteredText = this.state.inputText.trim();

            // check entered text
            if ( enteredText.length === 0 )
            {
                // set error state
                this.setState(
                    {
                        inputError: true,
                        inputText:  "",
                    }
                );
            }
            else
            {
                // clear error state
                this.setState(
                    {
                        inputError: false,
                        inputText:  "",
                    }
                );

                // invoke parent listener
                this.props.onTaskCreate( enteredText );
            }
        };
    }
