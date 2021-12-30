Write a simple JavaScript application which does the following in any framework or JS libraries (NodeJS, Angular, React, Vue) of your choice. You can use a local file / dyson / fakejson / any of your choice to mock the rest calls. The application has to fetch data from 2 different rest API services.
Both the APIs return id, firstName, lastName in an array format. 
One of the API - API1 returns JSON and takes 5 seconds to return the response.
Another API2 returns XML and takes takes 10 seconds.

Once the response comes back, the data needs to be merged from both the APIs and sorted based on id. Both the APIs are independent and there is no order in calling the APIs. The code that you implement should be modular, should follow good coding practices, should be optimally designed and should be performance effective.

JSON return:
{
    "person": [
        {
            "id": 10,
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "id": 5,
            "firstName": "Jack",
            "lastName": "Doe"
        },
        {
            "id": 7,
            "firstName": "James",
            "lastName": "Doe"
        }
    ]
}

XML return:
<persons>
    <person>
        <id>3 < /id>
        < firstName > Jen < /firstName>
        < lastName > Doe < /lastName>
    < /person>
    < person >
        <id>6 < /id>
        < firstName > Stephanie < /firstName>
        < lastName > Joe < /lastName>
    < /person>
    < person >
        <id>1 < /id>
        < firstName > Victoria < /firstName>
        < lastName > Doe < /lastName>
    < /person>
< /persons>
