
function Cards(){
return(
    <>
    <center>
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front-vitor">
            <img src="" alt="" />
        </div>
        <div className="flip-card-back">
            <h1>Vitor D</h1>
            <p>17 anos</p>
            <p>Sou um pequeno desenvolvedor que tem um grande sonho em se tornar um programador de sucesso</p>
        </div>
    </div>
</div>
<div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front-mateus">
                <img className="imagem2" src="" alt="" />
            </div>
        <div className="flip-card-back">
        <h1>Mateus D</h1>
        <p>17 anos</p>
        <p>Meu sonho é ser alguém de sucesso no ramo de tecnologia.</p>
        </div>
    </div>
    </div>

    <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front-raul">
                <img src="" alt="" />
            </div>
        <div class="flip-card-back">
        <h1>Raul</h1>
        <p>17 anos</p>
        <p>Estudo na Fiap a muito tempo então sempre estive em contato com tecnologia, e decidi seguir na área.</p>
        </div>
    </div>
    </div>
    </center>
</>
)
}
export default Cards;