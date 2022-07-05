import "./success.css";
import success from "../../photos/success.gif";

const Success = () => {
    return ( 
        <section className="success__wrapper">
            <div className="success__icon">
                <img src={success} alt="" />
            </div>
            <div className="success__text">
                <h2>Submission Successful!</h2>
                <span>Thank you for your time.</span>
            </div>
        </section>
     );
}
 
export default Success;