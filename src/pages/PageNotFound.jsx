import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();
    Swal.fire({     /* sweet alert */
        title: "Error 404",
        text: "Page Not Found",
        icon: "error",
        confirmButtonText: "OK",
    }).then(() => {
        navigate("/");  /* redirect */
    });
    return (
        <></>
    )
}

export default PageNotFound