function Habilidades(){
return(
    <div className="Habilidades">
        <h2>Nossas Habilidades</h2>
        <table>
            <tr>
                <th>Habilidades de Cada Integrante</th>
                <th>HTML</th>
                <th>CSS</th>
                <th>JS</th>
            </tr>

            <tr>
            <td>Mateus</td>
                <td><i className="fa fa-check"></i></td>
                <td><i className="fa fa-check"></i></td>
                <td><i className="fa fa-remove"></i></td>
            </tr>
            <tr>
            <td>Raul</td>
                <td><i className="fa fa-check"></i></td>
                <td><i className="fa fa-remove"></i></td>
                <td><i className="fa fa-check"></i></td>
            </tr>
            <tr>
            <td>Vitor</td>
                <td><i className="fa fa-check"></i></td>
                <td><i className="fa fa-remove"></i></td>
                <td><i className="fa fa-check"></i></td>
            </tr>
        </table>
    </div>
    
)
}
export default Habilidades;