import "../assets/style/Tittle.css";

function Tittle({ text }) {
    return ( 
        <>
            <div className="text-center mt-3 mb-3">
                <h1 className="tittleStyle">{ text }</h1>
            </div>
        </>
     );
}

export default Tittle;