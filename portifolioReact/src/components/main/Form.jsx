function Form(){
return(
    <div className="Forms">
        <h2 className="h2Forms">Entre em Contato</h2>
        <div className="container">
            <form>
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Seu nome..." />

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" placeholder="Digite seu email..." />

                <label htmlFor="message">Mensagem: </label>
                <textarea name="message" id="message" placeholder="Mensagem..." cols="30" rows="10"></textarea>

                <button type="submit" className="registerbtn">Enviar</button>
            </form>
        </div>
    </div>
)
}
export default Form;