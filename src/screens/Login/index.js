import React, { useState, useEffect } from 'react'
import './styles.css'

const Login = () => {
    const [employees, setEmployees] = useState([])
    const [ spinner, setSpinner ] = useState(true);     
    
    const fetchFromDatabase = async () => {
        await fetch("http://dummy.restapiexample.com/api/v1/employees").then(res => {
            return res.json()
        }).then(res => {
            setSpinner(false)
            setEmployees(res.data)
            
        })
    }

    useEffect(() => {  
        fetchFromDatabase()
    }, [])

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Age</th>
                    </tr>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {spinner && <p>Loading ...</p>}
        </div>
    )
}

export default Login
