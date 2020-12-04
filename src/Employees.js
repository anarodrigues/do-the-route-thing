import Employee from './Employee.js';

const Employees = () => {
    return (
        <section className="employeesBox">
        <Employee
            name="Eeyore"
            description="Eeyore is a character in the Winnie-the-Pooh books by A. A. Milne. He is generally characterized as a pessimistic, gloomy, depressed, anhedonic, old grey stuffed donkey who is a friend of the title character, Winnie-the-Pooh."
            fig="https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-1dm69u9_4c7a4236.jpeg?region=0%2C0%2C600%2C600"
        />
        <Employee
            name="Pooh"
                description="Winnie-the-Pooh, also called Pooh Bear and Pooh, is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard."
            fig="https://lumiere-a.akamaihd.net/v1/images/open-uri20160811-32147-cd72yq_7d7c172f.jpeg?region=0%2C0%2C600%2C600"
            />

            <Employee
                name="Piglet"
                description="Piglet is a fictional character from A. A. Milne's Winnie‑the‑Pooh books. Piglet is Winnie‑the‑Pooh's closest friend amongst all the toys and animals featured in the stories. Although he is a Very Small Animal of a generally timid disposition, he tries to be brave and on occasion conquers his fears. "
                fig="https://lumiere-a.akamaihd.net/v1/images/9e259a68c3fceb6265860399bfc98fb56e098960.jpeg?region=0,0,600,600"
            />
            </section>
    )
}

export default Employees;