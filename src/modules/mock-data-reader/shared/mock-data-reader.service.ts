import {fakeDataGenerator} from '../../../swagger/fake-data-generator';
// import XMLParser from 'react-xml-parser';
const XMLParser = require('react-xml-parser');


const sleep = async (timeout: number)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve(null),timeout)
    });
}

export const getJSONData = async () => {
    await sleep(500);
    fakeDataGenerator.resetUsedDataPool();
    const data = fakeDataGenerator.getFakeUserJSON();
    return data.person;
}

export const getXMLData = async () => {
    await sleep(1000);
    const xmlValue = fakeDataGenerator.getFakeUserXML();
    const parsedJSON = new XMLParser().parseFromString(xmlValue);
    return parsedJSON.children.map((person: any)=>{
        return {
            id: person.children[0].value,
            firstName: person.children[1].value,
            lastName: person.children[2].value
        };
    });
}
