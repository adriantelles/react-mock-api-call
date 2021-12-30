import './MockDataReader.component.scss';
import {getJSONData, getXMLData} from "../shared/mock-data-reader.service";
import {useState} from "react";
import {User} from "../shared/mock-data-reader.type";

const MockDataReader = ()=>{
    const [userData, setUserData] = useState<Array<User>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getMockData = async ()=>{
        try{
            setIsLoading(true);
            const [dataFromFirstService, dataFromSecondService] = await Promise.all([getJSONData(), getXMLData()]);
            const finalData = [...dataFromFirstService, ...dataFromSecondService].sort(({id}, {id: id2})=> id - id2);
            setUserData(finalData);
        } catch(e){
            window.alert('Error in getting the data.');
        }
        setIsLoading(false);
    }

    const renderUserList = ()=>{
        return <section className='data-list'>
            {userData.map((user) => {
                return <div className='user-item' key={user.id}>
                    <div className='user-id'>
                        {user.id}
                    </div>
                    <div className='user-first-name'>
                        {user.firstName}
                    </div>
                    <div className='user-last-name'>
                        {user.lastName}
                    </div>
                </div>
            })}
        </section>
    }

    return <div className='mock-data-reader'>
        <h1>
            Mock data reader
        </h1>
        <section className='button-container' >
            <button onClick={getMockData} disabled={isLoading}>Get Data</button>
        </section>
        {renderUserList()}
    </div>
}

export default MockDataReader;
