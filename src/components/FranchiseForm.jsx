import React from 'react';
import { motion } from 'framer-motion';

const FranchiseForm = () => {
  const inputStyle = {
    width: '100%',
    padding: '20px',
    borderRadius: '12px',
    border: '1px solid #333',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    transition: '0.3s'
  };

  const focusStyle = (e) => {
    e.target.style.borderColor = '#1CAAD9';
    e.target.style.backgroundColor = '#1a1a1a';
  }

  const blurStyle = (e) => {
    e.target.style.borderColor = '#333';
    e.target.style.backgroundColor = '#111';
  }

  return (
    <section id="franchise" style={{ backgroundColor: '#0a0a0a', color: '#fff', padding: '120px 20px', position: 'relative' }}>
      
      {/* Detalhe visual de fundo */}
      <div style={{ position: 'absolute', right: 0, top: '20%', width: '300px', height: '600px', background: 'linear-gradient(to bottom, #1CAAD9, transparent)', opacity: 0.05, filter: 'blur(80px)' }} />

      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '48px', lineHeight: '1.2', marginBottom: '20px' }}>
            SEJA UM FRANQUEADO <br />
            <span style={{ color: '#1CAAD9' }}>NEW SHOES</span>
          </h2>
          <p style={{ color: '#666', fontSize: '18px' }}>Preencha o formulário abaixo e receba nossa apresentação comercial.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <input type="text" placeholder="Nome" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
            <input type="text" placeholder="Sobrenome" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          
          <input type="email" placeholder="E-mail corporativo" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
          <input type="tel" placeholder="Whatsapp com DDD" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
             <input type="text" placeholder="Cidade" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
             <input type="text" placeholder="Estado" style={inputStyle} onFocus={focusStyle} onBlur={blurStyle} />
          </div>
          
          <select style={{ ...inputStyle, cursor: 'pointer' }} onFocus={focusStyle} onBlur={blurStyle}>
            <option value="" disabled selected>Capital Disponível para Investimento</option>
            <option value="220-250">R$ 220.000 - R$ 250.000</option>
            <option value="250-300">R$ 250.000 - R$ 300.000</option>
            <option value="300+">Acima de R$ 300.000</option>
          </select>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: '#fff', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              backgroundColor: '#1CAAD9', 
              color: '#fff', 
              padding: '25px', 
              borderRadius: '12px', 
              border: 'none', 
              fontSize: '18px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              marginTop: '20px',
              fontFamily: 'Space Grotesk',
              letterSpacing: '1px'
            }}
          >
            SOLICITAR APRESENTAÇÃO
          </motion.button>
        </form>

        <p style={{ textAlign: 'center', color: '#444', fontSize: '12px', marginTop: '30px' }}>
          Seus dados estão seguros. Ao enviar, você concorda com nossa política de privacidade.
        </p>

      </div>
    </section>
  );
};

export default FranchiseForm;