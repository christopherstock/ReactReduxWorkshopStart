
    // specify the application title
    const APPLICATION_TITLE = "React Task List";

    // set page title
    document.title = APPLICATION_TITLE;

    // reference the main container
    let mainContainer = document.getElementById( "mainContainer" );

    // render the App component into the main container
    ReactDOM.render(
        <App
            title={ APPLICATION_TITLE }
        />,
        mainContainer
    );
