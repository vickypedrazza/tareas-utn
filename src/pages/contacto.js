import '../styles/contacto.css'

const ContactoPage = (props) => {
    return (
        <main><section>
        <a name="contacto" id="contacto"></a>
        <form className="formulario">
            <fieldset>
                <legend>Contacto</legend>
                <div className="contenedor-campos">
                    <div className="campo"><label>Nombre</label>
                        <input className="input-text" type="text" placeholder="Tu nombre"/>
                    </div>

                    <div className="campo">
                        <label>Telefono</label>
                        <input className="input-text" type="tel" placeholder="Tu telefono"/>
                    </div>

                    <div className="campo">
                        <label>Correo</label>
                        <input className="input-text" type="email" placeholder="Tu email"/>
                    </div>

                    <div className="campo">
                        <label>Mensajes</label>
                        <textarea className="input-text"></textarea>
                    </div>
                </div>
               
                <div className="alienar-derecha flex">
                    <input className="boton w-100" type="submit" value="Enviar"/>
                </div>

            </fieldset>
        </form>
    </section>
    <div className="holder">
        <h2>INFORMACIÓN DE CONTACTO</h2>

        <p> Montevideo 496 – Piso 9, Ciudad Autónoma de Buenos Aires, República Argentina</p>
        <p>+54 11 4374 4665</p>
        <p>
            prensa@cabb.com.ar</p>
        <p>www.argentina.basketball</p>
    </div></main>
    );
}
export default ContactoPage