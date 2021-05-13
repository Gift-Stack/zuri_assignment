# zuri_assignment

![example](https://user-images.githubusercontent.com/72243506/118078934-fb110000-b36b-11eb-9945-bfb1c418cf9e.png)

## Overview

This API allows CRUD functionalities (create,reads,updates and deletes) for
implementation, manipulation and storage of informations for work and future
purposes

**Query abilities:** Before digging in, it's important to know that the API is
focused on relevance.

> Tools and libraries

| **JavaScript** | Clients | SDK/Libraries | Tools                                |
| -------------- | ------- | ------------- | ------------------------------------ |
| **/ Node.js**  | **--**  | **--**        | [Express.js](https://expressjs.com/) |

> OpenAPI specification

Use this specification to exercise the API with tools like Postman, the visual
REST client or VS Code Thunder client "Extension"

-   / POST

    -   The POST request is hit on the endpoint
        ['zuri-assignment.herokuapp.com/'](zuri-assignment.herokuapp.com/) to
        "CREATE" the necessary data.

        _**NB:** The required data consists {name,email,country}_

        If email has been registered, this would cause an error to be thrown

        If all goes right, the data passed in would be returned as a response
        with a success message as shown above.

-   / GET

    -   The GET request is hit on the
        ['zuri-assignment.herokuapp.com/'](zuri-assignment.herokuapp.com/) to
        "READ" the data already stored in the database.

        **Due to unavailability of any third party authentication, the email is
        needed to be sent as body data to the REST client like POSTMAN or from
        your actual client application like React App to verify whose or which
        data is needed to be read**

        This helps prevent you reading others data and vise versa

        _Food for thought; Copy and save your **user id** somewhere cause that
        is needed to update your data_

-   / PUT
-   / DELETE

> URL

A command-line tool (CLI) for interacting with this API requires Node runtime
