
    /*******************************************************************************************************************
    *   The entire application component.
    *   This is an example for a stateful component.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class App extends React.Component
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
                taskList: [
                    "Milch kaufen",
                    "Brownies backen",
                    "Wäsche waschen",
                    "Workshop vorbereiten",
                ],
            }
        }

        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "App.render() being invoked" );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput
                    onTaskCreate={ ( newTask ) => this.createTask( newTask ) }
                />

                { /* task list */ }
                <TaskList
                    taskList={ this.state.taskList }
                    onTaskDelete={   ( taskIndex ) => this.deleteTask(   taskIndex ) }
                    onTaskMoveUp={   ( taskIndex ) => this.moveTaskUp(   taskIndex ) }
                    onTaskMoveDown={ ( taskIndex ) => this.moveTaskDown( taskIndex ) }
                />

            </div>;
        }

        /***************************************************************************************************************
        *   Creates a new task in the TaskList component.
        *
        *   @param {string} taskName The name of the task to create.
        ***************************************************************************************************************/
        createTask( taskName )
        {
            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.push( taskName );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Deletes the task with the specified index.
        *
        *   @param {number} taskIndex The index of the task to delete.
        ***************************************************************************************************************/
        deleteTask( taskIndex )
        {
            // copy original array
            let newTaskList = this.state.taskList.slice();
            newTaskList.splice( taskIndex, 1 );

            // set new state forcing the component to re-render
            this.setState(
                {
                    taskList: newTaskList,
                }
            )
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index up.
        *
        *   @param {number} taskIndex The index of the task to move up.
        ***************************************************************************************************************/
        moveTaskUp( taskIndex )
        {
            if ( taskIndex > 0 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveUp   = newTaskList[ taskIndex     ];
                let taskToMoveDown = newTaskList[ taskIndex - 1 ];

                newTaskList[ taskIndex - 1 ] = taskToMoveUp;
                newTaskList[ taskIndex     ] = taskToMoveDown;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }

        /***************************************************************************************************************
        *   Moves the task with the specified index down.
        *
        *   @param {number} taskIndex The index of the task to move down.
        ***************************************************************************************************************/
        moveTaskDown( taskIndex )
        {
            if ( taskIndex < this.state.taskList.length - 1 )
            {
                // copy original array
                let newTaskList = this.state.taskList.slice();

                let taskToMoveDown = newTaskList[ taskIndex     ];
                let taskToMoveUp   = newTaskList[ taskIndex + 1 ];

                newTaskList[ taskIndex + 1  ] = taskToMoveDown;
                newTaskList[ taskIndex      ] = taskToMoveUp;

                // set new state forcing the component to re-render
                this.setState(
                    {
                        taskList: newTaskList,
                    }
                )
            }
        }
    }
