
const Employee = ({ name, description, fig }) => {
    return (
        <section className="employee">
            <h3>{name}</h3>
            <p>{description}</p>
            <img src={fig} alt="Employee."/>
        </section>
    )
}

export default Employee;