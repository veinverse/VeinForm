import "./dbView.css";

const DBView = ({ columns, data }) => {
    return ( 
        <div className="table__wrapper">
            <h1 className="main__title">VeinForm</h1>
            <h2 className="table__title">Survey Responses</h2>
            <hr />
            <div className="table__container">
                <table>
                    <thead>
                        <tr>
                            {columns.map((head) => (<th>{head.question}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr>
                                {columns.map((col) => (
                                    <td>{row[col.ID]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default DBView;