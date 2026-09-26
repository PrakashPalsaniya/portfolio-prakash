import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl K or / to open
      if (((e.ctrlKey || e.metaKey) && e.key === 'k') || (e.key === '/' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setSearch('');
      setSelectedIndex(0);
    }
  }, [open]);

  const actions = [
    { id: 'theme', name: 'Toggle Theme', action: () => document.querySelector('.theme-toggle')?.click() },
    { id: 'projects', name: 'Go to Pinned Projects', action: () => document.getElementById('pinned')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'contact', name: 'Go to Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    { id: 'github', name: 'Open GitHub Profile', action: () => window.open('https://github.com/PrakashPalsaniya', '_blank') },
  ];

  const filtered = actions.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleAction = (action) => {
    action();
    setOpen(false);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleAction(filtered[selectedIndex].action);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          className="modal-overlay" 
          style={{ alignItems: 'flex-start', paddingTop: '12vh' }}
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div 
            className="cmd-modal" 
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{ 
              width: '100%', maxWidth: 540, 
              background: 'var(--canvas)', border: '1px solid var(--border)', 
              borderRadius: 12, overflow: 'hidden', boxShadow: '0 16px 32px rgba(0,0,0,0.4)'
            }}
          >
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-muted)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
              <input
                ref={inputRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search..."
                style={{ 
                  flex: 1, background: 'transparent', border: 'none', 
                  color: 'var(--text)', fontSize: 16, outline: 'none', fontFamily: 'inherit'
                }}
              />
            </div>
            <div style={{ padding: '8px', maxHeight: 300, overflowY: 'auto' }}>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <div 
                    key={item.id}
                    onClick={() => handleAction(item.action)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    style={{
                      padding: '10px 12px', fontSize: 14, color: 'var(--text)', cursor: 'pointer',
                      borderRadius: 6, display: 'flex', alignItems: 'center', gap: 10,
                      background: index === selectedIndex ? 'var(--btn-hover)' : 'transparent'
                    }}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: 14 }}>
                  No results found.
                </div>
              )}
            </div>
            <div style={{ padding: '8px 16px', borderTop: '1px solid var(--border-muted)', fontSize: 11, color: 'var(--text-muted)', background: 'var(--canvas-subtle)', display: 'flex', justifyContent: 'space-between' }}>
              <span>Use <b>↑</b> <b>↓</b> to navigate and <b>Enter</b> to select</span>
              <span><b>esc</b> to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
