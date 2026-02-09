import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const franchisesData = [
  { id: 1, state: 'MA', city: 'São Luís', name: 'Shopping da Ilha', address: 'Av. Daniel de La Touche, 987', phone: '(98) 99999-9999' },
  { id: 2, state: 'SC', city: 'Joinville', name: 'Garten Shopping', address: 'Av. Rolf Wiest, 333', phone: '(47) 99999-9999' },
  { id: 3, state: 'SP', city: 'São Paulo', name: 'Oscar Freire', address: 'Rua Oscar Freire, 100', phone: '(11) 99999-9999' },
  { id: 4, state: 'SC', city: 'Florianópolis', name: 'Beiramar Shopping', address: 'Rua Bocaiúva, 2468', phone: '(48) 99999-9999' }
];

const FranchiseLocator = () => {
  const [selectedState, setSelectedState] = useState('');
  
  const filtered = selectedState === '' 
    ? franchisesData 
    : franchisesData.filter(f => f.state === selectedState);

  return (
    // Mudei o fundo para #F5F5F7 (Cinza claro) para destacar os cards brancos
    <section id="locator" style={{ padding: '100px 20px', backgroundColor: '#F5F5F7' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '42px', fontWeight: '700', marginBottom: '10px', color: '#000' }}>
            NOSSAS UNIDADES
          </h2>
          <p style={{ color: '#666', fontSize: '18px' }}>Selecione sua região e venha nos visitar.</p>
        </div>

        {/* Filtro Estilizado */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px', position: 'relative' }}>
          <div style={{ position: 'relative', minWidth: '300px' }}>
            <select 
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              style={{
                width: '100%',
                padding: '20px', 
                borderRadius: '16px', 
                border: '1px solid #d1d1d1', 
                backgroundColor: '#fff',
                fontSize: '16px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
                color: '#000', 
                cursor: 'pointer',
                outline: 'none',
                appearance: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <option value="">Todas as Unidades</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="MA">Maranhão</option>
            </select>

            <ChevronDown 
              size={20} 
              color="#000" 
              style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} 
            />
          </div>
        </div>

        <motion.div 
          layout 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}
        >
          <AnimatePresence mode='popLayout'>
            {filtered.length > 0 ? (
              filtered.map(unit => (
                <motion.div 
                  key={unit.id} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                  style={{ 
                    backgroundColor: '#fff', 
                    padding: '40px', 
                    borderRadius: '24px', 
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)', 
                    border: '1px solid #fff', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '20px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div>
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: 'bold', 
                        color: '#1CAAD9', 
                        backgroundColor: 'rgba(28, 170, 217, 0.1)', 
                        padding: '6px 12px', 
                        borderRadius: '20px',
                        textTransform: 'uppercase'
                      }}>
                        {unit.state}
                      </span>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '24px', fontWeight: 'bold', marginTop: '15px', color: '#000' }}>
                        {unit.name}
                      </h3>
                      <p style={{ color: '#999', fontSize: '14px', marginTop: '5px' }}>{unit.city}</p>
                    </div>
                  </div>
                  
                  <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: '20px', color: '#555', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <MapPin size={20} color="#1CAAD9" />
                        <span style={{ fontSize: '15px', fontWeight: '500' }}>{unit.address}</span>
                     </div>
                     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <Phone size={20} color="#1CAAD9" />
                        <span style={{ fontSize: '15px', fontWeight: '500' }}>{unit.phone}</span>
                     </div>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ 
                      marginTop: 'auto', 
                      backgroundColor: '#000', 
                      color: '#fff', 
                      padding: '18px', 
                      borderRadius: '16px', 
                      border: 'none', 
                      cursor: 'pointer', 
                      fontWeight: 'bold', 
                      fontSize: '14px',
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontFamily: 'Inter, sans-serif'
                    }}
                  >
                    VER PÁGINA DA LOJA <ArrowRight size={18} />
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#999' }}
              >
                <p>Nenhuma unidade encontrada nesta região.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default FranchiseLocator;