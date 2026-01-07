import { useState } from 'react';

function FeedbackForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !comentario.trim()) {
      alert('Por favor, preencha todos os campos antes de enviar.');
      return;
    }
    alert(
      `Obrigado pelo feedback!\n\nNome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`
    );
    setNome('');
    setEmail('');
    setComentario('');
  };

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="form-field">
          <label htmlFor="comentario">Comentário</label>
          <textarea
            id="comentario"
            rows={4}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escreva seu comentário"
          />
        </div>

        <button className="submit-button" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
