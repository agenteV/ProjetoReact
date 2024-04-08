function Form(){
return(
    <>
        <h2 className="contatoH2">Entre em Contato</h2>
        <div className="contato">
            <div className="container">
            <form className="form">
                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Seu nome..." />

                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" placeholder="Digite seu email..." />

                <label htmlFor="message">Mensagem: </label>
                <textarea className="mensagem" name="message" id="message" placeholder="Mensagem..." ></textarea>
                
                <button type="submit" className="registerbtn">Enviar</button>
            </form>
        </div>
        </div>
        
    </>
    
)
}
export default Form;