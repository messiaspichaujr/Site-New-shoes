import React from 'react';
import { Award, Headphones, BookOpen, Layers, Cpu, TrendingUp, Map, Layout, LayoutDashboard, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnim = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
  };

  const items = [
    { icon: <Award size={32} />, title: "Aprovação ABF", desc: "Primeira do Brasil no segmento." },
    { icon: <Headphones size={32} />, title: "Suporte Premium", desc: "Consultoria contínua para você." },
    { icon: <BookOpen size={32} />, title: "Treinamento", desc: "Universidade corporativa completa." },
    { icon: <Layers size={32} />, title: "Processos", desc: "Metodologia exclusiva testada." },
    { icon: <Cpu size={32} />, title: "Tecnologia", desc: "Equipamentos de última geração." },
    { icon: <TrendingUp size={32} />, title: "Retorno Rápido", desc: "ROI otimizado para o franqueado." },
  ];

  return (
    <section id="benefits" style={{ padding: '120px 20px', backgroundColor: '#f5f5f5', position: 'relative' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Título com fonte nova */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '48px', fontWeight: '700', marginBottom: '10px' }}>
            POR QUE A <span style={{ color: '#1CAAD9' }}>NEW SHOES?</span>
          </h2>
          <p style={{ color: '#666', fontSize: '18px' }}>Inovação e segurança para o seu investimento.</p>
        </motion.div>
        
        {/* Grid de Cards Animados */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '100px'
          }}
        >
          {items.map((item, index) => (
            <motion.div 
              key={index} 
              variants={itemAnim}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              style={{ 
                backgroundColor: '#fff', 
                padding: '40px', 
                borderRadius: '24px', 
                border: '1px solid rgba(0,0,0,0.05)',
                cursor: 'default'
              }}
            >
              <div style={{ 
                backgroundColor: '#1CAAD9', 
                width: '60px', height: '60px', 
                borderRadius: '16px', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', marginBottom: '20px'
              }}>
                {item.icon}
              </div>
              <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '24px', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#888', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bloco de Investimento Destaque */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)', 
            borderRadius: '40px', 
            padding: '80px', 
            color: '#fff',
            display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Efeito de brilho no fundo */}
          <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '500px', height: '500px', background: '#1CAAD9', filter: 'blur(150px)', opacity: 0.2, borderRadius: '50%' }} />

          <div style={{ flex: 1, minWidth: '300px', zIndex: 1 }}>
            <h3 style={{ fontFamily: 'Space Grotesk', fontSize: '36px', marginBottom: '30px' }}>Estrutura & Suporte</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: <Map />, text: "Auxílio na busca do ponto" },
                { icon: <Layout />, text: "Projeto Arquitetônico" },
                { icon: <LayoutDashboard />, text: "Software de Gestão Próprio" }
              ].map((it, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle color="#1CAAD9" size={20} />
                  <span style={{ fontSize: '18px' }}>{it.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'right', minWidth: '300px', zIndex: 1 }}>
            <p style={{ fontSize: '14px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase' }}>Investimento Inicial</p>
            <motion.h2 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ fontFamily: 'Space Grotesk', fontSize: '64px', color: '#1CAAD9', fontWeight: '700', margin: '10px 0' }}
            >
              210k
            </motion.h2>
            <p style={{ fontSize: '16px', color: '#666' }}>a R$ 240k (Estimado)</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Benefits;