import React from 'react';
import {Link} from 'react-router-dom';

const DoesNotExist = ()=>(
    <h1>
    ERROR 404: NOT FOUND!
    <Link to="/" > Go home</Link>
    </h1>
    )

export default DoesNotExist;