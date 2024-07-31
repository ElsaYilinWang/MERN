import react from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS=[
        {id:'u1',
        name:'Elsa Wang',
        image:'https://en.wikipedia.org/wiki/Independent_Olympians_at_the_Olympic_Games',
        places:3
        }

    ];

    return <UsersList items={USERS}/>;
};

export default Users;