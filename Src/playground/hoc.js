import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props) =>(
    <div>
    <h1>Info</h1>
    <p>This is info : {props.info}</p>
    </div>
)

const withAdminWarning=(WrappedComponent) =>{
    return (props) =>(
        <div>
        {props.isAdmin && <p>This is private info.</p>}
        <WrappedComponent {...props}/>
        </div>
    )

}

const requireAuthentication =(WrappedComponent) =>{
    return(props) =>(
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please dont use</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false}  info='This is just a component.'/>,document.getElementById('sds'))
ReactDOM.render(<AuthInfo isAuthenticated={true}  info='This is just a component.'/>,document.getElementById('sds'))

console.log('running');
